import { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateEmployee = () => {
  
  const {id} = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await EmployeeService.getEmployeeById(id);
        const employee = res.data;
        setFirstName(employee.firstName);
        setLastName(employee.lastName);
        setEmailId(employee.emailId);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEmployee();
  }, [id]);

  const changeFirstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const changeEmailIdHandler = (e) => {
    setEmailId(e.target.value);
  };

  const updateEmployee = (e) => {
    e.preventDefault();
    const employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };

    console.log('employee => ' + JSON.stringify(employee));

    EmployeeService.updateEmployee(id, employee).then(res => {
        navigate('/employees');
    });

  };

  return (
    <div className='center'>
      <div className='card' style={{ padding: 20, width: 640, alignItems: 'center' }}>
        <h2>Update Employee</h2>
        <form>
          <div className='form-group' style={{ paddingBottom: 10, paddingTop: 10 }}>
            <label htmlFor='formGroupExampleInput'>First Name:</label>
            <input
              type='text'
              className='form-control'
              name='firstName'
              placeholder='first name'
              style={{ width: 600 }}
              value={firstName}
              onChange={changeFirstNameHandler}
            />
          </div>
          <div className='form-group' style={{ paddingBottom: 10 }}>
            <label htmlFor='formGroupExampleInput2'>Last Name:</label>
            <input
              type='text'
              className='form-control'
              name='lastName'
              placeholder='last name'
              style={{ width: 600 }}
              value={lastName}
              onChange={changeLastNameHandler}
            />
          </div>
          <div className='form-group' style={{ paddingBottom: 20 }}>
            <label htmlFor='formGroupExampleInput2'>E-mail:</label>
            <input
              type='text'
              className='form-control'
              name='emailId'
              placeholder='e-mail'
              style={{ width: 600 }}
              value={emailId}
              onChange={changeEmailIdHandler}
            />
          </div>
          <div className='btn-toolbar'>
            <div style={{ paddingLeft: 210 }}>
              <button
                type='submit'
                className='btn btn-success'
                style={{ width: 80 }}
                onClick={updateEmployee}
              >
                Update
              </button>
            </div>
            <div style={{ paddingLeft: 20 }}>
              <button type='submit' className='btn btn-danger' style={{ width: 80 }}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;
