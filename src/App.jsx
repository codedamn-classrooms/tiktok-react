import React, { useState, useEffect } from 'react';
import Video from './Video';
import './App.css';

export default function App() {
  const [videos, setVideos] = useState([]);
  const [playing, setPlaying] = useState(1);

  useEffect(() => {
    setVideos([
      {
        id: 1,
        url: 'https://github.com/codedamn-classrooms/tiktok-react-material/raw/main/v1.mp4',
        channel: 'codedamn',
        description: 'gg',
        song: 'wowowow',
        likes: 4441,
        messages: 4,
        shares: 100,
      },
      {
        id: 2,
        url: 'https://github.com/codedamn-classrooms/tiktok-react-material/raw/main/v2.mp4',
        channel: 'codedamn',
        description: 'gg',
        song: 'wowowow',
        likes: 4441,
        messages: 4,
        shares: 100,
      },
      {
        id: 3,
        url: 'https://github.com/codedamn-classrooms/tiktok-react-material/raw/main/v3.mp4',
        channel: 'codedamn',
        description: 'gg',
        song: 'wowowow',
        likes: 4441,
        messages: 4,
        shares: 100,
      },
      {
        id: 4,
        url: 'https://github.com/codedamn-classrooms/tiktok-react-material/raw/main/v4.mp4',
        channel: 'codedamn',
        description: 'gg',
        song: 'wowowow',
        likes: 4441,
        messages: 4,
        shares: 100,
      },
    ]);
  }, []);

  return (
    // BEM
    <div className='app'>
      <div className='container' onScroll={() => setPlaying(null)}>
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
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
          )
        )}
      </div>
    </div>
  );
}
