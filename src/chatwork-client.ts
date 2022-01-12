/* eslint-disable no-undef */
import { ChatworkUrlFetchClient } from './chatwork-url-fetch-client'
import { Me } from './types/Me'

export class ChatWorkClient {
  baseUrl = 'https://api.chatwork.com/v2'
  chatworkUrlFetchClient: ChatworkUrlFetchClient

  constructor(token: string) {
    this.chatworkUrlFetchClient = ChatworkUrlFetchClient.getInstance(token)
  }

  me(): Me.Me {
    const response = this.chatworkUrlFetchClient.get('/me')
    const me = JSON.parse(response.getContentText()) as Me.Me
    return me
  }
}
