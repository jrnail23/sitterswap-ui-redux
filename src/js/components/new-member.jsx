import React from 'react'

export default ({value, onChange}) => (
  <div>
    <h3>New</h3>
    <input type='text' onKeyUp={onChange} />
  </div>
)
