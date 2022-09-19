import './HeaderOne.css'
import Logo from './../../img/Logo.png'
import Menu from './../../img/Menu.png'
import { useEffect, useState } from 'react'

function HeaderOne() {
  const [InsideMenu, setInsideMenu] = useState(false)
  const [OpenMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    const screenwidth = window.screen.width
    if (screenwidth <= 768) {
      setInsideMenu(true)
    } else {
      setInsideMenu(false)
    }

  }, []
  )

  return (
    <div className='FatherClassOne'>
      <div className='NavigationBlock'>
        <img id='One' src={Logo} />
        <div className='InsideFatherBlock'>
          {!InsideMenu && <div className='SiteNavigation'>
            <a className='NavigationTextLink' href='#'><p className='SiteNavigationText'>Review</p></a>
            <a className='NavigationTextLink' href='#'><p className='SiteNavigationText'>Экстрим</p></a>
            <a className='NavigationTextLink' href='#'><p className='SiteNavigationText'>Легенды</p></a>
            <a className='NavigationTextLink' href='#'><p className='SiteNavigationText'>зож и туризм</p></a>
            <a className='NavigationTextLink' href='#'><p className='SiteNavigationText'>Позірк</p></a>
            <a className='NavigationTextLink' href='#'><p className='SiteNavigationText'>Позірк</p></a>
          </div>}
          <div className='InsideMenu'>
            <img src={Menu} onClick={() => { setOpenMenu(!OpenMenu) }} />
            {OpenMenu && <div className='CloneBlock'>
              <a className='NavigationTextLink' href='#'><p className='SiteNavigationText'>Review</p></a>
              <a className='NavigationTextLink' href='#'><p className='SiteNavigationText'>Экстрим</p></a>
              <a className='NavigationTextLink' href='#'><p className='SiteNavigationText'>Легенды</p></a>
              <a className='NavigationTextLink' href='#'><p className='SiteNavigationText'>зож и туризм</p></a>
              <a className='NavigationTextLink' href='#'><p className='SiteNavigationText'>Позірк</p></a>
              <a className='NavigationTextLink' href='#'><p className='SiteNavigationText'>Позірк</p></a>
            </div>}
          </div>
        </div>
      </div>
      <div className='DayNews'>
        <p className='ExtrimClass'>#Экстрим</p>
        <p className='DayNewsText'>Юрий Поклад: «Динамо» <br />как бы начинает работать заново</p>
      </div>
    </div>
  )
}

export default HeaderOne;