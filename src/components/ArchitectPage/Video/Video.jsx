import React from 'react';
import { useTranslation } from 'react-i18next';

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import style from './style.module.css';

const video = ({ videoId }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation();
  return (
    <div className={style.Container}>
      <h2>Youtube</h2>
      <Button type="button" onClick={() => setIsOpen(true)} color="primary" variant="contained">
        {t('watch')}
      </Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className={style.modal}>
          <div onClick={() => setIsOpen(false)} className={style.close}>×</div>
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
