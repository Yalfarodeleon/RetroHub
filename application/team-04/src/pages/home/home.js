import React from "react";
import './home.css'

function Home() {
  
  async function fetchpostJSON() {
    const response = await fetch('/posts');
    const post = await response.json();
    return post;
  }

  return (
    <div className="home">
      <h1>Welcome to Our Website</h1>
      <p>
        We are an eclectic group of computer science students working together to build this website.
      </p>
      <p>
        Explore our team members and learn about our journey in the world of programming.
      </p>
    </div>
  );
}

export default Home;
