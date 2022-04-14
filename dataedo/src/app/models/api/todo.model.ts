export interface TodoModel {
  due_on: string
  id: number
  status: 'completed' | 'pending'
  title: string
  user_id: number
}
