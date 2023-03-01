import axios from 'axios'

export default class Axiosservices {
post(url, data, IsRequired =false, Header) {
    return axios.post(url, data, IsRequired && Header)
}
}

