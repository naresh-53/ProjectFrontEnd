import React from 'react';

interface BannerImageCompProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ title, description, cta, image, background, onEdit }) => {
  return (
    <div className="banner" style={{ background: background }}>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{cta}</button>
      </div>
      <img src={image} alt={title} />
      <button className="edit-button" onClick={onEdit}>Edit</button>
    </div>
  );
};

export default BannerImageComp;
