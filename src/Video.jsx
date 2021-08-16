import React from 'react'
import Footer from './FooterLeft'
import './Video.css'

export default function Video(props) {
	const { url, channel, description, song } = props

	return (
		<div className="video">
			<video className="player" loop src={url}></video>
			<div className="bottom-controls">
				<Footer channel={channel} description={description} song={song} />
			</div>
		</div>
	)
}
