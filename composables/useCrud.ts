interface RequestOptions<T> {
  method?: any
  success?: Function
  error?: Function
  body?: any
  url: string
}

export function useCrud() {
  const { public: { baseURL } } = useRuntimeConfig()

  const getData = async <T>(options: RequestOptions<T>) => {
    const { success, error, url } = options
    if (!url) {
      throw new Error("URL value is missing. Should be a string")
    }
    return await useLazyFetch<T>(url, {
      baseURL,
      onResponse({ response: { _data } }) {
        success && success(_data.data)
      },
      onResponseError({ response: { _data } }) {
        error && error(_data)
      }
    })
  }

  const setData = async <T>(options: RequestOptions<T>) => {
    const { success, error, method, body, url } = options
    if (!method) {
      throw new Error("Method value is missing. Should be 'GET' | 'POST' | 'PUT' | 'DELETE'")
    }
    if (!url) {
      throw new Error("URL value is missing. Should be a string")
    }
    if (!body && (method === 'POST' || method === 'PUT')) {
      throw new Error("Body value is missing.")
    }
    return await useFetch<T>(url, {
      baseURL,
      method,
      body: (method === 'POST' || method === 'PUT') ? body : undefined,
      onResponse({ response: { _data } }) {
        success && success(_data)
      },
      onResponseError({ response: { _data } }) {
        error && error(_data)
      }
    })
  }

  return {
    getData,
    setData
  }
}