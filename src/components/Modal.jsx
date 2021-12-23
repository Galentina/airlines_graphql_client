import '../theme';
import { useForm } from 'react-hook-form';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { MainHeader } from './MainHeader';


const GET_FLIGHTS_BY_DATA = gql`
    query GetFlight($name: String!) {
      flightsByName(name: $name) {
        id
        date
        time
        name
        direct
      }
    }
`;


export const Modal = (props) => {
    const { modal, updateFlightList } = props;
    const [fetchFlight, {data: flightsSearchData, error: errorFlightsData}] = useLazyQuery(GET_FLIGHTS_BY_DATA);
    const { register, reset, handleSubmit } = useForm();

    const onSubmit = (value) => {
        console.log(value.airName)
        if (value.airName!=='') {
            fetchFlight({
                variables: {
                    name: String(value.airName),
                },
            }).then(res => {
                console.log('!!!', res.data.flightsByName)
                updateFlightList(res.data.flightsByName)
            });
            reset();
        }
    };

    return (
        <div className='modal-box'>
            <div className='modal-content'>
                <div>
                    <MainHeader title={'Select flights'}/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='modal-form'>
                    {/*<label className='modal-label'>Choose Date</label>*/}
                    {/*<input type="date" min="2022-01-01" max="2023-01-01"*/}
                    {/*       name='date'*/}
                    {/*       placeholder='Choose date'*/}
                    {/*       className='modal-input'*/}
                    {/*       {...register('date')}/>*/}
                    <label className='modal-label'>Airline</label>
                    <input type="text"
                           name='airName'
                           placeholder='Choose name of airline'
                           className='modal-input'
                           {...register('airName')}/>
                    {/*<label className='modal-label'>Flight Direction</label>*/}
                    {/*<input type="text"*/}
                    {/*       name='direct'*/}
                    {/*       placeholder='Choose direction'*/}
                    {/*       className='modal-input'*/}
                    {/*       {...register('direct')}/>*/}
                    <div>
                        <button type='submit' className="sub_button">Submit</button>
                        <button type='button' className="sub_button" onClick={() => modal(false)}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
