import React from "react";  
import './PhotoViewer.css'

interface PhotoViewerProps {
    src: string
}

export function PhotoViewer(props: PhotoViewerProps) {  
    return (
        <img className="display-image" src={props.src} alt="display-image"/>
    );
}