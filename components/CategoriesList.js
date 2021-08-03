import Link from "next/link"
import { POST_CATEGORIES } from "../constants/CATEGORIES"

const CategoriesList = () => {
  return (
    <ul className='flex justify-start items-center flex-wrap my-4'>
      <li>
          <Link href='/blog'>
            <a className='mr-4 border-2 p-2 rounded-lg flex justify-start items-center my-2 border-black dark:border-white'>
              Todas
            </a>
          </Link>
        </li>
      {POST_CATEGORIES.map(category => (
        <li>
          <Link href={`/blog?category=${category.name}`} key={category.name}>
            <a className={'mr-4 border-2 p-2 rounded-lg flex justify-start items-center my-2 ' + category.borderColor}>
              {category.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default CategoriesList