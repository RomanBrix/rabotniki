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
              <li>
                <a href="https://goo.gl/maps/p2bFdqmGY1Vj5ApU8" target="_blank" onClick={()=>{getData({name: 'Кто-то смотрит местоположения '})}}>
                  <i className='icon-location'/>
                  Декабристов 87а, Васильков Киевс'кая область, 08602
                </a>

              </li>
              <li >
                <a href="tel:380672705753" onClick={()=>{getData({name: 'Звонят по номеру: 380 67 270 57 53'})}}>
                  <i className='icon-phone'/>
                  067 270 57 53
                </a>
              </li>
              <li >
                <a href="tel:380933715184" onClick={()=>{getData({name: 'Звонят по номеру: 380 93 371 51 84'})}}>
                  <i className='icon-phone'/>
                  093 371 51 84
                </a>
              </li>
              <li >
                <a href="tel:380957331490" onClick={()=>{getData({name: 'Звонят по номеру: 380 95 733 14 90'})}}>
                  <i className='icon-phone'/>
                  095 733 14 90
                </a>
              </li>
              <li >
                <a href="tg://resolve?domain=grand_bud" onClick={()=>{getData({name: 'Кто-то смотрит телеграм'})}}>
                  <i className='icon-paper-plane-empty'/>
                  Telegram
                </a>
              </li>
              <li >
                <a href="mailto:grabuds@ukr.net" onClick={()=>{getData({name: 'Кто-то нажал на почту!'})}}>
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
                    ad_info:{
                      msg
                    }
                  })
                  alert('Спасибо, ожидайте связи!');
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
