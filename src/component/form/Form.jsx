import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { IMaskInput } from "react-imask";
import { PortalWithState } from "react-portal";

import cn from 'classnames';

import styles from './styles.module.css';

import Popup from "../popup/Popup";


const Form = () => {

  const PhoneMask = "+{7} (000) 000-00-00";
  const EmailMask = /^\S*@?\S*$/;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // отражение ошибок
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [formValid, setFormValid] = useState(false);

  const validateName = (event) => {
    if (!event || event.length <= 2) {
      setNameError('Введите ваше полное имя');
    } else {
      setNameError('');
    }
  }

  const nameHandler = (event) => {
    setName(event);
    validateName(event);
  };

  const validatePhone = (event) => {
    if (!event || event.length <= 17) {
      setPhoneError('напишите полностью ваш номер');
    } else {
      setPhoneError('');
    }
  }

  const phoneHandler = (event) => {
    setPhone(event);
    validatePhone(event);


  }

  const validateEmail = (event) => {
    const regularEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const result = regularEmail
      .test(String(event)
        .toLowerCase())

    if (!result || event.length >= 60) {
      setEmailError('введите корректный e-mail');
    } else {
      setEmailError('');
    }
  }

  const emailHandler = (event) => {
    setEmail(event);
    validateEmail(event);
  }

  const focusHandler = () => {
    switch (name) {
      case 'name':
        setNameError('');
        break;

      case 'phone':
        setPhoneError('');
        break;

      case 'email':
        setEmailError('');
        break;

      default: break;
    }
  }

  const blurHandler = (event) => {
    switch (name) {
      case 'name':
        validateName(event);
        break;

      case 'phone':
        validatePhone(event);
        break;

      case 'email':
        validateEmail(event);
        break;

      default: break;
    }
  }


  useEffect(() => {
    if (nameError || phoneError || emailError) {
      setFormValid(false)
    } else if (!name || !phone || !email) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  },
    [
      nameError,
      phoneError,
      emailError,
      name,
      phone,
      email
    ]
  )

  const { handleSubmit } = useForm();

  const onSubmit = data => data;

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>
        Пожалуйста, представьтесь
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form__elements}
      >

        <div>
          {Boolean(nameError) &&
            <p className={styles.inputErrorText}>
              {nameError}
            </p>
          }

          <input
            name="name"
            value={name}
            placeholder="Ваше имя"
            type="text"
            className={cn(styles.input, {
              [styles.inputError]: Boolean(nameError)
            })}
            onChange={(event) => nameHandler(event.target.value)}
            onFocus={focusHandler}
            onBlur={(event) => blurHandler(event.target.value)}
          />
        </div>

        <div>
          {Boolean(phoneError) &&
            <p className={styles.inputErrorText}>
              {phoneError}
            </p>
          }

          <IMaskInput
            name="phone"
            value={phone}
            placeholder="Телефон"
            mask={PhoneMask}
            className={cn(styles.input, {
              [styles.inputError]: Boolean(phoneError)
            })}
            onChange={(event) => phoneHandler(event.target.value)}
            onFocus={focusHandler}
            onBlur={(event) => blurHandler(event.target.value)}
          />
        </div>

        <div>
          {Boolean(emailError) &&
            <p className={styles.inputErrorText}>
              {emailError}
            </p>
          }

          <IMaskInput
            name="email"
            value={email}
            mask={EmailMask}
            placeholder="Email"
            className={cn(styles.input, {
              [styles.inputError]: Boolean(emailError)
            })}
            onChange={(event) => emailHandler(event.target.value)}
            onFocus={focusHandler}
            onBlur={(event) => blurHandler(event.target.value)}
          />
        </div>

        <PortalWithState
          node={document && document.getElementById('modal-root')}
          closeOnEsc
        >
          {({ openPortal, portal, closePortal }) => (
            <React.Fragment>
              <button
                className={styles.button}
                onClick={openPortal}
                type="submit"
                disabled={!formValid}
              >
                оформить заказ
              </button>
              {portal(
                <Popup
                  name={name}
                  phone={phone}
                  email={email}
                  close={closePortal} />
              )}
            </React.Fragment>
          )}
        </PortalWithState>
      </form>
    </div>
  )
}

export default Form;