import './ExtrimBlock.css'
import imgOne from './../../img/imgOne.png'
import imageTwo from './../../img/imageTwo.png'
import imageThree from './../../img/imageThree.png'
import imgFour from './../../img/imgFour.png'
import { useEffect, useState } from 'react'





function ExtrimBlock() {
     const images = [imgOne,imageTwo,imageThree,imgFour]
     const [Extrim,setExtrim] = useState(0)

     useEffect(() => {
        const id = setInterval(
            () => {setExtrim((Extrim + 1) % images.length)},
            5000
        )
        return () => {
           clearInterval(id)
        }
     },[Extrim]
     )
     const Back = {
        backgroundImage: `url(${images[Extrim]})`
     }
    return (
        <div className='FatherBlockEight' style={Back}>
            <div className='Interview'>
                <p className='InterviewExtrim'>Экстрим</p>
                <p className='InterviewWith'>Интервью с Юрием Покладом.<br />Полный список всех медалей Беларуси на <br /> Европейских играх.
                </p>
            </div>

        </div>
    )
}

export default ExtrimBlock;