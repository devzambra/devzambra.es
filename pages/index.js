import Intro from '../components/Intro'
import PodcastList from '../components/PodcastList'
import PostList from '../components/PostList'
import Separator from '../components/Separator'
import VideosList from '../components/VideosList'
import { mapYoutubeVideos } from '../utils/mappers'
import { getPodcastEpisodes } from './api/podcast'
import { getYoutubeVideos } from './api/youtube'

export default function Home ({ episodes, videos }) {
  return (
    <div className="page-container">
      <main className='mb-auto sm:grid grid-flow-col sm:grid-cols-3 gap-10 mt-10'>
        <section className='col-span-2'>
          <Intro />
          <div className='mt-10'>
            <PostList limit={3} />
          </div>
          <Separator hidden='sm:hidden' />
        </section>
        <section>
          <div>
            <PodcastList episodes={episodes} />
          </div>
          <Separator />
          <div>
            <VideosList videos={videos} />
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps () {
  const items = await getPodcastEpisodes()

  const videoItems = await getYoutubeVideos()

  const videos = mapYoutubeVideos(videoItems)

  return {
    props: { episodes: items.slice(0, 3), videos }
  }
}
