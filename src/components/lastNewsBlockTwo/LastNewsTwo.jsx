import './LastNewsTwo.css'
import SportImgTwo from './../../img/SportImgTwo.png'
import SportImgThree from './../../img/SportImgThree.png'


function LastNewsTwo() {
    return (
        <div className='FatherBlockFaive'>
            <div className='SportBlockClass'>
                <div className='SportBlockWrap'>
                    <img className='NewsImg' src={SportImgTwo} />
                    <p className='LastNewsText'>09.07.19 |<span className='LastNewsTextTwo'>#любительский_спорт</span></p>
                    <p className='LastNewsTextThree'>Японцы лидируют в медальном зачете летней<br /> универсиады, белорусы – 25-е. Почему так?</p>
                    <p className='LastNewsTextFour'>И если для «горняков», которые неделей ранее разгромно уступили в<br /> Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск —<br /> формальность, то от «жёлто-синих»...</p>
                </div>

                <div className='FotballBlock SportBlockWrap' >
                    <p className='LastNewsText'>09.07.19 |<span className='LastNewsTextTwo'>#Профессиональный_спорт</span></p>
                    <p className='LastNewsTextThree'>Японцы лидируют в медальном зачете летней<br /> универсиады, белорусы – 25-е. Почему так?</p>
                    <p className='LastNewsTextFour'>И если для «горняков», которые неделей ранее разгромно уступили в<br /> Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск —<br /> формальность, то от «жёлто-синих»...</p>
                </div>
            </div>
        </div>
    )
}

export default LastNewsTwo;