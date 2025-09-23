const TOKEN_KEY = 'authToken'

export const token = {
  set: (t: string) => {
    if (t) {
      localStorage.setItem(TOKEN_KEY, t)
    }
  },
  get: (): string | null => {
    return localStorage.getItem(TOKEN_KEY)
  },
  clear: (): void => {
    localStorage.removeItem(TOKEN_KEY)
  },
  remove: (): void => {
    localStorage.removeItem(TOKEN_KEY)
  },
}
