import './Destinations.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import KeyWest from '../../assets/keywest.jpg'

export default function Destinations() {
  return (
    <div name='destinations' className='destinations'>
        <div className="container">
            <h1>All-Inclusive Resorts</h1>
            <p>On the Carribean's Best Beaches</p>
            <div className="img-container">
                <img className='span-3 img-grid-row-2' src={BoraBora} alt="" />
                <img src={BoraBora2} alt="" />
                <img src={Maldives} alt="" />
                <img src={Maldives2} alt="" />
                <img src={KeyWest} alt="" />
            </div>
        </div>
    </div>
  )
}
