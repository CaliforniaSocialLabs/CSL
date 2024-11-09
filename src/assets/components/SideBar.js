import '../css/style.css';
import logo from '../images/logo.png';
const SideBar = () =>{
    return(
        <div className='Side-bar'>
            <div className='Logo-container'>
                <div className='Logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='Logo-title'>
                    California Social Labs
                </div>
            </div>
          <div className='Side-nav'>
          </div>
        </div>
    )
}

export default SideBar
