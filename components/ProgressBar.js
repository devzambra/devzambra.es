
export default function ProgressBar ({ currentStats }) {
  const parseStats = () => {
    const curMinutes = ('0' + Math.floor(currentStats.current / 60)).slice(-2)
    const curSeconds = ('0' + Math.floor(currentStats.current % 60)).slice(-2)

    const maxMinutes = ('0' + Math.floor(currentStats.duration / 60)).slice(-2)
    const maxSeconds = ('0' + Math.floor(currentStats.duration % 60)).slice(-2)

    return { curMinutes, curSeconds, maxMinutes, maxSeconds }
  }

  const changeAudioTime = (e) => {
    if (process.browser) {
      const audio = document.querySelector('audio')
      audio.currentTime = e.target.value
    }
  }

  return (
    <>
      <div className='timers flex justify-between w-full px-4 py-2'>
        <small className='text-white bg-gray-700 p-1 rounded shadow-md'>{parseStats().curMinutes}:{parseStats().curSeconds}</small>
        <small className='text-white bg-gray-700 p-1 rounded shadow-md'>{parseStats().maxMinutes}:{parseStats().maxSeconds}</small>
      </div>
      <div className='flex w-full items-center h-1/6 bg-gray-700 p-2'>
        <input type='range' min='0' step='1' onChange={changeAudioTime} max={currentStats.duration} value={currentStats.current} className='slider w-full rounded-lg appearance-none overflow-hidden bg-gray-400' />
      </div>
      <style jsx>{`
        .slider {
          padding: 2px;
          height: 10px;
          border-radius: 10px;
          appearance: none;
          outline: none;
          opacity: .7;
          transition: opacity .2s;

        }
        .slider:hover {
          opacity: 1;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 15px;
          height: 10px;
          cursor: pointer;
          background: rgba(16, 185, 129);
          box-shadow: -805px 0 0 800px rgb(16, 185, 129);
          border-radius: 10px;
        }
        .slider::-webkit-progress-value {
          background-color: rgb(16, 185, 129);
          height: 10px;
        }
        .slider::-moz-range-thumb {
          -moz-appearance: none;
          width: 15px;
          height: 15px;
          cursor: pointer;
          background: rgb(16, 185, 129);
          border-radius: 10px;
        }
        .slider::-moz-range-progress {
          background-color: rgb(16, 185, 129);
          height: 10px;
        }
    `}
      </style>
    </>
  )
}
