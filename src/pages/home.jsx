import {compStore} from "../init/compStore";
import { MainHeader } from "../components";
import Logo from './../assets/airline.svg';
import '../theme';


export function HomePage() {
    const comp = compStore.filter(el=> el.path==="/home")[0];

    return (
        <div style={{width: '80%', margin: "auto"}}>
            <div className='div-menu'>
                <MainHeader title={comp.head}/>
            </div>
            <div style={{marginTop: "30px"}}>
                <img src={ Logo } alt='Logo' tytle='Airlines' style={{width: "50%", marginTop: '30px'}}/>
            </div>
            <div >
                <h3>Create from the list of all flights <br/>your own list of flights</h3>
            </div>
        </div>
    )
}
