import React from "react";
export class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            user: props.user
        }
        this.HandleSubmit = this.HandleSubmit.bind(this);
        this.HandleDelete = this.HandleDelete.bind(this);
        
    }
    

    render(){
        return(
            <div className="container" style={{ padding: "0px 0px 20px 20px"}}>
                <h2 style={{color:"#E6E6E6"}}>Add Employees</h2>
                <form className="form-inline" id="f">
                    <div className="form-group">
        
                    <input type="text" className="form-control" pattern="[0-9]+" maxlength="5" placeholder="EmployeeId" name="empId" ref="empId" id = "employeeid" required />
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="First Name" pattern="[a-zA-Z]+" maxlength="20" title="Number and Special Character are not allowed" name="firstName" ref="firstName" id="name" required />
                    </div>
                    <div class="form-group">
                    <input type="text" className="form-control" placeholder="Last Name" pattern="[a-zA-Z]+" maxlength="20" title="Number and Special Character are not allowed" name="lastName" ref="lastName" id="name1" required />
                    </div>
                    <input type="button" className="btn btn-default" onClick={this.HandleSubmit} value="ADD" />
                    <input type="button" className="btn btn-default" onClick={this.HandleDelete} value="DELETE" />
                </form>
                <span style={{color: "red"}} className="not_error" id="check">Only Numeric characters is allowed.</span>
                <span style={{color: "yellow"}} className="not_error" id="check2">Numbers, Spaces and Special Char are not Allowed in Name.</span>
            </div>

        );
    }

    HandleDelete(e){
        
        if(typeof this.props.dl === 'function'){
            this.props.dl();
        }
        document.getElementById("f").reset();
    }

    HandleSubmit(e){
        console.log(this.refs.empId.value);
        console.log(this.refs.firstName.value);
        console.log(this.refs.lastName.value);
        var obj = {
            emp_id: this.refs.empId.value,
            first_name: this.refs.firstName.value,
            last_name: this.refs.lastName.value
        };
        console.log(typeof this.props.cb);
        if(typeof this.props.cb === 'function'){
            this.props.cb(obj);
        }
        document.getElementById("f").reset();
    }

}