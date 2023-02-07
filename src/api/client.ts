const createApiClient = ({ baseUrl }: string): <T> => ({
  get: async <T>(endpoint: string) => {
    const response = await fetch(`${baseUrl}/${endpoint}`)
    const body = await response.json()
    return body
  },

  post:
})

export const apiClient = createApiClient({baseUrl: process.env.Re})

apiClient.get()
