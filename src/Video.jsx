import React from 'react'
import Footer from './FooterLeft'
import FooterRight from './FooterRight'
import './Video.css'

export default function Video(props) {
	const { url, channel, description, song, likes, shares, messages } = props

	return (
		<div className="video">
			<video className="player" loop src={url}></video>
			<div className="bottom-controls">
				<Footer channel={channel} description={description} song={song} />
				<FooterRight likes={likes} shares={shares} messages={messages} />
			</div>
		</div>
	)
}
