export const getYoutubeVideos = async () => {
    const {items} = await fetch(
        'https://www.googleapis.com/youtube/v3/search?maxResults=3&part=snippet&type=video&channelId=UCtvgF3KrDStweE50YqzLJSg&order=date&key='
        + process.env.YOUTUBE_API_KEY
      , { headers: { referer: 'https://devzambra.es/' } })
      .then(res => res.json())
    
      return items
}