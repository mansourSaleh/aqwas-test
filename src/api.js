import URL from './apiConfig'
import axios from 'axios'
// If we have more than one api call we put all our request in one place
// So it will be easy to mange
export const getRandomRestaurant = () => {
   return axios.get(URL)
}