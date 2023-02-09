type ApiClientConfig = {
  baseUrl: string
}

const createApiClient = ({ baseUrl }: ApiClientConfig) => {
  return {
    get: async <Response>(resource: string): Promise<Response> => {
      try {
        const response = await fetch(`${baseUrl}/${resource}`)
        const body = await response.json()
        return body as Response
      } catch (e) {
        console.log(e)
      }
      return 'No Return' as Response
    },

    post: async <Response, RequestData>(
      resource: string,
      body: RequestData
    ): Promise<Response> => {
      try {
        const response = await fetch(`${baseUrl}/${resource}`, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' }
        })
        const result = await response.json()
        return result as Response
      } catch (e) {
        console.log(e)
      }
      return 'No Return' as Response
    }
  }
}

export const apiClient = createApiClient({ baseUrl: process.env.REACT_APP_BASE_URL! })
export const currencyApiClient = createApiClient({
  baseUrl: process.env.REACT_APP_CURRENCY_BASE_URL!
})
