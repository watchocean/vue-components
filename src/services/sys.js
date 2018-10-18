import * as api from "../api";
import axios from "../common/axios";

export function login (params) {
	return new Promise ((resolve, reject) => {
		axios.post(api.LOGIN, { params }).then(response => {
			resolve(response.data);
		})
	})
}