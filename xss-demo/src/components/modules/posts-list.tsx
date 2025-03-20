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
      "rgvmojnrondgvojdfnvoefnjonvjodsfncjoewdsfnvjewsdfnmjwersdvnjewn rgvmojnrondgvojdfnvoefnjonvjodsfncjoewdsfnvjewsdfnmjwersdvnjewn rgvmojnrondgvojdfnvoefnjonvjodsfncjoewdsfnvjewsdfnmjwersdvnjewn",
    comments: [
      {
        id: 1,
        user: "User1",
        content:
          "rgvmojnrondgvojdfnvoefnjonvjodsfncjoewdsfnvjewsdfnmjwersdvnjewn rgvmojnrondgvojdfnvoefnjonvjodsfncjoewdsfnvjewsdfnmjwersdvnjewn",
        isEditable: true,
      },
      {
        id: 2,
        user: "User",
        content:
          "rgvmojnrondgvojdfnvoefnjonvjodsfncjoewdsfnvjewsdfnmjwersdvnjewn rgvmojnrondgvojdfnvoefnjonvjodsfncjoewdsfnvjewsdfnmjwersdvnjewn",
        isEditable: false,
      },
      {
        id: 3,
        user: "User1",
        content:
          "rgvmojnrondgvojdfnvoefnjonvjodsfncjoewdsfnvjewsdfnmjwersdvnjewn rgvmojnrondgvojdfnvoefnjonvjodsfncjoewdsfnvjewsdfnmjwersdvnjewn",
        isEditable: true,
      },
    ],
  },
  {
    id: 2,
    user: "User2",
    date: "21/10/21 19:21",
    content:
      "rgvmojnrondgvojdfnvoefnjonvjodsfncjoewdsfnvjewsdfnmjwersdvnjewn rgvmojnrondgvojdfnvoefnjonvjodsfncjoewdsfnvjewsdfnmjwersdvnjewn rgvmojnrondgvojdfnvoefnjonvjodsfncjoewdsfnvjewsdfnmjwersdvnjewn",
    comments: [
      {
        id: 4,
        user: "User",
        content:
          "rgvmojnrondgvojdfnvoefnjonvjodsfncjoewdsfnvjewsdfnmjwersdvnjewn rgvmojnrondgvojdfnvoefnjonvjodsfncjoewdsfnvjewsdfnmjwersdvnjewn",
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

