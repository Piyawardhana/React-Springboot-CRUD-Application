import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const MyComponentWrapper = () => {
    const navigate = useNavigate();
  
    return <InsertEmployee navigate={navigate} />;
  };

class InsertEmployee extends Component {

    constructor(props){
        super(props)

        this.state = {
                firstName: '',
                lastName: '',
                emailId: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    }

    changeFirstNameHandler = (e) =>{
        this.setState({firstName: e.target.value});
    }

    changeLastNameHandler = (e) =>{
        this.setState({lastName: e.target.value});
    }

    changeEmailIdHandler = (e) =>{
        this.setState({emailId: e.target.value});
    }

    saveEmployee = (e) =>{
        e.preventDefault();
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
        };

        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.addEmployee(employee).then(res => {
            this.props.navigate('/employees');
        });
    }
    
    render() {
        return (
            <div className='center'>
                <div className='card' style={{padding : 20, width : 640, alignItems: 'center'}}>
                    <h2>Add Employee</h2>
                    <form>
                        
                        <div className="form-group" style={{paddingBottom : 10, paddingTop: 10}}>
                            <label for="formGroupExampleInput">First Name:</label>
                            <input type="text" className="form-control" name='firstName' placeholder="first name" style={{width : 600}} value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                        </div>
                        <div className="form-group" style={{paddingBottom : 10}}>
                            <label for="formGroupExampleInput2">Last Name:</label>
                            <input type="text" className="form-control" name='lastName' placeholder="last name" style={{width : 600}} value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                        </div>
                        <div className="form-group" style={{paddingBottom : 20}}>
                            <label for="formGroupExampleInput2">E-mail:</label>
                            <input type="text" className="form-control" name='emailId' placeholder="e-mail" style={{width : 600}} value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                        </div>
                        <div className='btn-toolbar'>
                            <div style={{paddingLeft : 210}}>
                                <button type="submit" className="btn btn-success" style={{width: 80}} onClick={this.saveEmployee.bind(this)}>Save</button>
                            </div>
                            <div style={{paddingLeft : 20}}>
                                <button type="submit" className="btn btn-danger" style={{width: 80}}>Cancel</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default MyComponentWrapper;