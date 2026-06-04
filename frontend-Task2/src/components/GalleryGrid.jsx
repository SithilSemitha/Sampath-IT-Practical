import React, { useState } from 'react';
import img from  '../assets/testimg.jpg';

function GalleryGrid({ images = [] }) {
  const [selectedImg, setSelectedImg] = useState(null);
  
  const defaultImages = [
    { id: 1, src: img, alt: 'Gallery image 1' },
    { id: 2, src: img, alt: 'Gallery image 2' },
    { id: 3, src: img, alt: 'Gallery image 3' },
    { id: 4, src: img, alt: 'Gallery image 4' },
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setSelectedImg(null);
  };

  return (
    <>
      <div className="gallery-grid" role="region" aria-label="Image gallery">
        {galleryImages.map((img) => (
          <div
            key={img.id}
            className="gallery-item"
            onClick={() => setSelectedImg(img)}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label={`Open ${img.alt}`}
          >
            <img src={img.src} alt={img.alt} className="gallery-image" />
            <div className="gallery-overlay">
              <span className="gallery-icon">👁️</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div 
          className="gallery-modal" 
          onClick={() => setSelectedImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onKeyDown={handleKeyDown}
        >
          <div className="modal-content">
            <button 
              className="modal-close" 
              onClick={() => setSelectedImg(null)}
              aria-label="Close image viewer"
            >
              ✕
            </button>
            <img src={selectedImg.src} alt={selectedImg.alt} className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryGrid;
