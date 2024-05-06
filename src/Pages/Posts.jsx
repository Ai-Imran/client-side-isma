import  { useContext, useState, useEffect } from "react";
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
  const [expandedPosts, setExpandedPosts] = useState([]);


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

  const truncateContent = (content) => {
    const words = content.split(" ");
    if (words.length > 15) {
      return words.slice(0, 15).join(" ") + "...";
    } else {
      return content;
    }
  };

  const handleSeeMore = (postId) => {
    // Implement functionality to expand content
    // For example, toggle a state that controls whether to show full content
    setExpandedPosts((prevExpandedPosts) =>
    prevExpandedPosts.includes(postId)
      ? prevExpandedPosts.filter((id) => id !== postId)
      : [...prevExpandedPosts, postId]
  );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    const formData = new FormData(e.target);
    const content = formData.get("content");
    const photoFile = formData.get("photofile");
    const postDate = new Date().toISOString();

    try {
      // Upload image to ImgBB
      const imgFormData = new FormData();
      imgFormData.append("image", photoFile);
      const imgResponse = await fetch(
        "https://api.imgbb.com/1/upload?key=b252a8cff14f36fc278309500d7be83f",
        {
          method: "POST",
          body: imgFormData,
        }
      );
      const imageData = await imgResponse.json();

      const photoUrl = imageData.data.url;

      // Create post data
      const postData = {
        userName,
        userPhoto,
        content,
        postDate,
        photoUrl,
      };

      await createPost(postData);

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
                required
                type="file"
                className="my-1 bg-gray-600 w-11/12 text-lime-400 rounded"
                name="photofile"
              />
              <input
                className="bg-purple-700 w-11/12 py-1 font-bold text-gray-300 rounded"
                type="submit"
                value="Post"
                disabled={isLoading}
              />
            </form>
            {isLoading ? (
              <span className="loading loading-dots text-white mt-4 loading-lg"></span>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              posts.map((post) => (
                <div className="mt-2" key={post._id}>
                  <div className="border p-1 border-gray-700 rounded">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-[70px] h-[70px] rounded-full"
                        src={post.userPhoto}
                        alt="image"
                      />
                      <h2>{post.userName}</h2>
                      <p className="text-[12px] text-gray-400">
                        {new Date(post.postDate).toLocaleString("en-US")}
                      </p>
                    </div>
                    <p className="text-[13px] text-justify  mt-1 mx-1 text-gray-300">
                {expandedPosts.includes(post._id) ? post.content : truncateContent(post.content)}
                {post.content.split(" ").length > 15 && (
                  <button
                    onClick={() => handleSeeMore(post._id)}
                    className="text-yellow-500"
                  >
                    {expandedPosts.includes(post._id) ? "See less" : "See more"}
                  </button>
                )}
              </p>
                    {post.photoUrl && (
                      <img
                        src={post?.photoUrl}
                        alt="Post"
                        className="mt-1 max-w-[330px] rounded max-h-[330px] "
                      />
                    )}
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
