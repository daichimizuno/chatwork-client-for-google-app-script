export declare namespace Rooms {
  export interface GetRoomResponse {
    room_id: number
    name: string
    type: string
    role: string
    sticky: boolean
    unread_num: number
    mention_num: number
    mytask_num: number
    message_num: number
    file_num: number
    task_num: number
    icon_path: string
    last_update_time: number
  }

  type IconPreset =
    | 'group'
    | 'check'
    | 'document'
    | 'meeting'
    | 'event'
    | 'project'
    | 'business'
    | 'study'
    | 'security'
    | 'star'
    | 'idea'
    | 'heart'
    | 'magcup'
    | 'beer'
    | 'music'
    | 'sports'
    | 'travel'

  export interface PostRoomParameter {
    description?: string
    icon_reset?: IconPreset
    link?: boolean
    link_code?: string
    link_need_acceptance?: boolean
    members_admin_ids: string[]
    members_member_ids?: string[]
    members_readonly_ids?: string[]
    name: string
  }

  export interface RoomIdResponse {
    room_id: string
  }

  export interface PutRoomRoomIdParameter {
    description?: string
    icon_preset?: IconPreset
    name?: string
  }

  export interface DeleteRoomRoomIdParameter {
    action_type: 'leave' | 'delete'
  }
}
