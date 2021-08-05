import { frontMatter as blogPosts } from '../pages/blog/*.mdx'

export const mapYoutubeVideos = (videoItems) => {
  const videos = videoItems?.map(v => ({
    title: v.snippet.title,
    id: v.id.videoId,
    images: v.snippet.thumbnails
  })) ?? []
  return videos
}

export const mapBlogPosts = (limit, category) => {
  let posts = blogPosts.sort((a, b) => a.order < b.order)
  if (category) {
    posts = posts.filter(p => p.tags.includes(category.toLowerCase()))
  }
  if (limit) {
    posts = posts.slice(0, limit)
  }

  return posts
}