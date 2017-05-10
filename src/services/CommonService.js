//@flow
import axios from 'axios';

const URL_BASE = 'https://jsonplaceholder.typicode.com';

export const CommonService = {
    getAlbums() {
        return axios.get(`${URL_BASE}/albums`);
    },
    getPhotos(limit: string = '10', albumId: number) {
        return axios.get(`${URL_BASE}/photos?albumId=${albumId}&_limit=${limit}`);
    },
    getPhotosByAlbumId(albumId: number) {
        return axios.get(`${URL_BASE}/photos?albumId=${albumId}`);
    }
}