//@flow

import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import {CommonService} from '../services/CommonService';
import './photos.css';

type PhotoType = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

type Props = {
    params: {
        id: number
    }
}

type State = {
    photos: Array<PhotoType>,
    loaded: boolean,
    filter: string
}

class Photos extends Component {
    props: Props;
    state: State = {
        photos: [],
        loaded: false,
        filter: '10'
    }
    componentDidMount() {
        this.carregarPhotos();
    }
    carregarPhotos = async (quantidade: string = '10') => {
        try {
            let response = await CommonService.getPhotos(quantidade, this.props.params.id);
            debugger;
            this.setState({photos: response.data, loaded: true});
        } catch(e) {
            console.log(e);
        }
    }
    filterBy = (quantidade: string) => {
        this.carregarPhotos(quantidade);
        this.setState({filter: quantidade});
    }
    render() {
        if (!this.state.loaded) return(<div>Carregando ... </div>);

        let images = this.state.photos.map(photo => {
            return {
                src: photo.url,
                thumbnail: photo.thumbnailUrl,
                thumbnailWidth: 150,
                thumbnailHeight: 150,
                caption: photo.title
            }
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="form-group">
                        <label className="col-sm-12">Quantidade de Registros:</label>
                        <div className="col-lg-1 col-md-1">
                            <select
                                className="form-control"
                                onChange={(e) => this.filterBy(e.currentTarget.value)}
                                value={this.state.filter}
                            >
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                                <option>40</option>
                                <option>50</option>
                                <option>60</option>
                                <option>70</option>
                                <option>80</option>
                                <option>90</option>
                                <option>100</option>
                            </select>
                        </div>
                    </div>
                </div>
                <Gallery 
                    images={images}
                    enableImageSelection={false}
                    imageCountSeparator={" de "}
                />
            </div>
        );
    }
}

export default Photos;