import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isNotSixChars = (value) => value.trim().length !== 6;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] =
    useState({
      name: true,
      address: true,
      city: true,
      postalCode: true,
    });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPostalCode =
      postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = !isNotSixChars(
      enteredPostalCode
    );

    setFormInputsValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid &&
      enteredAddressIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;
  const addressControlClasses = `${classes.control} ${
    formInputsValidity.address ? '' : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
  }`;

  return (
    <form
      className={classes.form}
      onSubmit={confirmHandler}
    >
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && (
          <p>Please enter a valid name!</p>
        )}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          ref={addressInputRef}
        />
        {!formInputsValidity.address && (
          <p>Please enter a valid address!</p>
        )}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          ref={postalCodeInputRef}
        />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && (
          <p>Please enter a valid city!</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
