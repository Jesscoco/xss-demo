"use client"

import type React from "react"
import { useState } from "react"
import type { Comment } from "../types"

interface CommentFormProps {
  postId: number
  onAddComment: (postId: number, comment: Comment) => void
  user: string
}

export default function CommentForm({ postId, onAddComment, user }: CommentFormProps) {
  const [content, setContent] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!content.trim()) return

    const newComment: Comment = {
      id: Date.now(), // Simple ID generation
      user: isAnonymous ? "Anonymous" : user,
      content,
      isEditable: !isAnonymous,
    }

    onAddComment(postId, newComment)
    setContent("")
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 border-t pt-4">
      <div className="flex items-center mb-2">
        <span className="font-semibold text-[#e86225]">{user}</span>
      </div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded-md mb-2"
        rows={1}
        placeholder="Write a comment..."
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id={`anonymous-${postId}`}
            checked={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
            className="mr-2"
          />
          <label htmlFor={`anonymous-${postId}`} className="text-sm text-gray-600">
            Anonymos
          </label>
        </div>
        <button
          type="submit"
          className="bg-white text-[#e86225] px-3 py-1 rounded border border-[#e86225] text-sm hover:bg-[#e86225] hover:text-white transition-colors"
        >
          Post comment
        </button>
      </div>
    </form>
  )
}

