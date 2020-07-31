import React from 'react';

import defaultThumbnail from '../../defaultThumbnail.jpg';
import './Image.style.css';

const Image = ({ url }) => {
  let defaultStyle = 'thumbnail';
  if (!url) {
    url = defaultThumbnail;
    defaultStyle += ' default';
  }

  return <img src={url} className={defaultStyle} alt='recipe-thumbnail' />;
};

export default Image;
