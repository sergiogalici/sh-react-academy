type ApiClientConfig = {
  baseUrl: string
}

const createApiClient = ({ baseUrl }: ApiClientConfig) => {
  return {
    get: async <Response>(resource: string): Promise<Response> => {
      const response = await fetch(`${baseUrl}/${resource}`)
      const body = await response.json()
      return body as Response
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
      return result as Response
    }
  }
}

export const apiClient = createApiClient({ baseUrl: process.env.REACT_APP_BASE_URL! })
