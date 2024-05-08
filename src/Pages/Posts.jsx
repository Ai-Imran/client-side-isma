import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiArrowFromBottom } from "react-icons/bi";
import Swal from "sweetalert2";

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

const deletePost = async (postId, refetch) => {
  try {
    await fetch(`http://localhost:5000/all-user-post/${postId}`, {
      method: "DELETE",
    });
    await refetch();
    Swal.fire({
      title: "Deleted!",
      text: "Your post has been deleted.",
      icon: "success",
    });
  } catch (error) {
    Swal.fire({
      title: "Error!",
      text: "Failed to delete the post.",
      icon: "error",
    });
  }
};

const Posts = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [fullContent, setFullContent] = useState("");

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

  const handleDelete = (postId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePost(postId, fetchPosts);
      }
    });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === "") {
      // If search term is empty, reset the error
      setError(null);
      // Fetch all posts
      fetchPosts();
    }
  };
  
  

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);
    try {
      let url = "http://localhost:5000/all-user-posts";
      if (searchTerm && searchTerm.trim() !== "") {
        url += `?name=${searchTerm}`;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to search user posts");
      }
      const data = await response.json();
      if (data.length === 0) {
        setError("No posts found.");
      } else {
        setPosts(data);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSubmit2 = async (e, fullContent, setFullContent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
  
    try {
      // Create post data
      const postData = {
        userName, // Make sure to replace userName with your actual user data
        userPhoto, // Make sure to replace userPhoto with your actual user data
        content: fullContent,
        postDate: new Date().toISOString(),
      };
  
      await createPost(postData);
  
      // After successful post, fetch posts again to update the list
      await fetchPosts();
      setFullContent(""); // Reset the full content state after successful submission
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="text-gray-200  min-h-screen">
      <div className="w-11/12 lg:w-1/2 mx-auto mt-2">
        {user ? (
          <>
            <div className="flex mb-1 rounded w- lg:w-1/2 items-center">
              <input
                className="px-2 rounded-l py-1 w-[280px] outline-none lg:w-[590px] text-black"
                type="search"
                placeholder="Search Posts"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <div onClick={handleSearch} className="bg-black p-2 px-4">
                <FaSearch />
              </div>
            </div>

            <div className="flex">
              <form onSubmit={handleSubmit} className="w-1/2">
                <textarea
                  required
                  className="text-black w-11/12 focus:border focus:border-lime-500 py-1 outline-none text-[12px] rounded px-2"
                  name="content"
                  cols="40"
                  placeholder="এখানে লিখুন....."
                  rows="1"
                ></textarea>
                <input
                  required
                  type="file"
                  className="mb-1 file-input-xs  max-w-xs bg-gray-600 w-11/12 text-lime-400 rounded"
                  name="photofile"
                />
                <input
                  className="bg-purple-700 w-11/12 font-bold text-gray-300 rounded"
                  type="submit"
                  value="Post"
                  disabled={isLoading}
                />
              </form>
              <form onSubmit={(e) => handleSubmit2(e, fullContent, setFullContent)} className="w-1/2">
                <textarea
                  required
                  className="text-black w-11/12 focus:border focus:border-lime-500 py-2 outline-none text-[12px] rounded px-2"
                  name="full-content"
                  cols="40"
                  placeholder="এখানে লিখুন....."
                  rows=""
                  value={fullContent}
                  onChange={(e) => setFullContent(e.target.value)}
                ></textarea>
                <input
                  className="bg-purple-700 w-11/12 font-bold text-gray-300 rounded"
                  type="submit"
                  value="Post"
                  disabled={isLoading}
                />
              </form>


            </div>
            <a href="#top" className="">
              <BiArrowFromBottom className="sticky top-[110px] left-[330px] text-3xl text-yellow-300 z-10" />
            </a>
           {(user?.email === 'iamsmallboy004@gmail.com' || user?.email === 'du@lal.com') && <h2>Total Post : {posts.length}</h2>
}
            {isLoading ? (
              <span className="loading loading-dots text-white mt-4 loading-lg"></span>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              posts.length === 0 ? (
                <p>No posts found.</p>
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
                      <p className="text-[13px] text-justify mt-1 mx-1 text-gray-300">
                        {expandedPosts.includes(post._id) ? post.content : truncateContent(post.content)}
                        {post.content.split(" ").length > 15 && (
                          <button onClick={() => handleSeeMore(post._id)} className="text-yellow-500">
                            {expandedPosts.includes(post._id) ? "See less" : "See more"}
                          </button>
                        )}
                      </p>
                     
                      {post?.photoUrl && (
                        <img src={post?.photoUrl} alt="Post" className="mt-1 max-w-3/4 rounded max-h-[330px] " />
                      )}
                     { (user?.email === 'iamsmallboy004@gmail.com' || user?.email === 'du@lal.com') && <button className="bg-black px-2 my-1 rounded py-1 text-gray-300" onClick={() => handleDelete(post._id)}>Delete post</button>}
                    </div>
                  </div>
                ))
              )
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
