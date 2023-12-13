import VideoPlayer from '../Videos/Video1'
import VideoPlayer2 from '../Videos/Video2'
import VideoPlayer3 from '../Videos/Video3'
import VideoPlayer4 from '../Videos/Video4'
import VideoPlayer5 from '../Videos/Video5'
import VideoPlayer6 from '../Videos/Video6'
import "../Videos/Videos.scss"

//styles
import "./Deposition.scss"

const Deposition = () => {
  return (
    <section>
        <div className="video1">
          <VideoPlayer/>
        </div>
        <div className="video2">
          <VideoPlayer2/>
        </div>
        <div className="video3">
          <VideoPlayer3/>
        </div>
        <div className="video4">
          <VideoPlayer4/>
        </div>
        <div className="video5">
          <VideoPlayer5/>
        </div>
        <div className="video6">
          <VideoPlayer6/>
        </div>
    </section>
  )
}

export default Deposition