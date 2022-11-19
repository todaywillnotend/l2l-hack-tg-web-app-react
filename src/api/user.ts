import axios from 'axios';
import { IUser } from 'src/types';
import { apiUrl } from './';

export const Api = {
	getUser: async (id: string) => {
		return axios.get<IUser>(`${apiUrl}users/${id}`).then((response) => response.data);
	}
}