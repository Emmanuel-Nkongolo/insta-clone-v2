// "use client"
import Image from "next/image"
import { BiSearch } from "react-icons/bi"
import { LiaPlusCircleSolid } from "react-icons/lia"
import { AiFillHome } from "react-icons/ai"
// import { useSession } from "next-auth/react"

export default function Header() {
  // const { data: session } = useSession()
  // console.log(session)
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* left */}
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
          <Image
            src="https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            layout="fill"
            className="object-contain"
          />
        </div>
        {/* middle */}

        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <BiSearch className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:border-black focus:ring-black rounded-md"
          />
        </div>

        {/* right */}

        <div className="flex space-x-4 items-center">
          <AiFillHome className="hidden md:inline-flex cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <LiaPlusCircleSolid className="cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <img
            src="https://media.licdn.com/dms/image/D4D03AQGSqpT7VnnRWg/profile-displayphoto-shrink_800_800/0/1684913576511?e=2147483647&v=beta&t=byccSYjoSqZwNnCIwpOWR-pM8OgWCi6k3upFU0zqMMc"
            alt="user-image"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}
