import React from "react";
import { useEffect, useState } from "react";
import './home.css'

function Home() {
  const [posts, setPosts] = useState(null)
  useEffect(() =>{
    const fetchPosts = async () => {
      const response = await fetch("/api/posts")
      const json = await response.json()
      
      if(response.ok){
        setPosts(json)
      }
    }
    fetchPosts()
  }, [])
  return (
    <div className="home">
      <h1>Welcome to Our Website</h1>
      <p>
        We are an eclectic group of computer science students working together to build this website.
      </p>
      <p>
        Explore our team members and learn about our journey in the world of programming.
      </p>
      <div className="posts">
        {posts && posts.map((post) => (
          <>
            <p key={post._id}>{post.post_title}</p>
            <p key={post._id}>{post.post_content}</p>
            <p key={post._id}>{post.post_author}</p>
          </>
        ))}
      </div>
    </div>
  );
}

export default Home;
