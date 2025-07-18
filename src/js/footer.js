import '../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook,faTiktok,faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    
    <div className="footer_div col-md-12">    
 
        <div className='col-md-4 ctn_con'>
            <h1>Say Hi!<FontAwesomeIcon icon={faHeart}/></h1>
            <div className='ctn_deets'>
                <a href='https://www.facebook.com/G21Capas'  target="_blank" ><FontAwesomeIcon icon={faSquareFacebook} className='deets_icon'/></a> 
                <a href='https://www.tiktok.com/@azncollection_?is_from_webapp=1&sender_device=pc' target='_blank'><FontAwesomeIcon icon={faTiktok} className='deets_icon'/></a>
                <a><FontAwesomeIcon icon={faInstagram} className='deets_icon'/></a>
            </div>
            <p>@Manciare Trends 2020</p>
        </div>
        <div className='col-md-4 ctn_con'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h6>Wanna work with us? Be our Partner?</h6>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button class="email_con">braylykim@gmail.com</button>
            </div>
        </div>
    </div>
    

    
  );
}


export default Footer;