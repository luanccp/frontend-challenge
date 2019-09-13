const baseUrl = 'https://restcountries.eu/rest/v2/all'

class Api {
  getCountries() {
    return fetch(baseUrl).then(res => res.json())
  }
}

const api = new Api()

export default api
