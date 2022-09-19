import './HeaderTwo.css'

function HeaderTwo() {
    return (
        <div className='FatherBlockTwo'>
            <div className='SportNavigation'>
                <a className='SportNavigationLink' href='#'><p className='SportNavigationText'>Футбол </p></a>
                <a className='SportNavigationLink' href='#'><p className='SportNavigationText'>Хоккей </p></a>
                <a className='SportNavigationLink' href='#'><p className='SportNavigationText'>Биатлон</p></a>
                <a className='SportNavigationLink' href='#'><p className='SportNavigationText'>Теннис</p></a>
                <a className='SportNavigationLink' href='#'><p className='SportNavigationText'>Гандбол</p></a>
                <a className='SportNavigationLink' href='#'><p className='SportNavigationText'>Баскетбол</p></a>
                <a className='SportNavigationLink' href='#'><p className='SportNavigationText'>Бокс </p></a>
                <a className='SportNavigationLink' href='#'><p className='SportNavigationText'>Легкая атлетика </p></a>
                <a className='SportNavigationLink' href='#'><p className='SportNavigationText'>Другое</p></a>
            </div>
        </div>
    )
}

export default HeaderTwo;