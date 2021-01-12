import React, { useState, useEffect } from 'react'
import Video from './Video'
import './App.css'

export default function App() {
	const [videos, setVideos] = useState([])
	const [playing, setPlaying] = useState(1)

	useEffect(() => {
		setVideos([
			{
				id: 1,
				url:
					'https://v77.tiktokcdn.com/94c3baaad414e53cbe06e67e24f982a4/5ffe13ff/video/tos/useast2a/tos-useast2a-pve-0068/d92a33ec76024f2cb483dcb3322c1f30/?a=1233&br=2758&bt=1379&cd=0|0|1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202101121526090101880612275A060CD9&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3RteHhsODxteTMzNDczM0ApMzc7OTw6ZzxnNzMzOjU4NGdxZmYxb2c0cnFfLS0tMTZzczUyXzMyNmMtNmJiXjNhLi06Yw==&vl=&vr=',
				channel: 'codedamn',
				description: 'gg',
				song: 'wowowow',
				likes: 4441,
				messages: 4,
				shares: 100
			},
			{
				id: 2,
				url:
					'https://v77.tiktokcdn.com/94c3baaad414e53cbe06e67e24f982a4/5ffe13ff/video/tos/useast2a/tos-useast2a-pve-0068/d92a33ec76024f2cb483dcb3322c1f30/?a=1233&br=2758&bt=1379&cd=0|0|1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202101121526090101880612275A060CD9&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3RteHhsODxteTMzNDczM0ApMzc7OTw6ZzxnNzMzOjU4NGdxZmYxb2c0cnFfLS0tMTZzczUyXzMyNmMtNmJiXjNhLi06Yw==&vl=&vr=',
				channel: 'codedamn',
				description: 'gg',
				song: 'wowowow',
				likes: 4441,
				messages: 4,
				shares: 100
			},
			{
				url:
					'https://v77.tiktokcdn.com/94c3baaad414e53cbe06e67e24f982a4/5ffe13ff/video/tos/useast2a/tos-useast2a-pve-0068/d92a33ec76024f2cb483dcb3322c1f30/?a=1233&br=2758&bt=1379&cd=0|0|1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202101121526090101880612275A060CD9&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3RteHhsODxteTMzNDczM0ApMzc7OTw6ZzxnNzMzOjU4NGdxZmYxb2c0cnFfLS0tMTZzczUyXzMyNmMtNmJiXjNhLi06Yw==&vl=&vr=',
				channel: 'codedamn',
				description: 'gg',
				song: 'wowowow',
				likes: 4441,
				messages: 4,
				shares: 100
			}
		])
	}, [])

	return (
		// BEM
		<div className="app">
			<div className="app__videos" onScroll={() => setPlaying(null)}>
				{videos.map(({ url, channel, description, song, likes, messages, shares }) => (
					<Video
						url={url}
						channel={channel}
						song={song}
						playing={playing}
						setPlaying={setPlaying}
						likes={likes}
						messages={messages}
						description={description}
						shares={shares}
					/>
				))}
			</div>
		</div>
	)
}
