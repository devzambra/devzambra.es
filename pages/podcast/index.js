import PodcastList from '../../components/PodcastList'
import { getPodcastEpisodes } from '../api/podcast'


export default function Podcast ({ episodes }) {
  return (
    <div className="page-container">
      <PodcastList episodes={episodes} mode='full' />
    </div>
  )
}

export async function getServerSideProps () {
  const items = await getPodcastEpisodes()

  return {
    props: { episodes: items }
  }
}
