import React,{Component} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from '../Components/Home/index';
import Check from '../Components/check';
import Work from '../Components/Work';
import Chat from '../Components/Chat';
import Eventos from '../Components/Eventos/Index';
import EditarUser from '../Components/User/Editar';

export class Routes extends Component {
  
  render() {
return(

      <Router history={Router}>
        <div >
          <Check/>
          <Route exact path="/" component={Home} />
          <Route path="/Works" component={Work}/>
          <Route path="/Chat" component={Chat}/>
          <Route path="/Eventos" component={Eventos}/>
          <Route path ="/User/edit" component={EditarUser}/>
          {/* <Route  path="/Sign_up" component={Register} />
          
          <Route  path="/Sign_in" component={Login} /> */}
        </div>
      </Router>
    )
  }
}

export default Routes
