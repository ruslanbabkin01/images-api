import axios from 'axios';
import { IImages, IServerResponse } from 'types/types';

// const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = '29966506-3ac2aa6cf44b4238878b6f625';

axios.defaults.baseURL = `https://pixabay.com/api/`;

axios.defaults.params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export async function fetchImages(searchQuery: string, page: number) {
  const { data } = await axios.get<IServerResponse<IImages>>(
    `?key=${API_KEY}&q=${searchQuery}&page=${page}`
  );
  return data;
}
