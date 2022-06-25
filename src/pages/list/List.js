import listStyle from './list.module.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DataTable from '../../components/dataTable/DataTable';

const List = ({ type }) => {
  return (
    <div className={listStyle.list}>
      <Sidebar />
      <div className={listStyle.listContainer}>
        <Navbar />
        <DataTable type={type}/>
      </div>
    </div>
  )
}

export default List