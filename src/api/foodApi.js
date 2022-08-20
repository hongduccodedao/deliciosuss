/* eslint-disable no-useless-concat */
import axiosClient from "./axiosClient";

const foodApi = {
    getRandomFood: (number, params) => {
        const url = 'random' + "&number=" + number;
        return axiosClient.get(url, { params })
    }
}

export default foodApi;