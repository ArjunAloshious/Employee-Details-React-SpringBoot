import React, { Component } from 'react'
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import EmployeeService from '../services/EmployeeService';

export default class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastname: this.state.lastName, emailId: this.state.emailId};
        console.log('employee = '+JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push('/employees');
        });

    }

    changeHandler = (event)=>{
        this.setState({ [event.target.name]: event.target.value });
    }

    cancel()
    {
        this.props.history.push('/employees')
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Card>
                            <Col>
                                <h3>Add Employee</h3>
                                <CardBody>
                                    <Form>
                                        <FormGroup style={{padding:"1em"}}>
                                            <label>First Name:</label>
                                            <input name="firstName" className='form-control' value={this.state.firstName} onChange={this.changeHandler}></input>
                                        </FormGroup>
                                        <FormGroup style={{padding:"1em"}}>
                                            <label>Last Name:</label>
                                            <input name="lastName" className='form-control' value={this.state.lastName} onChange={this.changeHandler}></input>
                                        </FormGroup>
                                        <FormGroup style={{padding:"1em"}}>
                                            <label>Email ID:</label>
                                            <input name="emailId" className='form-control' value={this.state.emailId} onChange={this.changeHandler}></input>
                                        </FormGroup>
                                        <Button color="success" onClick={this.saveEmployee}>Save</Button>
                                        <Button color="danger"onClick={this.cancel.bind(this)}>Cancel</Button>
                                    </Form>
                                </CardBody>
                            </Col>
                        </Card>
                    </Row>
                </Container>
            </div>
        )
    }
}
