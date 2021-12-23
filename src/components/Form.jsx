import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../helpers/schema';
import { useEffect } from 'react';


export const Form = () => {
    const { handleSubmit, form, register, reset, setFocus, formState } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(schema),
        defaultValue: {
            email: '',
            password: '',
        }
    });
    const onSubmit = (values) => {
        console.log(values);
        reset();
    }

    useEffect(() => {
        setFocus('email');
    }, ['email']);

    return (
        <form onSubmit={ handleSubmit(onSubmit) } className="login_input" >
            <label className='label_box' ><span className='label email'>Email</span>
                <input type='email'
                       name='email'
                       placeholder='email'
                       autoComplete='email'
                       { ...register('email') }
                       className="login"/>
                <span className={formState.errors.email ? 'check visible' : 'check invisible'}>
                    { formState.errors.email ? formState.errors.email.message : 'Enter email' }</span>
            </label>
            <label className='label_box'>
                <span className='label password'>Password</span>
                <input type='password'
                       name='password'
                       placeholder='password'
                       autoComplete='password'
                       { ...register('password')}
                       className="login"/>
                <span className={formState.errors.password ? 'check visible' : 'check invisible'}>
                    { formState.errors.password ? formState.errors.password.message : 'Enter password' }</span>
            </label>
            <button type='submit' className="sub_button">Login</button>
        </form>
    )
}
