import VideosList from "../../components/VideosList";

import { getYoutubeVideos } from '../api/youtube'
import { mapYoutubeVideos } from '../../utils/mappers'

export default function videos({videos}) {
    return (
        <div className="page-container">
            <VideosList  videos={videos} mode="full" />
        </div>
    )
}


export async function getServerSideProps () {
    const videoItems = await getYoutubeVideos()

    const videos = mapYoutubeVideos(videoItems)
    
    return { props: { videos } }
  }