

export const FlightsTable = (props) => {
    const { flight } = props;


    return (
        <tr >
            <th className='table-body'>{flight.id}</th>
            <th className='table-body'>{flight.date}</th>
            <th className='table-body'>{flight.time}</th>
            <th className='table-body'>{flight.name}</th>
            <th className='table-body'>{flight.direct}</th>
            <th className='table-body'>
                <button className='button_select'>Select</button>
            </th>
        </tr>
    )
}
