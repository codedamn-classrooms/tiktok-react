import React from 'react'
import './Video.css'

export default function Video(props) {
	const { url } = props

	return (
		<div className="video">
			<video className="player" loop src={url}></video>
		</div>
	)
}
