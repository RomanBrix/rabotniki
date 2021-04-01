import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Layers/Header';
import Main from './Main';
import About from './About';
import Contact from './Contact';

class App extends React.Component {
  render () {
// console.log(this.props)
    return(
        <React.Fragment>
         <Header changeURL={this.changeURL.bind(this)} {...this.props}/>

          <Switch>
            <Route path="/" exact>
              <Main {...this.props}/>
            </Route>



            <Route path="/about">
              <About {...this.props}/>
            </Route>

            <Route path="/contact">
              <Contact {...this.props}/>
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
