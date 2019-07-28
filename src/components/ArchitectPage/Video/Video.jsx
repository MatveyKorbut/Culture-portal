import React from 'react';

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import style from './style.module.css';

const video = ({ videoId }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={style.Container}>
      <h2>Youtube</h2>
      <Button type="button" onClick={() => setIsOpen(true)} color="primary" variant="contained">
        Watch video
      </Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className={style.modal}>
          <iframe
            className={style.iframe}
            title="youtube"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
    </div>
  );
};

export default video;
