import React from 'react'
import { breakpoints } from './magicConstants'
import useWindowSize from '../../hooks/useWindowSize'

/**
 * Renders a responsive wrapper that contains an iFrame that embeds a YouTube
 * video.
 * @param {string} embedId The YouTube video's embed id.
 * @param {string} title The title to add as metadata to the video embed iFrame
 * (it's not visible to the user). 
 * @returns 
 */
function YouTubeEmbed({ embedId, title }) {
    // Restyle depending on window size.
    const { width } = useWindowSize();
    // Wrap size changes based on whether on a phone or not. (Tablet and desktop
    // get the same size).
    const wrapWidth = width < breakpoints.phone ? 300 : 600;

    const wrapStyle = {
        width: `${wrapWidth}px`,
        height: `${wrapWidth * .5625}px`, // maintain 16:9 aspect ratio
        position: "relative",
    }

    const iFrameStyle = {
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        width: "100%",
        height: "100%",
    }

    return (
        <div className="col" style={wrapStyle}>
            <iframe
                style={iFrameStyle}
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
            />
        </div>
    )
}

export default YouTubeEmbed
