import { toast } from 'react-hot-toast'
import { usePosts } from '../context/postContext'
import { useNavigate } from 'react-router-dom'

export function PostCard({post}) {
  const {deletePost} = usePosts()
  const navigate = useNavigate()

  const handleDelete =(id, title) => {

    toast((t) => (
      <div>
        <p className='text-white font-bold'>Do you want to delete?</p>
        <strong className=' text-blue-400'>{title}</strong>
        <div>
          <button className='bg-red-600 hover:bg-red-800 px-3 py-2 text-white rounded-lg mx-2 mt-3'
                  onClick={() => {
                    deletePost(id)
                    toast.dismiss(t.id)
                  }}>
            Delete
          </button>
          <button className='bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-lg mx-2 mt-3'
                  onClick={() => {
                    toast.dismiss(t.id)
                  }}>
            Cancel
          </button>
        </div>
      </div>
    ), {
      id: id,
      style: {
        background: "#202020"
      }
    })
  }

  return (
    <div className="bg-zinc-800 text-white rounded-lg shodow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer"
          onClick={() => navigate(`/post/${post._id}`)}>
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <h3>{post.title}</h3>
          <button onClick={(e) => {
            e.stopPropagation()
            handleDelete(post._id, post.title)
          }} 
                  className="bg-red-600 text-sm px-2 py-1 rounded hover:bg-red-800">
            Delete
          </button>
        </div>
      <p>{post.description}</p>
      </div>
      {post.image && (
        <img src={post.image.url} className='w-full h-96 object-cover'/>
      )}
    </div>
  )
}