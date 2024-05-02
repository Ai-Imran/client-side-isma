import { useContext, useState, useEffect } from "react";
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

  useEffect(() => {
    fetchPosts();
  }, []); // Fetch posts only once when the component mounts

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/all-user-post");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      // Sort posts based on postDate from new to old
      data.sort((a, b) => new Date(b.postDate) - new Date(a.postDate));
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
      await createPost({ userName, userPhoto, content, postDate });
      // After successful post, fetch posts again to update the list
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
      <div className="w-11/12 lg:w-1/2 mx-auto mt-2">
        {user ? (
          <>
            <form onSubmit={handleSubmit} className="mx-auto w-full">
              <textarea
                required
                className="text-black w-11/12 focus:border focus:border-lime-500 py-1 outline-none rounded px-2"
                name="content"
                cols="40"
                placeholder="এখানে লিখুন....."
                rows="2"
              ></textarea>
              <input
                className="bg-purple-700 w-11/12 py-1 font-bold text-gray-300 rounded"
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
                <div className="mt-2" key={post._id}>
                <div className="border p-1 border-gray-700 rounded">
                <div className="flex items-center gap-3">
                  <img className="w-[70px] h-[70px] rounded-full" src={post.userPhoto} alt="image" />
                 <h2>{post.userName}</h2>
                  <p className="text-[12px] text-gray-400">{new Date(post.postDate).toLocaleString('en-US')}</p>
                 </div>
                  <p className="text-[13px] text-justify  mt-1 mx-1 text-gray-300">{post.content}</p>
                </div>
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
