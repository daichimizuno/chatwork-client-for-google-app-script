import { Me } from './types/Me'

const me = {
  account_id: 'aaa'
} as unknown as Me.Me

console.log(me.account_id)
