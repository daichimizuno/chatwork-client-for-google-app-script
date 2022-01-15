/* eslint-disable no-undef */
import { ChatworkUrlFetchClient } from './chatwork-url-fetch-client'
import { Contacts } from './types/Contacts'
import { Me } from './types/Me'
import { My } from './types/My'
import { Rooms } from './types/Room'

export class ChatWorkClient {
  private static instance: ChatWorkClient
  chatworkUrlFetchClient: ChatworkUrlFetchClient

  private constructor(token: string) {
    this.chatworkUrlFetchClient = ChatworkUrlFetchClient.getInstance(token)
  }

  static getInstance(token: string): ChatWorkClient {
    if (!this.instance) {
      this.instance = new ChatWorkClient(token)
    }
    return this.instance
  }

  getMe(): Me.Me {
    const response = this.chatworkUrlFetchClient.get('/me')
    const me = JSON.parse(response.getContentText()) as Me.Me
    return me
  }

  getMyStatus(): My.Status {
    const response = this.chatworkUrlFetchClient.get('/my/status')
    const status = JSON.parse(response.getContentText()) as My.Status
    return status
  }

  getMyTasks(params?: My.TasksParameter): My.Tasks[] {
    const response = this.chatworkUrlFetchClient.get('/my/tasks', params)
    const tasks = JSON.parse(response.getContentText()) as My.Tasks[]
    return tasks
  }

  getContacts(): Contacts.Contacts[] {
    const response = this.chatworkUrlFetchClient.get('/contacts')
    const contacts = JSON.parse(
      response.getContentText()
    ) as Contacts.Contacts[]
    return contacts
  }

  getRooms(): Rooms.GetRoomResponse[] {
    const response = this.chatworkUrlFetchClient.get('/rooms')
    const rooms = JSON.parse(
      response.getContentText()
    ) as Rooms.GetRoomResponse[]
    return rooms
  }

  postRooms(data: Rooms.PostRoomParameter): Rooms.RoomIdResponse {
    const response = this.chatworkUrlFetchClient.post('/rooms', data)
    const room = JSON.parse(response.getContentText()) as Rooms.RoomIdResponse
    return room
  }

  getRoomsRoomId(roomId: string): Rooms.GetRoomResponse {
    const response = this.chatworkUrlFetchClient.get(`/rooms/${roomId}`)
    const roomResponse = JSON.parse(
      response.getContentText()
    ) as Rooms.GetRoomResponse
    return roomResponse
  }

  putRoomsRoomId(
    roomId: string,
    data: Rooms.PutRoomRoomIdParameter
  ): Rooms.RoomIdResponse {
    const response = this.chatworkUrlFetchClient.put(`/rooms/${roomId}`, data)
    const room = JSON.parse(response.getContentText()) as Rooms.RoomIdResponse
    return room
  }

  deleteRoomsRoomId(
    roomId: string,
    data: Rooms.DeleteRoomRoomIdParameter
  ): void {
    this.chatworkUrlFetchClient.delete(`/rooms/${roomId}`, data)
  }
}

export const chatworkClient = ChatWorkClient
