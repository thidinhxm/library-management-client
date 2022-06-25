import classes from './DataTable.module.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataTableSource';
import { Link } from 'react-router-dom';

const DataTable = ({type}) => {
  const actionColumn = [
    { 
      field: 'action', 
      headerName: 'Action', 
      width: 200, 
      renderCell: () => {
        return (
          <div className={classes.cellAction}>
            <Link to={`/${type}s/1`} style={{textDecoration: 'none'}}>
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
        Add new 
        {
          type === 'reader' ? ' Reader' : 
          type === 'librarian' ? ' Librarian' : 
          type === 'borrowCard' ? ' Borrow Card' :
          type === 'returnCard' ? ' Return Card' :
          ' Book'
        }
        <Link to={`/${type}s/new`} className={classes.link}>
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