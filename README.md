# ChatWorkClientForGas (Google App Script)

Google App Script 向けの ChatWork API のライブラリです。

趣味で書いているものなので、足りない部分などがあると思いますので、ほしい機能があれば Issue かプルリクを投げて貰えればと思います

## 使い方

## 1. ライブラリを検索する

Google App Script 上で下記を検索してください。

```
1DXlHJ6kIR7-a5pA2ujqYGN1exKWt1xdJGlp5PoYYgWrYXfzoaJ7kkblD
```

## 2. バージョンを選択して ID を設定

- バージョン 2 を選択してください
- ID はお好きなものでいいですが、本 Readme では<b>「chatwork」</b>と設定することを推奨します

## 3. 呼び出す API を選択して、サンプルを確認してください

- [getMe](#getMe)
- [getMyStatus](#getMyStatus)
- [getMyTasks](#getMyTasks)
- [getContacts](#getContacts)
- [getRooms](#getRooms)
- [postRooms](#postRooms)
- [getRoomsRoomId](#getRoomsRoomId)
- [putRoomsRoomId](#putRoomsRoomId)
- [deleteRoomsRoomId](#deleteRoomsRoomId)

## getMe

#### 自分自身の情報を取得

- リクエスト例

```
var token = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
var chatworkClient = chatwork.ChatWorkClient.getInstance(token)
var me = chatworkClient.getMe()
```

- レスポンス例

```
{
  account_id: xxxxxxx,
  room_id: xxxxxxxxx,
  name: 'Daichi Mizuno',
  chatwork_id: '',
  organization_id: xxxxxxxxx,
  organization_name: '',
  department: '',
  title: '',
  url: '',
  introduction: '',
  mail: '',
  tel_organization: '',
  tel_extension: '',
  tel_mobile: '',
  skype: '',
  facebook: '',
  twitter: '',
  avatar_image_url: 'https://appdata.chatwork.com/avatar/ico_default_yellow.png',
  login_mail: 'test@gmail.com'
}
```

## getMyStatus

#### 自分の未読数、未読 To 数、未完了タスク数を返す

- リクエスト例

```
var token = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
var chatworkClient = chatwork.ChatWorkClient.getInstance(token)
var myStatus = chatworkClient.getMyStatus()
```

- レスポンス例

```
{
  unread_room_num: 0,
  mention_room_num: 0,
  mytask_room_num: 1,
  unread_num: 0,
  mention_num: 0,
  mytask_num: 1
}
```

## getMyTasks

#### 自分のタスク一覧を取得

- リクエスト例<br>
  パラメータは[My.d.ts](src/types/My.d.ts)の<b>TasksParameter</b>を参照してください

```
var token = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
var chatworkClient = chatwork.ChatWorkClient.getInstance(token)
var params ={
  status: 'open'
}
var myTasks = chatworkClient.getMyTasks(params)
```

- レスポンス例

```
[
  {
    task_id: 247758651,
    room:
      {
        room_id: xxxxxxxxxx,
        name: 'マイチャット',
        icon_path: 'https://appdata.chatwork.com/avatar/ico_default_yellow.png'
      },
    assigned_by_account:
      {
        account_id: xxxxxx,
        name: 'Daichi Mizuno',
        avatar_image_url: 'https://appdata.chatwork.com/avatar/ico_default_yellow.png'
      },
    message_id: '1534166403387490304',
    body: 'xxxxxxx',
    limit_time: 1642247362,
    status: 'open',
    limit_type: 'date'
  }
]
```

## getContacts

#### 自分のコンタクト一覧を取得

- リクエスト例<br>

```
var token = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
var chatworkClient = chatwork.ChatWorkClient.getInstance(token)
var contacts = chatworkClient.getContacts()
```

- レスポンス例

```
[
  {
    account_id: xxxxxx,
    room_id: xxxxxx,
    name: 'xxxxxx',
    chatwork_id: 'xxxxxx',
    organization_id: xxxxxx,
    organization_name: '',
    department: '',
    avatar_image_url: 'xxxxxx'
  }
]
```

## getRooms

#### 自分のチャット一覧の取得

- リクエスト例<br>

```
var token = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
var chatworkClient = chatwork.ChatWorkClient.getInstance(token)
var rooms = chatworkClient.getRooms()
```

- レスポンス例

```
[
  {
    room_id: 142989851,
    name: 'マイチャット',
    type: 'my',
    role: 'member',
    sticky: false,
    unread_num: 0,
    mention_num: 0,
    mytask_num: 1,
    message_num: 13,
    file_num: 0,
    task_num: 1,
    icon_path: 'https://appdata.chatwork.com/avatar/ico_default_yellow.png',
    last_update_time: 1642247591
  }
]

```

## postRooms

#### グループチャットを新規作成

- リクエスト例<br>
  パラメータは[Room.d.ts](src/types/Room.d.ts)の<b>PostRoomParameter</b>を参照してください

```
var token = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
var chatworkClient = chatwork.ChatWorkClient.getInstance(token)
var params = {
  name: "テストグループ",
  members_admin_ids: "xxxxxxx"
}
var rooms = chatworkClient.postRooms(params)
```

- レスポンス例

```
{
  room_id: xxxxxxxxx
}
```

## getRoomsRoomId

#### チャットの名前、アイコン、種類(my/direct/group)を取得

- リクエスト例<br>

```
var token = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
var chatworkClient = chatwork.ChatWorkClient.getInstance(token)
var roomId = "xxxxxxxxx"
var roomsWithRoomId = chatworkClient.getRoomsRoomId(roomId)
```

- レスポンス例

```
{
  room_id: xxxxxxxxx,
  name: 'テストグループ',
  type: 'group',
  role: 'admin',
  sticky: false,
  unread_num: 0,
  mention_num: 0,
  mytask_num: 0,
  message_num: 2,
  file_num: 0,
  task_num: 0,
  icon_path: 'https://appdata.chatwork.com/icon/ico_group.png',
  description: '',
  last_update_time: 1642251755
}
```

## putRoomsRoomId

#### チャットの名前、アイコンをアップデート

- リクエスト例<br>
  パラメータは[Room.d.ts](src/types/Room.d.ts)の<b>PutRoomRoomIdParameter</b>を参照してください

```
var token = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
var chatworkClient = chatwork.ChatWorkClient.getInstance(token)
var roomId = "xxxxxxxxx"
var params = {
  description: "テストです",
  icon_preset: "star",
  name: "テストグループ"
}
var updateRoomResponse = chatworkClient.putRoomsRoomId(roomId, params)
```

- レスポンス例

```
{ 
  room_id: xxxxxxxxx 
}
```

## deleteRoomsRoomId

#### グループチャットを退席/削除する

- リクエスト例<br>
  パラメータは[Room.d.ts](src/types/Room.d.ts)の<b>DeleteRoomRoomIdParameter</b>を参照してください

```
var token = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
var chatworkClient = chatwork.ChatWorkClient.getInstance(token)
var roomId = "xxxxxxxxx"
var params = {
  action_type: "delete"
}
chatworkClient.deleteRoomsRoomId(roomId, params)
```

- レスポンス例

```
なし
```