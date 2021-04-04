import React from 'react'


class Contact extends React.Component {

  render () {
    const { getData } = this.props;
    return(
      <div className="contact">
        <div className="content-box">
          <div className="title">
            <h1>Контакты</h1>
            <p>Вы можете связаться с нами по форме или контактам ниже</p>
          </div>
          <div className="left">
            <ul>
              <li onClick={()=>{getData('Кто-то смотрит местоположения ')}}>
                <a href="https://goo.gl/maps/edeGhTy74E4ziSrP7">
                  <i className='icon-location'/>
                  13B, Akademika Glushkov ave., Київ, 03187
                </a>

              </li>
              <li onClick={()=>{getData('Звонят по номеру: 380 67 270 57 53')}}>
                <a href="tel:380672705753">
                  <i className='icon-phone'/>
                  067 270 57 53
                </a>
              </li>
              <li onClick={()=>{getData('Звонят по номеру: 380 93 371 51 84')}}>
                <a href="tel:380933715184" >
                  <i className='icon-phone'/>
                  093 371 51 84
                </a>
              </li>
              <li onClick={()=>{getData('Звонят по номеру: 380 95 733 14 90')}}>
                <a href="tel:380957331490">
                  <i className='icon-phone'/>
                  095 733 14 90
                </a>
              </li>
              <li onClick={()=>{getData('Кто-то смотрит телеграм')}}>
                <a href="tg://resolve?domain=diamantikc">
                  <i className='icon-paper-plane-empty'/>
                  Telegram
                </a>
              </li>
              <li onClick={()=>{getData('Кто-то нажал на почту!')}}>
                <a href="mailto:grabuds@ukr.net">
                  <i className='icon-mail'/>
                  grabuds@ukr.net
                </a>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="form">
              <input type="text" placeholder='Имя' id='name'/>
              <input type="number" placeholder='Телефон' id='teleph'/>
              <textarea name="msg" id="msg" placeholder='Ваше сообщение'/>
              <div className="btn btn-send" onClick={()=>{
                const name = document.getElementById('name').value;
                const tel = document.getElementById('teleph').value;
                const msg = document.getElementById('msg').value;
                if(name.length > 2 && tel.length > 7 && msg.length > 1){
                  getData({
                    name,
                    tel,
                    msg
                  })
                }else{
                  alert('Не все поля заполнены');
                }
              }}>Отправить</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
