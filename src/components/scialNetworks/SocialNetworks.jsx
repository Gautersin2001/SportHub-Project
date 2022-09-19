import './SocialNetworks.css'
import Vk from './../../img/Vk.png'
import FaceBook from './../../img/FaceBook.png'
import Instagram from './../../img/Instagram.png'
import YouTube from './../../img/YouTube.png'
import Telegram from './../../img/Telegram.png'
import TikTok from './../../img/TikTok.png'
import Twitter from './../../img/Twitter.png'

function SocialNetworks() {
    return (
        <div className='FatherBlockSeven'>
            <div className='ImgBlock'>
                <p>Соцсети</p>
                <div className='IconsBlock'>
                    <img alt='Vk' src={Vk} />
                    <img alt='FaceBook' src={FaceBook} />
                    <img alt='Instagram' src={Instagram} />
                    <img alt='FYouTube' src={YouTube} />
                    <img alt='Telegram' src={Telegram} />
                    <img alt='TikTok' src={TikTok} />
                    <img alt='Twitter' src={Twitter} />
                </div>

            </div>

            <div className='InputBlock'>
                <p>Подписка</p>
                <div className='FollowBlock'>
                    <input className='InputClass' type="email" placeholder='Введите ваш email' />
                    <button className='InputButton'>Подписаться</button>
                </div>
            </div>
        </div>
    )
}

export default SocialNetworks;