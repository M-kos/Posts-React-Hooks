const basisUrl = 'https://jsonplaceholder.typicode.com/'

export class Http {
  static async getData(query) {
    try {
      const response = await fetch(basisUrl + query)

      if (!response.ok) {
        throw new Error(response)
      }

      const data = await response.json()

      return data
    } catch (error) {
      console.error(error.message || error)
      throw new Error(error)
    }
  }
}
