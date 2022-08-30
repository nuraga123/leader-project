import React from "react";

import styles from './styles.module.css';

const Popup = ({ name, phone, email, close }) => {
  const randomNumber = Math.floor((Math.random() * 1000))

  return (
    <div className={styles.popup}>
      <div className={styles.container}>
        <div className={styles.close_button}>
          <button
            className={styles.button}
            onClick={close}
          >
            <svg
              className={styles.svg}
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 1.61714L14.3829 0L8 6.38286L1.61714 0L0 1.61714L6.38286 8L0 14.3829L1.61714 16L8 9.61714L14.3829 16L16 14.3829L9.61714 8L16 1.61714Z" />
            </svg>
          </button>
        </div>

        <p className={styles.content_name}>Спасибо
          <strong>
            {` ${name} `}
          </strong>ваш заказ{' '}
          <strong>
            №{`${randomNumber} `}
          </strong>оформлен.
        </p>

        <div className={styles.content__phone}>
          <p>
            В ближайшее время мы свяжемся с вами по телефону
          <strong>{` ${phone} `}</strong>
          </p>
          
          <div>
            <p>и отправим письмо на вашу почту</p>
            <strong>{` ${email}`}</strong>
            <p>для его подтверждения.</p>
          </div>
        </div>
      </div >
    </div>
  )
}

export default Popup;