import { useEffect, useState } from "react";
import API from "../utils/API";
import PostCard from "./PostCard";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.get("/api/posts");
        setPosts(res.data);
      } catch (err) {
        console.log(err.response?.data || err.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
