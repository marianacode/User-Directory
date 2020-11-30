const Columns = () =>{

    return [
        {
            Header: "Name",
            columns: [
                {
                    Header: "First Name",
                    accessor: "name.first",
                },
                {
                    Header: "Last Name",
                    accessor: "name.last",
                },
            ],
        },
        {
            Header: "Info",
            columns: [
                {
                    Header: "Email",
                    accessor: "email",
                },
                {
                    Header: "Username",
                    accessor: "login.username",
                },
            ],
        },
    ];
    
} 
export default Columns