"use client"

import type React from "react"
import { useState } from "react"

export default function NewPostForm() {
  const [content, setContent] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!content.trim()) return

    // Here you would typically send the post to your backend
    console.log("New post:", { content, isAnonymous })

    // Reset form
    setContent("")
    setIsAnonymous(false)
  }

  return (
    <div className="bg-gray-200 rounded-lg p-4">
      <div className="flex items-center mb-2">
        <span className="font-semibold text-[#e86225]">User2</span>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-3 border rounded-md mb-3"
          rows={4}
          placeholder="Content"
        />
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <button type="button" className="bg-white text-gray-700 px-4 py-2 rounded border">
              Select an image
            </button>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="anonymous-post"
                checked={isAnonymous}
                onChange={() => setIsAnonymous(!isAnonymous)}
                className="mr-2"
              />
              <label htmlFor="anonymous-post" className="text-gray-700">
                Anonymos
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#e86225] text-white px-8 py-2 rounded text-xl font-semibold hover:bg-[#d55214] transition-colors"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  )
}

