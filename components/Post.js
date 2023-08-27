import { HiOutlineDotsHorizontal, HiOutlineChat } from "react-icons/hi"
import { AiOutlineHeart } from "react-icons/ai"
// import { HiOutlineChat } from "react-icons/hi"
import { GoBookmark } from "react-icons/go"
import { GrEmoji } from "react-icons/gr"

export default function Post({ username, img, caption, userImg, id }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}

      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1">{username}</p>
        <HiOutlineDotsHorizontal className="h-5" />
      </div>

      {/* Post Image */}

      <img className="object-cover w-full" src={img} alt="" />

      {/* Post Buttons */}

      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <AiOutlineHeart className="btn" />
          <HiOutlineChat className="btn" />
        </div>
        <GoBookmark className="btn" />
      </div>

      {/* Post comments */}

      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>

      {/* Post input box */}
      <form action="" className="flex items-center p-4">
        <GrEmoji className="h-7" />
        <input
          className="border-none flex-1 focus:ring-0"
          type="text"
          placeholder="Add a comment"
        />
        <button className="text-blue-400 font-bold">Post</button>
      </form>
    </div>
  )
}
