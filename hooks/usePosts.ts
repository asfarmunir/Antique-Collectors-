'use client';
import { useState, useEffect } from "react";
import { Blog } from "@/type/types";

const usePosts = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
  
    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await fetch("https://dummyjson.com/posts");
          const data = await response.json();
          setBlogs(data.posts);
        } catch (error) {
          console.error("Error fetching blogs:", error);
        }
      };
  
      fetchBlogs();
    }, []);
  
    return blogs;
  };
  
  export default usePosts;
  