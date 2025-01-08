import { useState, useEffect } from "react";
import { BlogPost } from "@/type/types";


export const useBlogs = () => {
  const [blog, setBlog] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        setBlog(data.posts);
      } catch (err) {
        setError("Error fetching blogs");
      }
    };

    fetchBlog();
  }, []);

  return { blog, error };
};




export const useBlogDetails = (blogId: string) => {
  const [blogDetails, setBlogDetails] = useState<BlogPost | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${blogId}`);
        const data = await response.json();
        setBlogDetails(data);
      } catch (err) {
        setError("Error fetching blog details");
      }
    };

    if (blogId) {
      fetchBlogDetails();
    }
  }, [blogId]);

  return { blogDetails, error };
};

