import { Container, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { EMPLOYEES } from "../../utils/fakeData/fakeData";

const Employee = () => {
    const EMPLOYEE_LIST_COLUMNS = [
        { field: "name", headerName: "Name", width: 200 },
        {
            field: "code",
            headerName: "Code",
            width: 200
        },
        {
            field: "department",
            headerName: "Department",
            width: 200
        },
        {
            field: "position",
            headerName: "Position",
            width: 350
        },
        {
            field: "joiningDate",
            headerName: "Joining Date",
            width: 160
        }
    ];

    return (
        <Container sx={{ marginTop: "150px" }}>
            <Typography
                variant="h6"
                color="#1976d2"
                sx={{ textTransform: "uppercase", textAlign: "center", fontWeight: "bold" }}
            >
                Employees
            </Typography>
            <DataGrid
                autoHeight
                rows={EMPLOYEES}
                columns={EMPLOYEE_LIST_COLUMNS}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5
                        }
                    }
                }}
                pageSizeOptions={[5, 10, 25, 50, 100]}
                disableRowSelectionOnClick
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        printOptions: { disableToolbarButton: true },
                        csvOptions: { disableToolbarButton: true }
                    }
                }}
            />
        </Container>
    );
};

export default Employee;
