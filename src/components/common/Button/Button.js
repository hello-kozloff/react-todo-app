import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Button.module.css';

const Button = (props) => {
  const {
    type,
    theme,
    size,
    wide,
    disabled,
    children,
    onClick,
  } = props;

  const componentClass = classNames(
    classes.component,
    theme ? classes[theme] : null,
    size ? classes[size] : null,
    wide ? classes.wide : null,
    disabled ? classes.disabled : null,
  );

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type={type}
      disabled={disabled}
      className={componentClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf([
    'button',
    'submit',
    'reset',
  ]),
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
  ]),
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  theme: 'primary',
  size: 'medium',
  wide: false,
  disabled: false,
  onClick: () => false,
};

export default Button;
