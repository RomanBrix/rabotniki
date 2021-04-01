import React from 'react'


class Header extends React.Component {
  render () {
    // console.log(this.props);
    const {changeURL} = this.props;
    const path = this.props.location.pathname;
    console.log(path);

    return(
      <div className="header">
        <div className="content-box">
        <div className="top">
          <div className="logo" onClick={()=>{changeURL('/')}}><img src="/src/logo.jpg" alt=""/></div>

          <div className="contacts-header">
            <ul>
              <li>
                <a href="tel:380672705753"><i className='icon-phone'/> 067 270 57 53</a>
              </li>
              <li>
                <a href="tel:380933715184"><i className='icon-phone'/> 093 371 51 84</a>
              </li>
              <li>
                <a href="tel:380957331490"><i className='icon-phone'/> 095 733 14 90</a>
              </li>
            </ul>

          </div>

          <div className="btn btn-call">Заказать звонок</div>
        </div>
          <div className="bottom">
            <ul id='menu'>
              <li className={path === '/' ? 'active-menu-item' : ''} onClick={()=>{changeURL('/')}}> <i className='icon-star-filled'/>Главная</li>
              <li className={path === '/about' ? 'active-menu-item' : ''} onClick={()=>{changeURL('/about')}}> <i className='icon-info-circled-2'/>О Нас</li>
              <li className={path === '/contact' ? 'active-menu-item' : ''} onClick={()=>{changeURL('/contact')}}> <i className='icon-chat-inv'/>Контакты</li>

            </ul>
          </div>
        </div>

      </div>
    )

  }
}

export default Header;
