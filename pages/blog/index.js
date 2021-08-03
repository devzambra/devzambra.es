import { useRouter } from 'next/dist/client/router'
import CategoriesList from '../../components/CategoriesList'
import PostList from '../../components/PostList'

const Blog = () => {
  const {query} = useRouter()
  return (
    <div className='page-container mb-auto flex flex-col sm:flex-none sm:grid grid-flow-col sm:grid-cols-3 gap-10 mt-10'>
      <section className='col-span-2 order-2 sm:order-1'>
        <PostList category={query.category} />
      </section>
      <section className='order-1 sm:order-2'>
        <h3 className='text-gray-600'>Categorías</h3>
        <CategoriesList />
      </section>
    </div>
  )
}

export default Blog
