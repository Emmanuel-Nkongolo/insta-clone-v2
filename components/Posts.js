import Post from "./Post"

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "codewithme",
      userImg:
        "https://media.licdn.com/dms/image/D4D03AQGSqpT7VnnRWg/profile-displayphoto-shrink_800_800/0/1684913576511?e=2147483647&v=beta&t=byccSYjoSqZwNnCIwpOWR-pM8OgWCi6k3upFU0zqMMc",
      img: "https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      caption: "Thanks for your support",
    },
    {
      id: "2",
      username: "thefightercode",
      userImg:
        "https://media.licdn.com/dms/image/D4D03AQGSqpT7VnnRWg/profile-displayphoto-shrink_800_800/0/1684913576511?e=2147483647&v=beta&t=byccSYjoSqZwNnCIwpOWR-pM8OgWCi6k3upFU0zqMMc",
      img: "https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      caption: "It was nice",
    },
    {
      id: "3",
      username: "internfight",
      userImg:
        "https://media.licdn.com/dms/image/D4D03AQGSqpT7VnnRWg/profile-displayphoto-shrink_800_800/0/1684913576511?e=2147483647&v=beta&t=byccSYjoSqZwNnCIwpOWR-pM8OgWCi6k3upFU0zqMMc",
      img: "https://images.unsplash.com/photo-1614790871804-fe037bdc1214?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      caption: "coffee anyone?",
    },
  ]
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}
