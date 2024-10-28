// src/components/common/LogoLink.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const LogoLink = ({ linkTo = "/", imgSrc = "/icon/agteach.png", altText = "Logo", imgHeight = "120px" }) => {
  return (
    <Link to={linkTo}>
      <img
        src={imgSrc}
        alt={altText}
        style={{ maxHeight: imgHeight, maxWidth: '100%' }}
      />
    </Link>
  );
};
