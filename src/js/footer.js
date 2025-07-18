import '../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook,faTiktok,faInstagram} from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div className="footer_div col-md-12">
        <div className='logow_con col-md-4'>
            <img src='logo-white.png' alt="logo-white" className='logo_white'></img>
            {/* <h6 className='logo_line'>Beauty in Every Trend <br/>Style in Every Detail</h6> */}
        </div>
        <div className='col-md-4 ctn_con'>
            <h6>Find us on Social Medias!</h6>
            <div className='ctn_deets'>
                <FontAwesomeIcon icon={faSquareFacebook} className='deets_icon' />
                <a href='#'>Manciare Trends</a>
            </div>
            <div className='ctn_deets'>
                <FontAwesomeIcon icon={faTiktok} className='deets_icon' />
                <a href='#'>Manciare Trends</a>
            </div>
            <div className='ctn_deets'>
                <FontAwesomeIcon icon={faInstagram} className='deets_icon' />
                <a href='#'>Manciare Trends</a>
            </div>
        </div>
    </div>
  );
}


export default Footer;