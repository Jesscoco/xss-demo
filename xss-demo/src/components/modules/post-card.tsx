"use client"

import { useState } from "react"
import type { Post, Comment } from "../types"
import CommentForm from "./comment-form"

interface PostCardProps {
  post: Post
  onAddComment: (postId: number, comment: Comment) => void
  onDeleteComment: (postId: number, commentId: number) => void
  onEditComment: (postId: number, commentId: number, newContent: string) => void
}

export default function PostCard({ post, onAddComment, onDeleteComment, onEditComment }: PostCardProps) {
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null)
  const [editContent, setEditContent] = useState("")

  const handleEditClick = (comment: Comment) => {
    setEditingCommentId(comment.id)
    setEditContent(comment.content)
  }

  const handleSaveEdit = (commentId: number) => {
    onEditComment(post.id, commentId, editContent)
    setEditingCommentId(null)
  }

  const handleCancelEdit = () => {
    setEditingCommentId(null)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="font-semibold text-[#8b3a4a]">{post.user}</span>
          <span className="ml-2 text-sm text-gray-500">{post.date}</span>
        </div>
        <p className="text-gray-700 mb-4">{post.content}</p>

        <div className="space-y-4 mt-6">
          {post.comments.map((comment) => (
            <div key={comment.id} className="border-t pt-4">
              <div className="flex items-center mb-2">
                {/* <span className="font-semibold text-[#e86225]">{comment.user}</span> */}
                <p className="text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: comment.content }}></p>

                {comment.isEditable && (
                  <div className="ml-auto space-x-2">
                    {editingCommentId === comment.id ? (
                      <>
                        <button
                          onClick={() => handleSaveEdit(comment.id)}
                          className="text-green-500 text-sm hover:underline"
                        >
                          Save
                        </button>
                        <button onClick={handleCancelEdit} className="text-gray-500 text-sm hover:underline">
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEditClick(comment)}
                          className="text-[#e86225] text-sm hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => onDeleteComment(post.id, comment.id)}
                          className="text-[#e86225] text-sm hover:underline"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>

              {editingCommentId === comment.id ? (
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  rows={2}
                />
              ) : (
                <p className="text-red text-sm">{comment.content}</p>
              )}
            </div>
          ))}
        </div>

        <CommentForm postId={post.id} onAddComment={onAddComment} user="User2" />
      </div>
    </div>
  )
}

