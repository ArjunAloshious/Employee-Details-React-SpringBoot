import React, { Component } from 'react'
import { Button, Row, Table } from 'reactstrap';
import EmployeeService from '../services/EmployeeService';

export default class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({
                employees: res.data
            });
            
        });

    }

    addEmployee()
    {
        this.props.history.push('/add-employee');
    }

    editEmployee(id)
    {
        this.props.history.push(`/update-employee/${id}`);
    }
    
    deleteEmployee(id)
    {
        EmployeeService.deleteEmployee(id).then( res=> {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    render() {
        return (
            <div>

                <h2 className="text-center" style={{padding:"1em"}}>Employees List</h2>
                <div style={{textAlign:'left'}}>
                    <Button color="primary" onClick={this.addEmployee}>Add Employee</Button>
                </div>
                <Row>
                    <Table striped bordered responsive hover>
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key = {employee.id}>
                                        <td> {employee.firstName} </td>
                                        <td> {employee.lastname} </td>
                                        <td> {employee.emailId} </td>
                                        <td>
                                            <Button onClick={ ()=> this.editEmployee(employee.id) } color="primary">Update</Button>
                                            <Button style={{marginLeft: "1em"}} onClick={ ()=> this.deleteEmployee(employee.id) } color="danger">Delete</Button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Row>

            </div>
        )
    }
}
