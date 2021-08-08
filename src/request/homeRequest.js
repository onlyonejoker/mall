import {request} from "./axios";

export function getHomeData() {
	return request({url: "/home/multidata"});
}
export function getHomeGoods(type, page) {
	return request({
		url: "/home/data",
		params: {
			type,
			page,
		},
	});
}

export function getdetailGoods(iid) {
	return request({
		url: "/detail",
		params: {
			iid,
		},
	});
}
export function getRecommend() {
	return request({url: "/recommend"});
}
