// @ts-ignore
export const jServApi = axios.create({
  baseURL: 'https://jservice.io/api/random',
  timeout: 10000
})

// @ts-ignore
export const sandboxApi = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/players',
  timeout: 10000
})