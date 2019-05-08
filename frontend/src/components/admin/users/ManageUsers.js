import React from 'react';
import TitleSection from "../../titlesec/TitleSection";
import {AgGridReact} from 'ag-grid-react';
import './ManageUsers.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import * as config from './UsersHeaderConfig';
import {Row, Col, Button} from "reactstrap";
import Input from "reactstrap/es/Input";
import FormGroup from "reactstrap/es/FormGroup";
import Form from "reactstrap/es/Form";

export default class ManageUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: config.manageUserHeaders,
            rowData: [
                {make: "Toyota 2", model: "Celica", price: 35000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Porsche", model: "Boxter", price: 72000}
            ]
        }
    }

    onGridReady(event) {
        console.log(event)
    }

    gridOptions() {
        return {
            columnDefs: this.state.columnDefs,
            rowData: this.state.rowData,
            rowSelection: 'multiple',
            suppressRowClickSelection: true,
            rowSelected: (e) => console.log(e)
        }
    }

    buttonClicked(event) {
        alert('Hello ' + event);
    }

    render() {
        return (
            <div className={'admin-manageusers'}>
                <Row>
                    <Col>
                        <div className={'search'}>
                            <Form className={'inline'}>
                                <Row>
                                    <Col>
                                        <Input
                                            id='firstName'
                                            placeholder={'First Name'}
                                            type={'text'}/>
                                    </Col>
                                    <Col>
                                        <Input
                                            id='firstName'
                                            placeholder={'Last Name'}
                                            type={'text'}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input
                                            id='firstName'
                                            placeholder={'Email'}
                                            type={'text'}/>
                                    </Col>
                                    <Col>
                                        <Input
                                            id='firstName'
                                            placeholder={'Phone'}
                                            type={'text'}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Input
                                            id='firstName'
                                            placeholder={'Post Code'}
                                            type={'text'}/>
                                    </Col>
                                    <Col>
                                        <Button color={'primary'} onClick={this.buttonClicked}>Search</Button>
                                        <Button outline onClick={this.buttonClicked}>Clear</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="ag-theme-balham admin-manageusers-users-grid">
                            <AgGridReact
                                ref="agGrid"
                                gridOptions={this.gridOptions()}
                                onGridReady={this.onGridReady.bind(this)}>
                            </AgGridReact>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>&nbsp;</Col>
                    <Col md={2}>
                        <div className={'search'}>
                            <Button outline color={'primary'}
                                    className={'btn-md btn-block'}
                                    onClick={() => console.log(this.refs.agGrid.api.getSelectedNodes())}>
                                Save
                            </Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className={'search'}>
                            <Button outline color={'success'}
                                    className={'btn-md btn-block'}
                                    onClick={() => console.log(this.refs.agGrid.api.getSelectedNodes())}>
                                Activate
                            </Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className={'search'}>
                            <Button outline color={'danger'}
                                    className={'btn-md btn-block'}
                                    onClick={() => console.log(this.refs.agGrid.api.getSelectedNodes())}>
                                Block
                            </Button>
                        </div>
                    </Col>
                    <Col md={1}>&nbsp;</Col>
                </Row>
            </div>
        );
    }
}