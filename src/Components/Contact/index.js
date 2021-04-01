import React from 'react'


class Contact extends React.Component {
  render () {
    return(
      <div className="contact">
        <div className="content-box">
          <div className="title">
            <h1>Контакты</h1>
            <p>Вы можете связаться с нами по форме или контактам ниже</p>
          </div>
          <div className="left">
            <ul>
              <li>
                <a href="https://goo.gl/maps/edeGhTy74E4ziSrP7">
                  <i className='icon-folder-empty'/>
                  13B, Akademika Glushkov ave., Київ, 03187
                </a>

              </li>
              <li>
                <a href="tel:380672705753">
                  <i className='icon-phone'/>
                  067 270 57 53
                </a>
              </li>
              <li>
                <a href="tel:380933715184">
                  <i className='icon-phone'/>
                  093 371 51 84
                </a>
              </li>
              <li>
                <a href="tel:380957331490">
                  <i className='icon-phone'/>
                  095 733 14 90
                </a>
              </li>
              <li>
                <a href="tg://resolve?domain=diamantikc">
                  <i className='icon-folder-empty'/>
                  Telegram
                </a>
              </li>
              <li>
                <a href="mailto:grabuds@ukr.net">
                  <i className='icon-folder-empty'/>
                  grabuds@ukr.net
                </a>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="form">
              <input type="text" placeholder='Имя' id='name'/>
              <input type="number" placeholder='Телефон' id='Телефон'/>
              <textarea name="msg" id="msg" placeholder='Ваше сообщение'/>
              <div className="btn btn-send">Отправить</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
