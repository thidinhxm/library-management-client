import classes from './DataTable.module.scss'
import { DataGrid } from '@mui/x-data-grid';
import { bookColumns, readerColumns, librarianColumns, borrowCardColumns, returnCardColumns } from './titleColumn';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBooks, getLibrarians, getReaders, getBorrowCards, getReturnCards} from '../../redux/api';

const DataTable = ({type}) => {
  const [dataList, setDataList] = useState([]);
  const columns = type === 'book' ? bookColumns 
    : type === 'reader' ? readerColumns 
    : type === 'librarian' ? librarianColumns 
    : type === 'borrowCard' ? borrowCardColumns 
    : returnCardColumns;
  useEffect(() => {
    (async () => {
      let response;
      if (type === 'book') {
        response = await getBooks();
      } else if (type === 'librarian') {
        response = await getLibrarians();
      }
      else if (type === 'reader') {
        response = await getReaders();
      }
      else if (type === 'borrowCard') {
        response = await getBorrowCards();
      }
      else if (type === 'returnCard') {
        response = await getReturnCards();
      }
      const data = response.data.map((item, index) => {
        if ('DOB' in item) {
          item.DOB = new Date(item.DOB).toLocaleDateString();
        }
        if ('role' in item) {
          item.role = (item.role === '1' ? 'Librarian Manager' : 'Librarian');
        }
        if ('expiredDate' in item) {
          item.expiredDate = new Date(item.expiredDate).toLocaleDateString();
        }
        if ('createDate' in item) {
          item.createDate = new Date(item.createDate).toLocaleDateString();
        }
        console.log(item)
        return {
          ...item,
          id: index + 1,
        }
      });

      setDataList(data);
    })();
  }, [type]);


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

            {/* <div className={classes.deleteButton}>Delete</div> */}
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
          type === 'returnCard' ? ' Return Card' : ' Book'
        }
        <Link to={`/${type}s/new`} className={classes.link}>
          Add new
        </Link>
      </div>
      <DataGrid
        rows={dataList}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable