import './Selectsimg.css'

export default function Selectsimg({bgImg, text}) {
  return (
    <div className='selects-location'>
        <img src={bgImg} alt="" />
        <div className="overlay">
            <p>{text}</p>
        </div>
    </div>
  )
}
