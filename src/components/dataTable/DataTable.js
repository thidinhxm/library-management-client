import classes from './DataTable.module.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataTableSource';
import { Link } from 'react-router-dom';

const DataTable = () => {
  const actionColumn = [
    { 
      field: 'action', 
      headerName: 'Action', 
      width: 200, 
      renderCell: () => {
        return (
          <div className={classes.cellAction}>
            <Link to='/students/1' style={{textDecoration: 'none'}}>
              <div className={classes.viewButton}>View</div>
            </Link>

            <div className={classes.deleteButton}>Delete</div>
          </div>
        );
      }
    }
  ];

  return (
    <div className={classes.dataTable}>
      <div className={classes.dataTableTitle}>
        Add New User
        <Link to='/users/new' className={classes.link}>
          Add new
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable