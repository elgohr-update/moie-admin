import {AvField} from "availity-reactstrap-validation";
import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import messages from './messages';

const TextField = (props) => (
    <AvField
        id ={props.id}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange ? props.onChange : null}
        onBlur={props.onBlur ? props.onBlur : null}
        type={props.type ? props.type : "text"}
        className={`form-control ${props.className ? props.className : ''}` }
        validate={
            {
                required: { value: props.required ? true : false, errorMessage: messages.required },
                minLength: { value: props.minLength ? props.minLength: 0, errorMessage: messages.minLength.replace("{length}", props.minLength)},
                maxLength: { value: props.maxLength ? props.maxLength: 255, errorMessage: messages.maxLength.replace("{length}", props.maxLength)}
            }
        }
    />
)

TextField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
}

const TextAlphaField = (props) => (
    <AvField
        id ={props.id}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange ? props.onChange : null}
        onBlur={props.onBlur ? props.onBlur : null}
        type={props.type ? props.type : "text"}
        className={`form-control ${props.className ? props.className : ''}` }
        validate={
            {
                required: { value: props.required ? true : false, errorMessage: messages.required },
                minLength: { value: props.minLength ? props.minLength: 0, errorMessage: messages.minLength.replace("{length}", props.minLength)},
                maxLength: { value: props.maxLength ? props.maxLength: 255, errorMessage: messages.maxLength.replace("{length}", props.maxLength)},
                pattern: {value: '^[A-Za-z]+$', errorMessage: messages.onlyAlpha},
            }
        }
    />
)

TextAlphaField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
}

const NumberField = (props) => {

    const [value, setValue] = useState(props.value);

    useEffect(() => {
        if (null != props.value && props.value !== value) {
            setValue(isNaN(props.value) ? "" : props.value);
        }
    }, [props.value])

    const onChange = (e) => {
        let val = e.target.value;
        setValue(val);
        if (isNaN(Number(val))) {
            val = value || val;
            setTimeout(() => {
                setValue(clearValue(val));
            }, 10)
        }
        if (props.onChange) {
            props.onChange(clearValue(val));
        }
    }

    const clearValue = (val) => {
        return val && val.replace ? parseFloat(val.replace(/[^\d]/g, '')) : null;
    }

    return <AvField
        id={props.id}
        name={props.name}
        value={props.value}
        defaultValue={value}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={onChange}
        type={"text"}
        className="form-control"
        validate={
            {
                required: {value: props.required === true, errorMessage: messages.required},
            }
        }
    />
}

NumberField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number,
    placeholder: PropTypes.string,
    required: PropTypes.bool
}

const NumberDecimalField = (props) => {

    const [value, setValue] = useState(props.value);

    useEffect(() => {
        if (null != props.value && props.value !== value) {
            setValue(isNaN(props.value) ? "" : props.value);
        }
    }, [props.value])

    const onChange = (e) => {
        let val = e.target.value;
        setValue(val);
        if (isNaN(Number(val))) {
            val = value || val;
            setTimeout(() => {
                setValue(clearValue(val));
            }, 10)
        }
        if (props.onChange) {
            props.onChange(clearValue(val));
        }
    }

    const clearValue = (val) => {
        return val && val.replace ? parseFloat(val.replace(/[^\d.]/g, '')) : null;
    }

    return <AvField
        id={props.id}
        name={props.name}
        value={value}
        defaultValue={value}
        placeholder={props.placeholder}
        onChange={onChange}
        type="text"
        className="form-control"
        validate={
            {
                required: {value: props.required === true, errorMessage: messages.required},
            }
        }
    />
}

NumberDecimalField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number,
    placeholder: PropTypes.string,
    required: PropTypes.bool
}

const EmailField = (props) => (
    <AvField
        id ={props.id}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
        className="form-control"
        validate={
            {   required: {
                    value: props.required ? true : false,
                    errorMessage: messages.required },
                email: { value: true, errorMessage: messages.email_invalid } }
        }
    />
)

EmailField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool
}

export {
    TextField,
    NumberField,
    NumberDecimalField,
    EmailField,
    TextAlphaField
};
