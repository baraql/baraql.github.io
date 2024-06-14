import React, { useRef, useEffect, useState } from 'react';
import 'intersection-observer'; // If you installed the polyfill

const LazyLoadVideo = ({ demoVideo, demoVideoPlaceholder }) => {
  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '100px', // Start loading a bit before it comes into view
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div style={{ maxHeight: "400px", marginRight: "100px", marginLeft: "100px" }}>
      {isIntersecting ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={demoVideoPlaceholder}
        >
          <source src={demoVideo} type="video/mp4" />
        </video>
      ) : (
        <img
          src={demoVideoPlaceholder}
          alt="Video placeholder"
          style={{ width: '100%', height: 'auto' }}
        />
      )}
    </div>
  );
};

export default LazyLoadVideo;
