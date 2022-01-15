import { ChatWorkClient } from './chatwork-client'
import { Contacts } from './Contacts'
import { Me } from './types/Me'
import { My } from './types/My'

// eslint-disable-next-line no-unused-vars
const main = () => {
  const token = '4f11749ce7b7c0017892ba31a8eb93ce'
  const chatworkClient = new ChatWorkClient(token)

  // Me API
  const me = chatworkClient.me() as Me.Me

  console.log(me)
  console.log(me.account_id)

  // My API
  const myStatus = chatworkClient.myStatus() as My.Status
  console.log(JSON.stringify(myStatus))

  const taskParamter = {
    status: 'open'
  } as My.TasksParameter
  const myTasks = chatworkClient.myTasks(taskParamter) as My.Tasks[]
  console.log(JSON.stringify(myTasks))

  // Contacts API
  const contacts = chatworkClient.contacts() as Contacts.Contacts[]
  console.log(JSON.stringify(contacts))
}
