import axios from 'axios'
const url = 'http://localhost:3000/api/'
export default {
  course () {
    return axios.get(url + 'course/').then(response => response.data)
  }
}