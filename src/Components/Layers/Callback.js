import React, { Component } from "react";

    class Callback extends Component {
      constructor(props){
        super(props);
        this.state = {
          num: ''
        }
      }
      render() {
        const { toggleCB, getData } = this.props;
        return (
          <div className='callback' onClick={()=>{toggleCB(false)}}>
            <div className="form" onClick={(e)=>{e.stopPropagation()}}>
              <h2>Оставьте свой номер</h2>
              <p>Мы перезвоним Вам максимально быстро!</p>
              <label htmlFor="tel">Номер телефона:</label>
              <input type="number" value={this.state.num} onChange={({target})=>{this.handleChange(target)}} placeholder='(000) 000 00 00' id='tel'/>
              <div className="btn btn-call" onClick={()=>{
                const { num } = this.state;
                if(num.length !== 10){
                  alert('Номер указан не верно')
                }else{
                  getData({
                    name: 'Просит позвонить!',
                    tel: num
                  });
                  toggleCB(false)
                }
              }}>Позвоните мне</div>
            </div>
          </div>
        );
      }
      handleChange(t){
        if(t.value.length < 11){
          this.setState({
            num: t.value
          })
        }

      }
    }

    export default Callback;
