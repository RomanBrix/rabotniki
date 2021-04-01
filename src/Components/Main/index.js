import React from 'react'
import { CATEGORIES } from '../Data';

class Main extends React.Component {
  render () {
      // console.log(this.props);
    return(
      <div className="main">
        <div className="content-box">

          <div className="intro">
            <div className="bg-img" style={{backgroundImage:`url(/src/main/main.jpg)`}}/>
            <div className="block">
            <h1>Сервис лучших мастеров</h1>
            <h2>Оставьте тяжелую работу нам!</h2>
            </div>
          </div>
          <div className="categories">
            {this.renderCategories(CATEGORIES)}
          </div>
        </div>
      </div>
    )
  }


  renderCategories(cat){
    const {changeURL} = this.props;
    return cat.map((item, index)=>{
      return (
        <div className="block" key={index} onClick={()=>{changeURL(`/categories/${index+1}`)}}>
          <div className="img"><img src={`./src/main/${index+1}.png`} alt={index+1}/></div>
          <div className="title">{item}</div>
        </div>
      )
    })
  }
}

export default Main;
