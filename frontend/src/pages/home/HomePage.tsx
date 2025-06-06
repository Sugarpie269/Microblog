import React,{ useEffect, useState } from "react";
type Posts = {
    author: {
        username: string;
    };
    body: string;
    date: string;
};

type Props = {
    user:{
        username: string;
    };
};

function HomePage({user}: Props){
    const [posts, setPosts] = useState<Posts[]>([]);
    const API_BASE = import.meta.env.VITE_DEV_BASE_URL;
    useEffect(()=> {fetch(`${API_BASE}/api/posts`)
        .then((res) => res.json())
        .then(setPosts)
        .catch((err) => console.error("Failed to load posts", err));
        }, [API_BASE]
    );
return (
    <div style={{ padding: "1rem" }}>
      <h1>Welcome, {user.username}</h1>
      <h2>Posts:</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index} style={{ marginBottom: "1rem" }}>
            <strong>{post.author.username}</strong> wrote:<br />
            {post.body}<br />
            <small>{post.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;