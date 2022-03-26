import React from 'react'
import './Loader.css'

const Loader = (props) => {
	return (
        <div className={`lds-spinner ${props.className}`}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
	)
}

export default Loader