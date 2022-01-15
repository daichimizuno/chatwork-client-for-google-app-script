export class ChatworkUrlFetchClient {
  private static instance: ChatworkUrlFetchClient
  baseUrl = 'https://api.chatwork.com/v2'
  commonChatworkHeader: Object

  private constructor(token: string) {
    this.commonChatworkHeader = {
      'X-ChatWorkToken': token
    }
  }

  static getInstance(token: string): ChatworkUrlFetchClient {
    if (!this.instance) {
      this.instance = new ChatworkUrlFetchClient(token)
    }
    return this.instance
  }

  get(path: string, params?: Object): any {
    const options = {
      headers: this.commonChatworkHeader
    }
    let url = this.baseUrl + path
    if (params) {
      const keys = Object.keys(params)
      keys.map(
        (key: string) =>
          (url = this.updateQueryStringParameter(url, key, params[key]))
      )
    }
    console.log(`request url ${JSON.stringify(url)}`)
    console.log(`request options ${JSON.stringify(options)}`)
    console.log(`request params ${JSON.stringify(params)}`)

    return this.execute(url, options)
  }

  post(path: string, data: Object): any {
    let payload: string = ''
    const url = this.baseUrl + path

    if (data) {
      payload = this.createPayload(payload, data)
    }

    const options = {
      method: 'post',
      headers: this.commonChatworkHeader,
      payload: payload
    }

    return this.execute(url, options)
  }

  put(path: string, data: Object): any {
    let payload: string = ''
    const url = this.baseUrl + path

    if (data) {
      payload = this.createPayload(payload, data)
    }

    const options = {
      method: 'put',
      headers: this.commonChatworkHeader,
      payload: payload
    }

    return this.execute(url, options)
  }

  delete(path: string, data: Object): any {
    let payload: string = ''
    const url = this.baseUrl + path

    if (data) {
      payload = this.createPayload(payload, data)
    }

    const options = {
      method: 'delete',
      headers: this.commonChatworkHeader,
      payload: payload
    }

    return this.execute(url, options)
  }

  createPayload(payload: string, data: Object): string {
    const keys = Object.keys(data)
    keys.map(
      (key: string) =>
        (payload = this.updatePostPayload(payload, key, data[key]))
    )
    return payload
  }

  execute(url: string, options: Object): any {
    // eslint-disable-next-line no-undef
    const response = UrlFetchApp.fetch(url, options)
    return response
  }

  private updatePostPayload(
    payload: string,
    key: string,
    value: string
  ): string {
    if (payload.length !== 0) {
      return `${payload}&${key}=${value}`
    } else {
      return `${key}=${value}`
    }
  }

  private updateQueryStringParameter(url: string, key: string, value: string) {
    const re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
    const separator = url.indexOf('?') !== -1 ? '&' : '?'
    if (url.match(re)) {
      return url.replace(re, '$1' + key + '=' + value + '$2')
    } else {
      return url + separator + key + '=' + value
    }
  }
}
