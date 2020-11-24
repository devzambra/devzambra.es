import Parser from 'rss-parser'
import Intro from '../components/Intro'
import PodcastList from '../components/PodcastList'
import PostList from '../components/PostList'
import Separator from '../components/Separator'
import VideosList from '../components/VideosList'

export default function Home ({ episodes }) {
  return (
    <>

      <main className='mb-auto sm:grid grid-flow-col sm:grid-cols-3 gap-10'>
        <section className='col-span-2'>
          <Intro />
          <div className='mt-10'>
            <PostList />
          </div>
          <Separator hidden='sm:hidden' />
        </section>
        <section>
          <div>
            <PodcastList episodes={episodes} />
          </div>
          <Separator />
          <div>
            <VideosList />
          </div>
        </section>
      </main>
    </>
  )
}

export async function getServerSideProps () {
  const rss = await new Parser().parseURL(
    'https://anchor.fm/s/3f0ee6d0/podcast/rss'
  )
  const { items } = rss

  return {
    props: { episodes: items }
  }
}
