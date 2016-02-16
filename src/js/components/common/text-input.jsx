import React, {PropTypes} from 'react'
import classNames from 'classnames'

const TextInput = ({name, label, onChange, value, error, placeholder = null}) => {
  const wrapperClass = classNames('form-group', {'has-error': (error && error.length > 0)})
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className='field'>
        <input type='text'
          name={name}
          className='form-control'
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
        <div className='input'>{error}</div>
      </div>
    </div>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  error: PropTypes.string
}

export default TextInput
