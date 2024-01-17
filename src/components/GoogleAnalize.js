// GoogleAnalytics.js
import React, { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-9ZGR073Q65`;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9ZGR073Q65');
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
