"use client"
import { AddPostAction } from "@/actions/addPost.action"
import React, { startTransition, useOptimistic } from "react"
import Card from "./Card"

const Posts = ({ data }: any) => {
  const [optimisticPosts, setOptimisticPosts] = useOptimistic(
    data,
    (currentState, optimisticValue: Object) => {
      return [{ ...optimisticValue, isSending: true }, ...currentState]
    }
  )
  const handleSubmit = async (values: FormData) => {
    startTransition(() => {
      setOptimisticPosts({
        id: Math.random(),
        text: values.get("text"),
        like_count: 0,
      })
    })
    const data = await AddPostAction(values)
  }
  return (
    <div className="bg-black w-1/2 mx-auto text-white">
      <div>
        <h1>Add Post</h1>
        <form action={handleSubmit}>
          <input
            name="text"
            className="text-black"
            type="text"
            placeholder="Text"
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {optimisticPosts?.map((post: any) => (
        <Card key={post.id} post={post} isSending={post.isSending} />
      ))}
    </div>
  )
}

export default Posts
