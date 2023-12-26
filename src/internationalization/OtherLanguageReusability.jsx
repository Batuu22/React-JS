//rfc
import React from 'react'

//Flags
import trFlag from '../img/TurkishFlag.png';
import ukFlag from '../img/UKFlag.png';

import { Link } from 'react-router-dom';

//i18n
import { withTranslation } from 'react-i18next';

// otherLanguageServices
import otherLanguageServices from './otherLanguageServices';

//FUNCTION
function OtherLanguageReusability(props) {

    //  Bayraklar ve Datalar
    const internationalizationLanguageService=(languageButtonTrigger)=>{
        
        // Object Destructing
        const {i18n}=props;

        i18n.changeLanguage(languageButtonTrigger);
        otherLanguageServices.headerAccessLanguageServices(languageButtonTrigger);
    }   

  //Return
  return (
    <React.Fragment>
        <ul className='navbar-nav me-auto mt-2 mt-lg-0'>
            <Link>
            <li className='nav-item'>
                <img src={trFlag} alt="TR_Flag" style={{width:45,marginRight:5}} onClick={()=>internationalizationLanguageService('tr')} />
            </li>
            </Link>
            <Link>
            <li className='nav-item'>
                <img src={ukFlag} alt="UK_Flag" style={{width:45,marginRight:5}} onClick={()=>internationalizationLanguageService('en')}/>
            </li>
            </Link>
        </ul>
    </React.Fragment>
  )// return end
}// function end

export default withTranslation()(OtherLanguageReusability);