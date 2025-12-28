import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Modal from 'react-modal';

interface ImageModalProps {
  src: string
  alt?: string
  caption?: string
  modalWidth?: string
}

Modal.setAppElement('#__docusaurus');

const ImageModal: React.FC<ImageModalProps> = ({ src, alt = '', caption = '', modalWidth = '80vw' }) => {
  const [open, setOpen] = useState(false);
  const resolvedSrc = useBaseUrl(src);

  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <img
        src={resolvedSrc}
        alt={alt}
        style={{ maxWidth: '100%', cursor: 'pointer', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        onClick={() => setOpen(true)}
      />
      {caption && <div style={{ marginTop: '0.5rem', color: '#666', fontSize: '1rem' }}>{caption}</div>}
      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.7)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: {
            position: 'relative',
            inset: 'unset',
            background: 'transparent',
            border: 'none',
            padding: 0,
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: modalWidth,
            margin: 'auto',
          },
        }}
        contentLabel={alt || caption || 'Image'}
      >
        <img
          src={resolvedSrc}
          alt={alt}
          style={{
            maxWidth: '100%',
            maxHeight: '80vh',
            borderRadius: '12px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            background: '#fff',
            margin: 'auto',
            display: 'block',
          }}
        />
        <button
          onClick={() => setOpen(false)}
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            background: 'rgba(0,0,0,0.6)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: 32,
            height: 32,
            fontSize: 20,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Close modal"
        >
          ×
        </button>
      </Modal>
    </div>
  );
}

export default ImageModal
