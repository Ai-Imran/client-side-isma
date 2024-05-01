import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link } from "react-router-dom";

const createPost = async (postData) => {
  try {
    const response = await fetch("http://localhost:5000/all-user-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error("Failed to create post");
    }
    return response.json();
  } catch (error) {
    throw new Error("Failed to create post");
  }
};

const Posts = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  const userName = user?.displayName;
  const userPhoto = user?.photoURL;
  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/all-user-post");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    const formData = new FormData(e.target);
    const content = formData.get("content");
    const postDate = new Date().toISOString();
    
    try {
      await createPost({userName,userPhoto, content, postDate });
      await fetchPosts();
      e.target.reset(); // Reset the form after successful submission
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-gray-200 min-h-screen">
      <div className="w-11/12 mx-auto mt-2">
        {user ? (
          <>
            <form onSubmit={handleSubmit} className="">
              <textarea
                required
                className="text-black focus:border focus:border-lime-500 py-1 outline-none rounded px-2"
                name="content"
                cols="40"
                placeholder="এখানে লিখুন....."
                rows="2"
              ></textarea>
              <input
                className="bg-purple-700 w-full py-1 font-bold text-gray-300 rounded"
                type="submit"
                value="Post"
                disabled={isLoading}
              />
            </form>
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              posts.map((post) => (
                <div key={post._id}>
                  <p>{post.content}</p>
                  <p>{post.postDate}</p>
                 
                  {/* You can display user's photoUrl and displayName here */}
                </div>
              ))
            )}
          </>
        ) : (
          <>
            <h3 className="mt-16 w-3/4 mx-auto text-yellow-400 text-justify">
              আপনার কোনো একাউন্ট নেই তাই আপনি কোনো পোস্ট করতে বা পড়তে পারবেন না,পোস্ট করতে দ্রুত{" "}
              <Link to={"/login"}>
                <span className="text-red-400 underline">ফ্রী একাউন্ট খুলুন</span>
              </Link>
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Posts;