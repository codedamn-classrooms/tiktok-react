import React from 'react'

export default function Video(props) {
	const { url } = props

	return (
		<div className="video">
			<video className="player" loop src={url}></video>
		</div>
	)
}
