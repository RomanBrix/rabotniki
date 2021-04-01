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

class App extends React.Component {
  render () {
// console.log(this.props)
    return(
        <React.Fragment>
         <Header changeURL={this.changeURL.bind(this)} {...this.props}/>

          <Switch>
            <Route path="/" exact>
              <Main changeURL={this.changeURL.bind(this)} {...this.props}/>
            </Route>

            <Route path="/categories/:id" exact render={pr => <Item changeURL={this.changeURL.bind(this)} {...pr}/>}/>

            <Route path="/about">
              <About {...this.props}/>
            </Route>

            <Route path="/contact">
              <Contact {...this.props}/>
            </Route>

            <Route>
              <div>No match</div>
            </Route>
          </Switch>
        </React.Fragment>

    )
  }


  changeURL(to){
    const { history } = this.props;

    history.push(to);
  }
}

export default App;
