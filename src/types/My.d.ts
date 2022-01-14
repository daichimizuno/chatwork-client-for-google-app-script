export declare namespace My {
  export interface Room {
    room_id: number
    name: string
    icon_path: string
  }

  export interface AssignedByAccount {
    account_id: number
    name: string
    avatar_image_url: string
  }

  export interface Status {
    unread_room_num: number
    mention_room_num: number
    mytask_room_num: number
    unread_num: number
    mention_num: number
    mytask_num: number
  }

  export interface TasksParameter {
    assigned_by_account_id: number
    status: 'open' | 'done'
  }

  export interface Tasks {
    task_id: number
    room: Room
    assigned_by_account: AssignedByAccount
    message_id: string
    body: string
    limit_time: number
    status: string
    limit_type: string
  }
}
