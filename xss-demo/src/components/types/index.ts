export interface Comment {
    id: number
    user: string
    content: string
    isEditable: boolean
  }
  
  export interface Post {
    id: number
    user: string
    date: string
    content: string
    comments: Comment[]
  }
  