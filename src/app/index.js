import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
 
const defaultProps = [
  {
        "emp_id": "1",
        "first_name": "Amit",
        "last_name": "Jain"
  },
  {
        "emp_id": "2",
        "first_name": "Rajesh",
        "last_name": "Gupta"
  }
];
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user : defaultProps
    }
    this.cbHeader = this.cbHeader.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  cbHeader(obj){
    let user = this.state.user;
    user.push(obj);
    this.setState({
      user: user
  });
  }

  deleteEmployee(){
    let user = this.state.user;
    user.pop();
    this.setState({
      user: user
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header cb={this.cbHeader} dl={this.deleteEmployee} />
          </div>
        </div>
          <Home user = {this.state.user}/>
      </div>
    )
  }
}
render(<App/>, window.document.getElementById("app"));
