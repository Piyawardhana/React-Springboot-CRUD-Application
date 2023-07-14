import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link, useParams, useNavigate } from 'react-router-dom';

const MyComponentWrapper = () => {
    const navigate = useNavigate();
  
    return <ListEmployeeComponent navigate={navigate} />;
  };

class ListEmployeeComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            employees: []
        }
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }

    editEmployee(id){
        this.props.navigate(`/update-employee/${id}`);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res => {
            this.props.navigate('/employees');
            window.location.reload(false);
        });
    }

    render() {
        return (
            <div className="container">
                
                <br></br>
                <Link to='/add-employee' className="btn btn-primary" style={{width: 140}}>Add Employee</Link>
                <h2 className='text-center' style={{paddingBottom: 20}}>Employees List</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key = {employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td style={{textAlign: 'center'}}>
                                            <button onClick={()=> this.editEmployee(employee.id)} className='btn btn-info'><i class="fa fa-edit"></i></button>
                                            <button style={{marginLeft:10}} onClick={()=> this.deleteEmployee(employee.id)} className='btn btn-danger'><i class="fa fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>

            </div>
        );
    }
}

export default MyComponentWrapper;