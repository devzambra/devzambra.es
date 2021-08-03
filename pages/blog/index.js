import { useRouter } from 'next/dist/client/router'
import CategoriesList from '../../components/CategoriesList'
import PostList from '../../components/PostList'

const Blog = () => {
  const {query} = useRouter()
  return (
    <div className='page-container mb-auto sm:grid grid-flow-col sm:grid-cols-3 gap-10 mt-10'>
      <section className='col-span-2'>
        <PostList category={query.category} />
      </section>
      <section>
        <h3 className='text-gray-600'>Categorías</h3>
        <CategoriesList />
      </section>
    </div>
  )
}

export default Blog
