import React from 'react'
import PropTypes from "prop-types"

import './style.scss'



const TextField = ({
    required,
    input = {},
    label = '',
    meta = {},
    placeholder = '',
    type = 'text', }) => {

    return (
        <div className="form-inputText">
            <label className="form-label">
                {label}
            </label>
            <input
                required={required}
                placeholder={placeholder}
                type={type}
                {...input}
                onBlur={e => input && input.onBlur && input.onBlur(e.target.value)}
                onChange={e => input && input.onChange && input.onChange(e.target.value)}
                className="form-input"
            />
            {meta.error && <span className="form-error">
                {meta.error}
            </span>}
        </div>
    )
}
TextField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    meta: PropTypes.object,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool
}
export default TextField
