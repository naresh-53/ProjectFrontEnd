// components/EditBannerTemplateBs.tsx


// Component code...

import React, { useState } from 'react';

interface EditBannerTemplateBsProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onSave: (updatedBanner: any) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ title, description, cta, image, background, onSave }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newCta, setNewCta] = useState(cta);
  const [newImage, setNewImage] = useState(image);
  const [newBackground, setNewBackground] = useState(background);

  const handleSave = () => {
    onSave({
      title: newTitle,
      description: newDescription,
      cta: newCta,
      image: newImage,
      background: newBackground
    });
  };

  return (
    <div className="edit-banner">
      <h2>Edit Banner</h2>
      <div>
        <label>Title:</label>
        <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
      </div>
      <div>
        <label>CTA:</label>
        <input value={newCta} onChange={(e) => setNewCta(e.target.value)} />
      </div>
      <div>
        <label>Image URL:</label>
        <input value={newImage} onChange={(e) => setNewImage(e.target.value)} />
      </div>
      <div>
        <label>Background URL:</label>
        <input value={newBackground} onChange={(e) => setNewBackground(e.target.value)} />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditBannerTemplateBs;
