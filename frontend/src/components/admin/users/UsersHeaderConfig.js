export const manageUserHeaders = [
    {
        headerName: "",
        field: "id",
        width: 50,
        headerClass: 'admin-manageusers-users-grid-header admin-manageusers-users-grid-select',
        cellClass: 'admin-manageusers-users-grid-value',
        checkboxSelection: true,
        onChange: (e) => console.log('Selected ', e)
    },
    {
        headerName: "First Name",
        field: "make",
        headerClass: 'admin-manageusers-users-grid-header',
        cellClass: 'admin-manageusers-users-grid-value',
        sortable: true,
        filter: true
    }, {
        headerName: "Last Name",
        headerClass: 'admin-manageusers-users-grid-header',
        cellClass: 'admin-manageusers-users-grid-value',
        field: "model",
        sortable: true,
        filter: true
    }, {
        headerName: "Email",
        headerClass: 'admin-manageusers-users-grid-header',
        cellClass: 'admin-manageusers-users-grid-value',
        field: "price",
        editable: true,
        sortable: true,
        filter: true
    }, {
        headerName: "Phone",
        headerClass: 'admin-manageusers-users-grid-header',
        cellClass: 'admin-manageusers-users-grid-value',
        field: "price",
        sortable: true,
        filter: true
    }, {
        headerName: "City",
        headerClass: 'admin-manageusers-users-grid-header',
        cellClass: 'admin-manageusers-users-grid-value',
        field: "price",
        sortable: true,
        filter: true
    }, {
        headerName: "Post Code",
        headerClass: 'admin-manageusers-users-grid-header',
        cellClass: 'admin-manageusers-users-grid-value',
        field: "price",
        sortable: true,
        filter: true
    }, {
        headerName: "Address 1",
        headerClass: 'admin-manageusers-users-grid-header',
        cellClass: 'admin-manageusers-users-grid-value',
        field: "price",
        sortable: true,
        filter: true
    }, {
        headerName: "Address 2",
        headerClass: 'admin-manageusers-users-grid-header',
        cellClass: 'admin-manageusers-users-grid-value',
        field: "price",
        sortable: true,
        filter: true
    }
];