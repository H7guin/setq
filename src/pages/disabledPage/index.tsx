import './disabledPage.css'
import Header from '../../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export default function Disabled() {
    return (
        <>
    <div className="pageContainer">
        <Header/>        
        
        <div className="closedSign">
            <FontAwesomeIcon icon={faClock} className='closedIcon'/>
            <p className='closedText'>Inscrições fechadas</p>
        </div>

        <div className="closedSubtitle">
            <p className='closedInfo'>As inscrições abrem <span>30 minutos</span> antes do horário do intervalo</p>
        
            <p className='breakHours'>Vespertino: 14:30 | Noturno: 20:30</p>
        </div>

        <div className="closedTimer">
            <p className='timerTitle'>Próxima abertura em</p>
            <span className='timer'>23:59:59</span>
        </div>

    </div>
        </>
    )
}