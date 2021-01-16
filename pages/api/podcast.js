import Parser from 'rss-parser'

export const getPodcastEpisodes = async () => {
    const rss = await new Parser().parseURL(
        'https://anchor.fm/s/3f0ee6d0/podcast/rss'
      )
    const { items } = rss

    return items
}