import React, { Component } from 'react';

class InsertEmployee extends Component {
    render() {
        return (
            <div className='center'>
                <div className='card' style={{padding : 20, width : 640, alignItems: 'center'}}>
                    <h2>Add Employee</h2>
                    <form>
                        
                        <div className="form-group" style={{paddingBottom : 10, paddingTop: 10}}>
                            <label for="formGroupExampleInput">First Name:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="first name" style={{width : 600}}/>
                        </div>
                        <div className="form-group" style={{paddingBottom : 10}}>
                            <label for="formGroupExampleInput2">Last Name:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="last name" style={{width : 600}}/>
                        </div>
                        <div className="form-group" style={{paddingBottom : 10}}>
                            <label for="formGroupExampleInput2">E-mail:</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="e-mail" style={{width : 600}}/>
                        </div>
                        <div className='btn-toolbar'>
                            <div style={{paddingLeft : 210}}>
                                <button type="submit" className="btn btn-success">Save</button>
                            </div>
                            <div style={{paddingLeft : 20}}>
                                <button type="submit" className="btn btn-danger">Cancel</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default InsertEmployee;