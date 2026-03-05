import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


export default function Header() {
    
    const navigate = useNavigate()

    return (
        <>
        <div className="headerContainer">
            <div className="logo">
                <p className='logoIcon'>O</p>
                <p className='logoText'>FATEC SetQ</p>
            </div>

            <div className="exit">
                <button onClick={() => navigate(-1)}>
                    <FontAwesomeIcon className='exitIcon' icon={faRightFromBracket}/>
                </button>
            </div>
        </div>
        </>
    )
}