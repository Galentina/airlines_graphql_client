import '../theme';
import { useForm } from 'react-hook-form';
import { useQuery, gql, useLazyQuery, useMutation } from '@apollo/client';
import { MainHeader } from './MainHeader';
import { Nationality } from '../helpers/Nationality';
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaReg} from "../helpers/schemaReg";



const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input: CreateUserInput!) {
      createUser(input: $input) {
        name
        username
        age
        nationality
      }
    }
`;


export const ModalReg = (props) => {

    const { modalReg, toggleReg } = props;
    const [createUser] = useMutation(CREATE_USER_MUTATION);
    const { register, reset, handleSubmit, formState } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(schemaReg),
        defaultValue: {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            age: 0,
            nationality: '',
        }
    });


    const onSubmit = (value) => {
        console.log(value)
        createUser({
            variables: {input: {
                name: String(value.name),
                username: String(value.username),
                password: String(value.password),
                email: String(value.email),
                age: Number(value.age),
                nationality: String(value.nationality)
            }}
        }).then(r => console.log(r));

        reset();
    };

    const NationalityList = ['', ...Nationality];

    return (
        <div className={ toggleReg ? 'modalReg-box open' : 'modalReg-box'}>
            <div className='modal-contentReg'>
                <div>
                    <MainHeader title={'Select flights'}/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='modal-form'>
                    <label className='modal-label'><span>Name</span>
                        { formState.errors.name &&
                            <span className={formState.errors.name ? 'check visible' : 'check invisible'}>
                                { formState.errors.name.message }</span>}
                    </label>
                    <input type="text"
                           name='name'
                           placeholder='Insert name'
                           className='modal-input'
                           {...register('name')}/>
                    <label className='modal-label'><span>Username</span>
                        { formState.errors.username &&
                            <span className={formState.errors.username ? 'check visible' : 'check invisible'}>
                                { formState.errors.username.message }</span>}
                    </label>
                    <input type="text"
                           name='username'
                           placeholder='Insert username'
                           className='modal-input'
                           {...register('username')}/>
                    <label className='modal-label'>Password
                        <span className={formState.errors.password ? 'check visible' : 'check invisible'}>
                        { formState.errors.password ? formState.errors.password.message : 'Enter email' }</span>
                    </label>
                    <input type="password"
                           name='password'
                           placeholder='Insert password'
                           className='modal-input'
                           {...register('password')}/>
                    <label className='modal-label'>Confirm password
                        <span className={formState.errors.confirmPassword ? 'check visible' : 'check invisible'}>
                        { formState.errors.confirmPassword ? formState.errors.confirmPassword.message : 'Enter email' }</span>
                    </label>
                    <input type="Password"
                           name='confirmPassword'
                           placeholder='Repeat you password'
                           className='modal-input'
                           {...register('confirmPassword')}/>
                    <label className='modal-label'>Email
                        <span className={formState.errors.email ? 'check visible' : 'check invisible'}>
                        { formState.errors.email ? formState.errors.email.message : 'Enter email' }</span>
                    </label>
                    <input type="email"
                           name='email'
                           placeholder='Insert email'
                           className='modal-input'
                           {...register('email')}/>
                    <label className='modal-label'>Your age
                        <span className={formState.errors.age ? 'check visible' : 'check invisible'}>
                        { formState.errors.age ? formState.errors.age.message : 'Enter email' }</span>
                    </label>
                    <input type="number"
                           name='age'
                           placeholder='Insert your age'
                           className='modal-input'
                           {...register('age')}/>
                    <label className='modal-label'>Nationality
                        <span className={formState.errors.nationality ? 'check visible' : 'check invisible'}>
                        { formState.errors.nationality ? formState.errors.nationality.message : 'Enter email' }</span>
                    </label>
                    <select type="text"
                           name='nationality'
                           placeholder='your nationality'
                           className='modal-input'
                            {...register('nationality')}>
                        { NationalityList.map((el,i) => <option key={i}>{el}</option>) }
                    </select>
                    <div>

                        <button type='submit' className="sub_button">Submit</button>
                        <button type='button' className="sub_button" onClick={() => modalReg(!toggleReg)}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
