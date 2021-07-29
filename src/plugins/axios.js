"use strict";
import axios from "axios";

let config = {
	baseURL: "http://127.0.0.1:3000/mock/19",
	timeout: 2 * 1000,
	// withCredentials: true, // Check cross-site Access-Control
};

const install = axios.create(config);
install.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

install.interceptors.response.use(
	response => {
		return response.data;
	},
	error => {
		return Promise.reject(error);
	}
);

const request = function(config) {
	return install(config);
};

export {request};
