import Feed from "@/components/Feed"
import Header from "@/components/Header"
import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
    </div>
  )
}
