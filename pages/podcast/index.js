import PodcastList from '../../components/PodcastList'

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
