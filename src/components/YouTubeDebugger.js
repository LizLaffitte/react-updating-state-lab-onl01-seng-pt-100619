import React, {Component} from 'react'

class YouTubeDebugger extends Component{
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }
    adjustBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings, bitrate: 12
            }
        })
    }
    adjustRez = () => {
        this.setState({
            settings: {
                ...this.state.settings, video: {resolution: '720p'}
            }
        })
    }
    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.adjustBitrate}>Adjust Bitrate</button>
                <button className="resolution" onClick={this.adjustRez}>Adjust Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger