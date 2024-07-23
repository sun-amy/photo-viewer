import React, { useState } from 'react';
import './ImageSelector.css'

interface ImageSelectorProp {
    currentUrl: string;
    setCurrentUrl: (url: string) => void; 
  }

export function ImageSelector(props: ImageSelectorProp) {  

    const brokenImages = [
        1, 24, 32, 36, 44, 47
    ];

    function getImageUrls() {
        const urls = ['https://picsum.photos/id/40/1600/900.jpg'];
        for (let i = 0; i < 49; i++) {
            if (!brokenImages.includes(i)) {
                const imageNumberString = i.toString().padStart(2, '0');
                urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
            }
        }
        return urls;
    }

    const imageUrls = getImageUrls();

    function handleThumbnailClick(imageUrl: string) {
        console.log('Setting current URL to:', imageUrl);
        props.setCurrentUrl(imageUrl);
      }
    
      const imageThumbnails = imageUrls.map((imageUrl) => {
        console.log('Comparing:', props.currentUrl, 'with', imageUrl);
        return (
          <img
            key={imageUrl}
            className={`image-thumbnail ${props.currentUrl === imageUrl ? "selected-thumbnail" : ""}`}
            src={imageUrl}
            alt="image thumbnail"
            onClick={() => handleThumbnailClick(imageUrl)}
          />
        );
      });
    const randomImage = (imageUrls: string[]) => {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        const randomImageUrl = imageUrls[randomIndex];
        props.setCurrentUrl(randomImageUrl);
      };

    return (
        <div><button className='random-image-button' onClick={() => randomImage(imageUrls)}>Random</button>
        <div className="image-thumbnails-container">{imageThumbnails}</div></div>
        
    );
}

