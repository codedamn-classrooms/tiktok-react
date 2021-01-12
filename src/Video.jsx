import React, { useEffect, useRef } from 'react'
import Footer from './FooterLeft'
import Sidebar from './FooterRight'
import './Video.css'

export default function Video(props) {
	const {
		id,
		url,
		channel,
		description,
		song,
		likes,
		messages,
		shares,
		playing,
		setPlaying
	} = props

	const videoRef = useRef(null)

	useEffect(() => {
		if (playing !== id) {
			videoRef.current.pause()
		}
	}, [playing])

	const onVideoPress = () => {
		if (videoRef.current.paused) {
			videoRef.current.play()
			setPlaying(id)
		} else {
			videoRef.current.pause()
			setPlaying(null)
		}
	}

	return (
		<div className="video">
			<video className="player" ref={videoRef} loop onClick={onVideoPress} src={url}></video>
			<div className="bottom-controls">
				<Footer channel={channel} description={description} song={song} />
				<Sidebar likes={likes} messages={messages} shares={shares} />
			</div>
		</div>
	)
}
