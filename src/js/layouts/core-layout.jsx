import React, { PropTypes} from 'react'
import Header from '../components/common/header'

const CoreLayout = ({children}) => (
  <div>
    <Header />
    <div className='container-fluid'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout
