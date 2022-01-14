/* eslint-disable no-undef */
import { ChatworkUrlFetchClient } from './chatwork-url-fetch-client'
import { Me } from './types/Me'
import { My } from './types/My'

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

  myStatus(): My.Status {
    const response = this.chatworkUrlFetchClient.get('/my/status')
    const status = JSON.parse(response.getContentText()) as My.Status
    return status
  }

  myTasks(params?: My.TasksParameter): My.Tasks {
    const response = this.chatworkUrlFetchClient.get('/my/tasks', params)
    const tasks = JSON.parse(response.getContentText()) as My.Tasks
    return tasks
  }
}
