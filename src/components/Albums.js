//@flow

import React, { Component } from 'react';
import { Link } from 'react-router';
import {CommonService} from '../services/CommonService';
import './album.css';

type AlbumType = {
    id: number,
    title: string,
}

type State = {
    albums: Array<AlbumType>,
    loaded: boolean
}


class Albums extends Component {
    state: State = {
        albums: [],
        loaded: false
    }
    componentDidMount() {
        this.loadAlbums();
    }
    loadAlbums = async () => {
        try {
            let response = await CommonService.getAlbums();
            this.setState({albums: response.data, loaded: true});
        } catch(e) {
            console.log(e);
        }
    }
    render() {
        if (!this.state.loaded) return(<div>Carregando ... </div>);

        return (
            <div className="album-container">
                {
                    this.state.albums.map(album => {
                        let {id, title} = album;
                        return (
                            <Link to={`/photos/${id}`}>
                                <div key={id} className="album-item">
                                    {title}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}

export default Albums;