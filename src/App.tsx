import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PhotoViewer } from './photo-viewer-src/PhotoViewer'
import { ImageSelector } from './ImageSelector/ImageSelector'

function App() {

  const [currentUrl, setCurrentUrl] = useState('https://picsum.photos/id/40/1600/900.jpg')

  return (
      <div>
          <h1>React Photo Viewer</h1>
          <PhotoViewer src={currentUrl}/>
          
          <ImageSelector setCurrentUrl={setCurrentUrl} currentUrl={currentUrl}/>
      </div>
  );
}

export default App
