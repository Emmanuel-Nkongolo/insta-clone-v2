export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="h-16 rounded-full border p-[2px]"
        src="https://media.licdn.com/dms/image/D4D03AQGSqpT7VnnRWg/profile-displayphoto-shrink_800_800/0/1684913576511?e=2147483647&v=beta&t=byccSYjoSqZwNnCIwpOWR-pM8OgWCi6k3upFU0zqMMc"
        alt="user-image"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">codewithme</h2>
        <h3 className="font-light text-sm text-gray-400">
          Welcome to Social Media-Clone
        </h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  )
}
