import { ChatWorkClient } from './chatwork-client'
import { Me } from './types/Me'

// eslint-disable-next-line no-unused-vars
const main = () => {
  const token = '4f11749ce7b7c0017892ba31a8eb93ce'
  const chatworkClient = new ChatWorkClient(token)

  // Me API
  const me = chatworkClient.me() as Me.Me

  console.log(me)
  console.log(me.account_id)
}
