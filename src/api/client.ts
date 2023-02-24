type ApiClientConfig = {
  baseUrl: string
}

const createApiClient = ({ baseUrl }: ApiClientConfig) => {
  return {
    get: async <Response>(resource: string): Promise<Response> => {
      const response = await fetch(`${baseUrl}/${resource}`)
      const body = await response.json()
      return body
    },

    post: async <Response, RequestData>(
      resource: string,
      body: RequestData
    ): Promise<Response> => {
      const response = await fetch(`${baseUrl}/${resource}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
      })
      const result = await response.json()
      return result
    }
  }
}

export const apiClient = createApiClient({ baseUrl: process.env.REACT_APP_BASE_URL! })
export const currencyApiClient = createApiClient({
  baseUrl: process.env.REACT_APP_CURRENCY_BASE_URL!
})
export const adDetailApiClient = createApiClient({
  baseUrl: process.env.REACT_APP_AD_DETAIL_URL!
})
