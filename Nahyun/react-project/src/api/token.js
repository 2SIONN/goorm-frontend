const TOKEN_KEY = 'authToken'

export const token = {
  set: (t) => {
    if (t) {
      localStorage.setItem(TOKEN_KEY, t)
    }
  },
  get: () => {
    return localStorage.getItem(TOKEN_KEY)
  },
  clear: () => {
    localStorage.removeItem(TOKEN_KEY)
  },
  remove: () => {
    localStorage.removeItem(TOKEN_KEY)
  },
}
