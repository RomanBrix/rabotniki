import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import Header from './Layers/Header';
import Main from './Main';
import About from './About';
import Contact from './Contact';
import Item from './Main/Item';
import Callback from './Layers/Callback';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cb: false
    }
  }
  render () {
    const { cb } = this.state ;
    return(
        <React.Fragment>
         <Header changeURL={this.changeURL.bind(this)} getData={this.getData.bind(this)} toggleCB={this.toggleCB.bind(this)} {...this.props}/>
         {
           cb ?
           <Callback getData={this.getData.bind(this)} toggleCB={this.toggleCB.bind(this)} {...this.props}/>
           :
           ''
         }


          <Switch>
            <Route path="/" exact>
              <Main changeURL={this.changeURL.bind(this)} getData={this.getData.bind(this)} {...this.props}/>
            </Route>

            <Route path="/categories/:id" exact render={pr => <Item changeURL={this.changeURL.bind(this)} {...pr}/>}/>

            <Route path="/about">
              <About {...this.props}/>
            </Route>

            <Route path="/contact">
              <Contact {...this.props} getData={this.getData.bind(this)}/>
            </Route>

            <Route>
              <div>No match</div>
            </Route>
          </Switch>
        </React.Fragment>

    )
  }

  getData(data){
    console.log(data);
  }

  toggleCB(st){
    this.setState({
      cb: st
    })
  }
  changeURL(to){
    const { history } = this.props;

    history.push(to);
  }
}

export default App;
