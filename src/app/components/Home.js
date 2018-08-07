import React from "react";
import PropTypes from 'prop-types'; 
var i=0;
export class Home extends React.Component{

    constructor(props){
        super();
        this.state = {
            user: props.user,
            status: 0
        }
        
    }
    

    // componentWillReceiveProps(nextProps){
    //     this.setState({user: nextProps.user});
    // }
    
    render() {
         if(typeof this.state.user === 'undefined') return null;
         console.log('#####',this.state.user);
        return (
            <div>
                <table className="darkTable">
                    <thead>
                        <tr>
                            <th>EmpId</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.user.map((emp, i) =><tr key={i}> <td> {emp.emp_id}</td><td>{emp.first_name}</td><td>{emp.last_name}</td></tr>)}
                    </tbody>
                </table>
            </div>
        );
    }

    
}
