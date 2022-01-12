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
    let url = this.baseUrl

    if (params) {
      const keys = Object.keys(params)
      keys.map((key: string) => [
        (url = this.updateQueryStringParameter(url, key, params[key]))
      ])
    }
    // eslint-disable-next-line no-undef
    const response = UrlFetchApp.fetch(`${url}${path}`, options)
    return response
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
