import React, { useEffect, useRef, useState } from 'react'
import Footer from './VideoFooter'
import Sidebar from './VideoSidebar'
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
		if (playing === id) {
			videoRef.current.pause()
		} else {
			videoRef.current.play()
			setPlaying(id)
		}
	}

	return (
		<div className="video">
			<video className="player" ref={videoRef} loop onClick={onVideoPress} src={url}></video>
			<Footer channel={channel} description={description} song={song} />
			<Sidebar likes={likes} messages={messages} shares={shares} />
		</div>
	)
}
