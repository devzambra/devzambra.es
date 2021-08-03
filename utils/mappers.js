export const mapYoutubeVideos = (videoItems) => {
  const videos = videoItems?.map(v => ({
    title: v.snippet.title,
    id: v.id.videoId,
    images: v.snippet.thumbnails
  })) ?? []
  return videos
}
