import React from 'react';
import TitleSection from "../../titlesec/TitleSection";
import {AgGridReact} from 'ag-grid-react';
import './ManageUsers.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import * as config from './UsersHeaderConfig';

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

    gridOptions() {
        return {
            columnDefs: this.state.columnDefs,
            rowData: this.state.rowData,
            rowSelection: 'multiple',
            suppressRowClickSelection: true
        }
    }

    render() {
        return (
            <div className={'admin-manageusers'}>
                <TitleSection title={'MANAGE MEMBERS'}/>
                <div className="ag-theme-balham admin-manageusers-users-grid"
                     style={{
                         height: '500px',
                         width: '1252px'
                     }}>
                    <AgGridReact
                        gridOptions={this.gridOptions()}>
                    </AgGridReact>
                </div>
            </div>
        );
    }
}