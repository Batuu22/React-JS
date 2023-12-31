//rfc
import React from 'react'

//i18n
import { withTranslation } from 'react-i18next'

//FUNCTION
function ReusabilityBlogInput(props) {

    // object destructing
    const { type, id, name, placeholder, classNameProps, required, autoFocus, onChange, errors, onKeyDown } = props;

    //RETURN
    return (
        <React.Fragment>
            <label className="form-label" htmlFor={id}>{placeholder}</label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                className={classNameProps}
                required={required}
                autoFocus={autoFocus}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            {/* Validaton Header */}
            <span id="headerValidation_id" className='text-danger'>{errors}</span>
        </React.Fragment>
    ) // end Return
} // end Function

export default withTranslation()(ReusabilityBlogInput);
