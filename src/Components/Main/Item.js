import React, { Component } from 'react';
import { WORK } from '../Data';

      class Item extends Component {

        render() {

          const ID = +this.props.match.params.id;

          if(ID < 1 || ID > WORK.length){
            // ERROR CATCH ADD BTN BACK
            return(
              <h1>NO MATCH!</h1>
            )
          }
          return (
            <div className='item'>
              <div className="content-box">
              <div className="btn btn-back" onClick={()=>{
                this.props.changeURL('/');
              }}>
                <i className='icon-left-outline'/>Вернуться назад
              </div>
                <h1>{WORK[ID - 1].title}</h1>
                <table id="prices">
                  <thead>
                    <tr>
                      <th>Название услуги</th>
                      <th>Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    { this.renderTableWorks(WORK[ID - 1].works, WORK[ID - 1].pr)}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }



      renderTableWorks(work, tag ){
            return work.map((item, index)=>{
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td><b>{item.price}</b> { this.renderTag(tag)}</td>
               </tr>
              )
            })
      }


      renderTag(tag){
        switch (tag) {
          case 'm2':
            return <span>грн/м<sup className="quad">2</sup></span>
          default:
          return <span>грн/м<sup className="quad">2</sup></span>

        }
      }
    }

      export default  Item;
