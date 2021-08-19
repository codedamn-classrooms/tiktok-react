import React from 'react'
import MusicNote from './icons/MusicNote'
import './FooterLeft.css'

export default function VideoFooter(props) {
	const { channel, description, song } = props
	// write code here
	return <div className="footer-left">
	<div className="text">
		<h3>@{channel}</h3>
		<p>{description}</p>
		<div className="ticker">
			<MusicNote style={{ width: '30px' }} />
			<marquee direction="left" scrollamount="2">
				{song}
			</marquee>
		</div>
	</div>
</div>
}
