const createApiClient = ({
  baseUrl
}: {
  baseUrl: string
}): {
  get: <T>(endpoint: string) => Promise<T>
  post: <T>(endpoint: string, body: any) => Promise<T>
} => {
  return {
    get: async <T>(endpoint: string): Promise<T> => {
      const response = await fetch(`${baseUrl}/${endpoint}`)
      const body = await response.json()
      return body as T
    },

    post: async <T>(endpoint: string, body: any): Promise<T> => {
      const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
      })
      const result = await response.json()
      return result as T
    }
  }
}

export const apiClient = createApiClient({ baseUrl: '' + process.env.REACT_APP_BASE_URL })
