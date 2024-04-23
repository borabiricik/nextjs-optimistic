"use client"
import { LikeAction } from "@/actions/like.action"
import Image from "next/image"
import React, { startTransition, useOptimistic, useTransition } from "react"
import { BiComment, BiHeart } from "react-icons/bi"
import { FaRetweet } from "react-icons/fa"

const Card = ({ post, isSending }: any) => {
  const handleLike = async () => {
    startTransition(() => {
      addOptimistic(1)
    })
    const data = await LikeAction(post.id, post.like_count)
  }
  const [optimisticLike, addOptimistic] = useOptimistic(
    post.like_count,
    (currentState, optimisticValue) => {
      return currentState + optimisticValue
    }
  )
  return (
    <div
      className={`p-4 border-b border-gray-200 ${isSending && "opacity-25"}`}
    >
      <div className="flex space-x-3">
        <Image
          width={40}
          height={40}
          src={
            "https://pbs.twimg.com/profile_images/1658389861466882048/ryY3IXRf_400x400.jpg"
          }
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          {/* <div className="flex items-center justify-between">
            <h4 className="font-bold">{user.name}</h4>
            <span className="text-sm text-gray-500">{timestamp}</span>
          </div> */}
          <p className="text-white leading-snug">{post.text}</p>
          <div className="flex mt-4 space-x-4 text-gray-500 text-sm">
            <button className="flex items-center space-x-1 hover:text-blue-500">
              <BiComment size={24} />
              <span>{3}</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-green-500">
              <FaRetweet size={24} />
              <span>{3}</span>
            </button>
            <button
              onClick={handleLike}
              className="flex items-center space-x-1 hover:text-red-500 hover:fill-red-500"
            >
              <BiHeart size={24} />
              <span>{optimisticLike}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
