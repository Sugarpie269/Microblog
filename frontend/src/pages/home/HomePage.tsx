//import React,
import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom'
type Posts = {
    author: {
        username: string;
    };
    body: string;
    date: string;
};

function HomePage(){
    const [posts, setPosts] = useState<Posts[]>([]);
    const API_BASE = import.meta.env.VITE_DEV_BASE_URL;
    const location = useLocation()
    const user = location.state?.user
    useEffect(()=> {fetch(`${API_BASE}/api/posts`)
        .then((res) => res.json())
        .then(setPosts)
        .catch((err) => console.error("Failed to load posts", err));
        }, [API_BASE]
    );
return (
    <div style={{ padding: "1rem" }}>
      <h1 className="text-indigo-600">Welcome, {user.username}</h1>
      <h2 className="text-indigo-600">Posts:</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index} style={{ marginBottom: "1rem" }} className="text-indigo-600">
            <strong className="text-indigo-600">{post.author.username}</strong> wrote:<br />
            {post.body}<br />
            <small>{post.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;