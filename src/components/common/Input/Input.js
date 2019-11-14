import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Input.module.css';

class Input extends React.Component {
  constructor(props) {
    super(props);

    const { value } = this.props;

    this.state = {
      value,
      hover: false,
      focus: false,
    };
  }

  /**
   * This function active when hover/remove hover input
   * @param event
   */
  onHover = (event) => {
    const { hover } = this.state;
    const { onHover } = this.props;

    /**
     * If hover -> true
     * if hover remove -> false
     */
    this.setState({
      hover: !hover,
    });

    /**
     * Response event in to props
     */
    onHover(event);
  };

  /**
   * This function active when change input value
   * @param event
   */
  onChange = (event) => {
    const { value } = event.target;
    const { onChange } = this.props;

    /**
     * Set new value in t0 state
     */
    this.setState({
      value,
    });

    /**
     * Response event in to props
     */
    onChange(event);
  };

  /**
   * This function active when focus/remove focus in input
   * @param event
   */
  onFocus = (event) => {
    const { focus } = this.state;
    const { onFocus } = this.props;

    /**
     * If focus -> true
     * if focus remove -> false
     */
    this.setState({
      focus: !focus,
    });

    /**
     * Response event in to props
     */
    onFocus(event);
  };

  render() {
    const {
      value,
      hover,
      focus,
    } = this.state;

    const {
      type,
      name,
      theme,
      size,
      placeholder,
      disabled,
      required,
      error,
    } = this.props;

    /**
     * Wrapper classes
     * @type {string}
     */
    const componentClass = classNames(
      classes.component,
      theme ? classes[theme] : null,
      size ? classes[size] : null,
      hover ? classes.hover : null,
      focus ? classes.focus : null,
      value ? classes.active : null,
      disabled ? classes.disabled : null,
      error ? classes.error : null,
    );

    return (
      <label
        htmlFor={name}
        className={componentClass}
        onMouseEnter={this.onHover}
        onMouseLeave={this.onHover}
      >
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          disabled={disabled}
          className={classes.field}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onFocus}
          required={required}
        />
        {
          placeholder ? (
            <span className={classes.placeholder}>
              {placeholder}
            </span>
          ) : null
        }
        {
          error ? (
            <span className={classes.text}>
              {error}
            </span>
          ) : null
        }
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
  ]),
  name: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([
    'outline',
    'filled',
  ]),
  size: PropTypes.oneOf([
    'medium',
    'large',
  ]),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  onHover: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  theme: 'outline',
  size: 'medium',
  placeholder: '',
  value: '',
  disabled: false,
  required: false,
  error: '',
  onHover: () => false,
  onChange: () => false,
  onFocus: () => false,
};

export default Input;
