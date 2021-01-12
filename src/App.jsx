import React, { useEffect, useState } from 'react'
import Video from './Video'
import './App.css'

const API_URL =
	'https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json'

export default function App() {
	const [videos, setVideos] = useState([])

	useEffect(() => {
		// TODO: Get the data from API_URL above
		// Store it inside videos state variable
	}, [])

	return (
		<div className="app">
			<div className="container">
				{/* TODO: Loop over the API_URL data and render Video component */}
				{/* TODO: Make sure to assign the correct URL for each video */}
				<Video url="https://github.com/codedamn-classrooms/tiktok-react-material/raw/main/v1.mp4" />
			</div>
		</div>
	)
}
