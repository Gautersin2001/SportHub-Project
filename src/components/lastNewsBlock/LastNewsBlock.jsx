import './LastNewsBlock.css'
import SportImgOne from './../../img/SportImgOne.png'
import SportImgTwo from './../../img/SportImgTwo.png'

function LastNewsBlock() {
  return (
    <div className="FatherBlockThree">
      <p className='LastClass'>Последнее</p>
      <div className='SportBlockClass'>
        <div className='SportBlockWrap'>
          <img className='NewsImg' src={SportImgOne} />
          <p className='LastNewsText'>Сегодня |<span className='LastNewsTextTwo'>#болельщикам</span></p>
          <p className='LastNewsTextThree'>Японцы лидируют в медальном зачете летней<br /> универсиады, белорусы – 25-е. Почему так?</p>
          <p className='LastNewsTextFour'>И если для «горняков», которые неделей ранее разгромно уступили в<br /> Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск —<br /> формальность, то от «жёлто-синих»...</p>
        </div>

        <div className='SportBlockWrap'>
          <img className='NewsImg' src={SportImgTwo} />
          <p className='LastNewsText'>09.07.19 |<span className='LastNewsTextTwo'>#любительский_спорт</span></p>
          <p className='LastNewsTextThree'>Японцы лидируют в медальном зачете летней<br /> универсиады, белорусы – 25-е. Почему так?</p>
          <p className='LastNewsTextFour'>И если для «горняков», которые неделей ранее разгромно уступили в<br /> Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск —<br /> формальность, то от «жёлто-синих»...</p>
        </div>
      </div>

      <div className='SportBlockClass'>
        <div className='FotballBlock SportBlockWrap' >
          <p className='LastNewsText'>09.07.19 |<span className='LastNewsTextTwo'>#Профессиональный_спорт</span></p>
          <p className='LastNewsTextThree'>Японцы лидируют в медальном зачете летней<br /> универсиады, белорусы – 25-е. Почему так?</p>
          <p className='LastNewsTextFour'>И если для «горняков», которые неделей ранее разгромно уступили в<br /> Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск —<br /> формальность, то от «жёлто-синих»...</p>
        </div>

        <div className='SportBlockWrap'>
          <img className='NewsImg' src={SportImgOne} />
          <p className='LastNewsText'>Сегодня |<span className='LastNewsTextTwo'>#болельщикам</span></p>
          <p className='LastNewsTextThree'>Японцы лидируют в медальном зачете летней<br /> универсиады, белорусы – 25-е. Почему так?</p>
          <p className='LastNewsTextFour'>И если для «горняков», которые неделей ранее разгромно уступили в<br /> Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск —<br /> формальность, то от «жёлто-синих»...</p>
        </div>
      </div>
    </div>
  )
}

export default LastNewsBlock;