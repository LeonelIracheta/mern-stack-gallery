import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { usePosts } from '../context/postContext'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AiOutlineLoading3Quarters} from 'react-icons/ai'

export function PostForm() {
  const {createPost, getPost, updatePost} = usePosts()
  const navigate = useNavigate()
  const params = useParams()
  const [post, setPost] = useState({
    title: '',
    description: '',
    image: null
  })

  useEffect(() => {
    (async() => {
      if(params.id){
        const post = await getPost(params.id)
        setPost(post)
      }
    })()
  }, [params.id])

  return (
    <div className='flex items-center justify-center'>
      <div className='bg-zinc-800 p-10 shadow-lg shadow-black'>
        <header className='flex justify-between items-center py-4 text-white'>
          <h3 className='text-lg font-bold'>New Post</h3>
          <Link to="/" className='text-gray-400 text-sm hover:text-gray-300'>Go Back</Link>
        </header>
        <Formik 
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string().required('Title is required'),
            description: Yup.string().required('Description is required')
          })}
          onSubmit={async (values,actions) => {
            if(params.id){
              await updatePost(params.id, values)
            } else {
              await createPost(values)
            }
            actions.setSubmitting(false);
            navigate('/')
          }}
          enableReinitialize={true}
        >

          {({handleSubmit, setFieldValue, isSubmitting}) => (
            <Form onSubmit={handleSubmit}>
              <label htmlFor='title' className='text-sm block font-bold text-gray-400'>Title</label>
              <Field id='title' name='title' placeholder="Title" className='px-3 py-2 mb-5 focus:outline-none rounded bg-gray-600 text-white w-full'/>
              <ErrorMessage name='title' component='p' className='text-red-500 text-sm font-bold'/>

              <label htmlFor='description' className='text-sm block font-bold text-gray-400'>Description</label>
              <Field id='description' name='description' component='textarea' placeholder="Description" rows={3} className='px-3 py-2 mb-5 focus:outline-none rounded bg-gray-600 text-white w-full'/>
              <ErrorMessage name='description' component='p' className='text-red-500 text-sm font-bold'/>

              <label htmlFor='image' className='text-sm block font-bold text-gray-400'>Image</label>
              <input 
                id='image' 
                name='image' 
                type='file' 
                className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full' 
                onChange={(e) => setFieldValue('image', e.target.files[0])}
              />

              <button 
                type='submit' 
                className='bg-indigo-600 rounded-md m-5 font-bold text-white hover:bg-indigo-800 focus:outline-none disabled:bg-indigo-400 w-32 h-8 flex items-center justify-center' 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className='animate-spin h-5 w-5'/>
                ) : 'Save'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}