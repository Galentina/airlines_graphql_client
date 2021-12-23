import * as yup from 'yup';

export const schema = yup
    .object()
    .shape({
        email: yup.string().email().defined('Email must be real'),
        password: yup.string().min(5, 'minimum ${min} characters').required('*').defined(),
    })
    .defined();
