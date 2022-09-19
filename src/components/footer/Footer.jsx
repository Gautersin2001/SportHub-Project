import './Footer.css'

import vkTwo from './../../img/vkTwo.png'
import facebookTwo from './../../img/facebookTwo.png'
import instagramTwo from './../../img/instagramTwo.png'
import youtubeTwo from './../../img/youtubeTwo.png'
import telegramTwo from './../../img/telegramTwo.png'
import tiktokTwo from './../../img/tiktokTwo.png'
import twitterTwo from './../../img/twitterTwo.png'
import Pars from './../../img/Pars.png'
import logoTwo from './../../img/logoTwo.png'




function Footer() {
    return (
        <div className='FatherBlockNine'>
            <div className='FooterBlock'>
                <div className='FooterNavigation'>
                    <a href='One'><img src={logoTwo} /></a>
                    <p className='AboutProject'>О проекте </p>
                    <p className='CommunicationClass'>Обратная связь</p>
                    <div className='PromotionClass'>
                        <p className='CompanyPromotion'>Реклама:</p>
                        <a className='PromotionLink' href='#'><p className='GmailRootClass'>ads@sporthub.news</p></a>
                    </div>

                </div>

                <div className='IconsClass'>
                    <div className='IconsClassWrap'>
                        <a className='IconLinkClass' href='https://vk.com/'><img alt='VK' src={vkTwo} /></a>
                        <a className='IconLinkClass' href='https://www.facebook.com/'><img alt='FaceBook' src={facebookTwo} /></a>
                        <a className='IconLinkClass' href='https://www.instagram.com/'><img alt='Instagram' src={instagramTwo} /></a>
                        <a className='IconLinkClass' href='https://www.youtube.com/'><img alt='YouTube' src={youtubeTwo} /></a>
                        <a className='IconLinkClass' href='https://web.telegram.org/k//'><img alt='Telegtam' src={telegramTwo} /></a>
                        <a className='IconLinkClass' href='https://www.tiktok.com/'><img alt='TicTok' src={tiktokTwo} /></a>
                        <a className='IconLinkClass' href='https://twitter.com/'><img alt='Twitter' src={twitterTwo} /></a>
                    </div>

                </div>

                <div className='DevelopmentPromotion'>
                    <p className='SportHublastClass'>© 2022 «Спортхаб»</p>
                    <div className='DevelopmentPromotionWrap'>
                        <img src={Pars} />
                        <p className='DevelopmentCompany'>Разработка сайта — компания PRAS</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer;