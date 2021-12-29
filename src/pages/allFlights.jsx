import { useEffect, useState} from 'react';
import { useQuery, gql } from '@apollo/client';
import '../theme'
import { FlightsTable, MainHeader } from '../components';
import { compStore } from '../init/compStore';
import { Paginate } from '../components/Paginate';
import { Modal } from "../components/Modal";
import { QUERY_ALL_FLIGHTS } from '../helpers/gqlRequest';


export const AllFlights = () => {
    const comp = compStore.filter(el=> el.path==="/airlines")[0];

    const [currentPage, setCurrentPage] = useState(1);
    const [flightsPerPage, setFlightsPerPage] = useState(15);
    const [flights, setFlights] = useState([]);
    const [toggleFlights, setToggleFlights] = useState(false);

    const { data: flightsData, loading: loadingFlights, error: errorFlights } = useQuery(QUERY_ALL_FLIGHTS);
    const uploadAllFlights = () => setFlights(flightsData?.flights)

    useEffect(() => {
        if (flightsData) uploadAllFlights();
    }, [flightsData])

    if (loadingFlights) return <h1>Data is loading...</h1>
    const allFlights = flights;

    //___pagination___
    const indexLastFlight = currentPage * flightsPerPage;
    const indexFirstFlight = indexLastFlight - flightsPerPage;
    const currentFlights = allFlights.slice(indexFirstFlight, indexLastFlight)
    const pageCounter = (num) => setCurrentPage(num)

    const modalSearchFlights = (x) => setToggleFlights(x);
    const updateFlightList = (data) => setFlights(data);


    return (
        <div className='flight_block _container'>
            <Modal modal={ modalSearchFlights } updateFlightList={ updateFlightList }
                   page={setCurrentPage} toggleFlights={ toggleFlights }/>
            <section className='flights_section'>
                <div className='div-menu'>
                    <MainHeader title={comp.head}/>
                </div>
                <div>
                    <button className="button_flight" type="button"
                            onClick={ () => { pageCounter(1); uploadAllFlights() } }>All items</button>
                    <button className="button_flight" type="button"
                            onClick={ ()=> modalSearchFlights(true) }>
                        Search for flight</button>
                    <button className="button_flight" type="button" >Selected flights</button>
                </div>
                <table className="table-box">
                    <thead>
                        <tr >
                            <th className='table-head'>Number</th>
                            <th className='table-head'>Flight departure day</th>
                            <th className='table-head'>Flight departure time</th>
                            <th className='table-head'>Flight Name</th>
                            <th className='table-head'>Flight Direction</th>
                            <th className='table-head'>Select flight</th>
                        </tr>
                    </thead>
                    <tbody>
                        { currentFlights.map((el, i) =>
                            <FlightsTable flight={el} key={i} />
                        )}
                    </tbody>
                </table>
                <Paginate itemsPerPage={ flightsPerPage } totalItems={ allFlights.length } pageCounter={ pageCounter }/>
            </section>
        </div>
    );
}
