import {APPLICATION_ID} from '../token.js';

const GET_PHOTOS = 'GET_PHOTOS';
const SET_SEARCH = 'SET_SEARCH';

let myHeaders = new Headers();
myHeaders.append("Authorization", "Client-ID " + APPLICATION_ID);

let myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

export function getPhotos(search) {
  return (dispatch, getState) => {
    fetch(`https://api.unsplash.com/search/photos/?query=${search}`, myInit)
      .then(response => {
        return response.json();
      })
      .then(json => {
        const results = json.results;;
        dispatch(setPhotos(results));
      });
  }
};

const setPhotos = (data) => {
  return {
    type: GET_PHOTOS,
    payload: data
  };
}

export function updateSearch(char) {
  return (dispatch, getState) => {
    dispatch(setSearch(char));
  }
}

const setSearch = (char) => {
  return {
    type: SET_SEARCH,
    payload: char
  };
}
