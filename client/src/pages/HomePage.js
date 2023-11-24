import { usePosts } from "../context/postContext"
import {VscEmptyWindow} from 'react-icons/vsc'
import {Link} from 'react-router-dom'
import { PostCard } from "../components/PostCard"

export function HomePage() {

  const {posts} = usePosts()

  const renderMain = () => {
    if(posts.length === 0) 
    return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white"/>
        <h1 className="text-white font-bold text-2xl">There are not posts</h1>
      </div>
    );

    return(
      <div className="grid grid-cols-3 gap-4">
        {posts.map(post => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    );
  }

  return (
    <div className="text-white">
      <header className="flex justify-between py-4 ">
        <h1 className="text-2xl text-gray-300 font-bold">Posts ({posts.length})</h1>
        <Link to="/new" className="bg-indigo-600 hover:bg-indigo-800 text-white rounded-lg text-2xl font-bold px-3 py-2">Create New Post</Link>
      </header>

      {renderMain()}
    </div>
  )
}