import * as yup from 'yup';

export const schemaReg = yup
    .object()
    .shape({
        email: yup.string().email().defined('Email must be real'),
        password: yup.string().min(5, 'minimum ${min} characters').required('*'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
        name: yup.string().required().defined('Must not be empty'),
        username: yup.string().required().defined('Must not be empty'),
        age: yup.number().required().positive().integer(),
        nationality: yup.string().required('Must not be empty').defined('Must not be empty'),
    })
    .defined();
