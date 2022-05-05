import axios from 'axios'
import { API_URL } from './config'
export const ApiService = {
    getAllLaunchPad: () => {
        return axios.get(API_URL + '/launchpads')
    },
    getOneLaunch: (id) => {
        return axios.get(API_URL + '/launches/' + id)
    }
}