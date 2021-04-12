import React from 'react'
import PropTypes from "prop-types"

const Button = ({ className, children, ...props }) => {
    return (
        <button className={`btn ${className || ''}`} {...props} >{children}</button>
    )
}

export default Button

Button.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
}
