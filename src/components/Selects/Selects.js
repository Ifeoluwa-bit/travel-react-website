import './Selects.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import KeyWest from '../../assets/keywest.jpg'


import Selectsimg from '../Selectsimg/Selectsimg'

export default function Selects() {
  return (
    <div name='views' className='selects'>
        <div className="container">
            <Selectsimg bgImg={BoraBora} text='BoraBora' />
            <Selectsimg bgImg={BoraBora2} text='Emarald Bay'/>
            <Selectsimg bgImg={Maldives} text='Maldives' />
            <Selectsimg bgImg={Maldives2} text='Grenada' />
            <Selectsimg bgImg={Maldives3} text='Barbados' />
            <Selectsimg bgImg={KeyWest} text='Key West' />
        </div>
    </div>
  )
}
