import React,{Component} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from '../Components/Home/index';
import Check from '../Components/check';
import Work from '../Components/Work';

export class Routes extends Component {
  
  render() {
return(

      <Router>
        <div>
          <Check/>
          <Route exact path="/" component={Home} />
          <Route path="/Works" component={Work}/>
          {/* <Route  path="/Sign_up" component={Register} />
          <Route  path="/Sign_in" component={Login} /> */}
        </div>
      </Router>
    )
  }
}

export default Routes
