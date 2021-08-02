import PostList from '../../components/PostList'

const Blog = () => {
  return (
    <div className='page-container mb-auto sm:grid grid-flow-col sm:grid-cols-3 gap-10 mt-10'>
      <section className='col-span-2'>
        <PostList />
      </section>
      <section>
        <h3 className='text-gray-600'>Categorías</h3>
      </section>
    </div>
  )
}

export default Blog
