import React, { useState, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import './ProfileUpload.css';

const ProfileUpload = ({ profileImage, setProfileImage }) => {
  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({
    unit: '%',
    width: 50,
    aspect: 1
  });
  const [completedCrop, setCompletedCrop] = useState(null);
  const imgRef = useRef(null);
  const fileInputRef = useRef(null);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setSrc(reader.result);
        setShowModal(true);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onImageLoad = (img) => {
    imgRef.current = img;
  };

  const getCroppedImg = () => {
    if (!completedCrop || !imgRef.current) {
      return;
    }

    const canvas = document.createElement('canvas');
    const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
    const scaleY = imgRef.current.naturalHeight / imgRef.current.height;
    canvas.width = completedCrop.width * scaleX;
    canvas.height = completedCrop.height * scaleY;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      imgRef.current,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY
    );

    canvas.toBlob((blob) => {
      if (!blob) {
        return;
      }
      const croppedImageUrl = URL.createObjectURL(blob);
      setProfileImage(croppedImageUrl);
      setShowModal(false);
      setSrc(null);
    }, 'image/jpeg');
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
    setSrc(null);
  };

  return (
    <>
      <div className="profile-upload-container">
        {profileImage ? (
          <div className="profile-image-wrapper">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <div className="profile-actions">
              <button 
                className="change-photo-btn"
                onClick={() => fileInputRef.current.click()}
                title="Change photo"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="remove-photo-btn"
                onClick={handleRemoveImage}
                title="Remove photo"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <button 
            className="upload-btn"
            onClick={() => fileInputRef.current.click()}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Upload Photo</span>
          </button>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={onSelectFile}
          style={{ display: 'none' }}
        />
      </div>

      {showModal && (
        <div className="crop-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="crop-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Crop Your Profile Picture</h2>
            <div className="crop-container">
              {src && (
                <ReactCrop
                  crop={crop}
                  onChange={(c) => setCrop(c)}
                  onComplete={(c) => setCompletedCrop(c)}
                  aspect={1}
                  circularCrop
                >
                  <img
                    src={src}
                    alt="Crop preview"
                    onLoad={(e) => onImageLoad(e.currentTarget)}
                  />
                </ReactCrop>
              )}
            </div>
            <div className="crop-actions">
              <button className="cancel-btn" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="apply-btn" onClick={getCroppedImg}>
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileUpload;
