import React, { useState } from 'react';
import './ImageSelector.css'

interface ImageSelectorProp {
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

    const imageThumbnails = imageUrls.map((imageUrl) => <img className="image-thumbnail" src={imageUrl} alt="image thumbnail" onClick={() => props.setCurrentUrl(imageUrl)}/>)


    return (
        imageThumbnails
    );
}

