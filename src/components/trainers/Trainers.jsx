import './Trainers.css'
import TrainOne from './../../img/TrainOne.png'
import TrainTwo from './../../img/TrainTwo.png'
import TrainThree from './../../img/TrainThree.png'

function Trainers() {
    return (
        <div className='FatherBlockFour'>
            <div className='TrainWrap'>
                <div>
                    <a className='TrainLink' href='#'>
                        <img src={TrainOne} />
                        <p className='TrainName'>Алексей Михайличенко</p>
                        <p className='TrainStatus'>Главный тренер ф.к. Динамо</p>
                        <p className='TrainNews'>Сергей Корниленко станет<br /> играющим тренером «Крыльев<br /> советов»</p>
                    </a>
                </div>

                <div>
                    <a className='TrainLink' href='#'>
                        <img src={TrainTwo} />
                        <p className='TrainName'>Алексей Михайличенко</p>
                        <p className='TrainStatus'>Главный тренер ф.к. Динамо</p>
                        <p className='TrainNews'>«Динамо» как бы начинает<br /> работать заново</p>
                    </a>
                </div>

                <div>
                    <a className='TrainLink' href='#'>
                        <img src={TrainThree} />
                        <p className='TrainName'>Алексей Михайличенко</p>
                        <p className='TrainStatus'>Главный тренер ф.к. Динамо</p>
                        <p className='TrainNews'>Сергей Корниленко станет<br /> играющим тренером «Крыльев<br /> советов»</p>
                    </a>
                </div>

                <div>
                    <a className='TrainLink' href='#'>
                        <img src={TrainOne} />
                        <p className='TrainName'>Алексей Михайличенко</p>
                        <p className='TrainStatus'>Главный тренер ф.к. Динамо</p>
                        <p className='TrainNews'>«Динамо» как бы начинает<br /> работать заново</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Trainers;