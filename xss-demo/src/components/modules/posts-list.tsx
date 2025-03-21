"use client"

import { useState } from "react"
import type { Post, Comment } from "../types"
import PostCard from "./post-card"

// Sample data
const initialPosts: Post[] = [
  {
    id: 1,
    user: "User2",
    date: "21/10/21 19:21",
    content:
      "Quand une personne reçoit, sur Internet ou sur son téléphone portable, des messages répétés et malveillants, on parle de cyberharcèlement. Ces messages peuvent contenir des menaces, des insultes ou du chantage. Si la personne harcelée ne fait pas ce qu’on lui demande (une rencontre, de l’argent ou des informations personnelles), elle peut subir desviolences ou des humiliations dans la vie réelle et voir des rumeurs se propager sur elle. C’est un délit puni par la loi qui touche particulièrement les jeunes.",
    comments: [
      {
        id: 1,
        user: "User1",
        content:
          " Comme pour le harcèlement scolaire, le cyberharcèlement peut laisser des séquelles aux personnes qui en sont victimes",
        isEditable: true,
      },
      {
        id: 2,
        user: "User",
        content:
          " Sur les réseaux sociaux, il faut choisir avec qui on veut partager des informations personnelles  (sur soi, sa famille ou ses amis) car toutes ces personnes ne sont pas forcément de « vrais amis ». ",
        isEditable: false,
      },
      {
        id: 3,
        user: "User1",
        content:
          "QUE FAIRE EN CAS DE CYBER-HARCÈLEMENT ? ",
        isEditable: true,
      },
    ],
  },
  {
    id: 2,
    user: "User2",
    date: "21/10/25 20:21",
    content:
      "  D’après la Convention internationale des droits de l’enfant, tous les enfants du monde doivent être protégés contre la violence, la maltraitance et la discrimination",
    comments: [
      {
        id: 4,
        user: "User",
        content:
          " L’entraide et la solidarité sont essentiels dans pour ne pas s’enfermer dans le cyberharcèlement et que cela prenne des proportions plus graves. Il faut arriver à en parler à un adulte de confiance ou de l’école par exemple, qui peuvent t’écouter, te conseiller et surtout te protéger. Ils peuvent trouver des solutions pour toi ou ton camarade. ",
        isEditable: false,
      },
    ],
  },
]

export default function PostsList() {
  const [posts, setPosts] = useState<Post[]>(initialPosts)

  const handleAddComment = (postId: number, comment: Comment) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, comments: [...post.comments, comment] } : post)))
  }

  const handleDeleteComment = (postId: number, commentId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, comments: post.comments.filter((c) => c.id !== commentId) } : post,
      ),
    )
  }

  const handleEditComment = (postId: number, commentId: number, newContent: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((c) => (c.id === commentId ? { ...c, content: newContent } : c)),
            }
          : post,
      ),
    )
  }

  return (
    <div className="space-y-6 mb-8">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onAddComment={handleAddComment}
          onDeleteComment={handleDeleteComment}
          onEditComment={handleEditComment}
        />
      ))}
    </div>
  )
}

