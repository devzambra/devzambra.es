import Parser from 'rss-parser'
import PodcastList from '../../components/PodcastList'

export default function Podcast ({ episodes }) {
  return (
    <>
      <PodcastList episodes={episodes} mode='full' />
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
