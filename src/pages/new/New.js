import { useState } from 'react'
import classes from './New.module.scss';
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { DriveFolderUploadOutlined } from '@mui/icons-material';

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className={classes.new}>
      <Sidebar />
      <div className={classes.newContainer}>
        <Navbar />
        <div className={classes.top}>
          <h1>{title}</h1>
        </div>
        <div className={classes.bottom}>
        <div className={classes.left}>
            <img 
              src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} 
              alt=""
            />
          </div>
          <div className={classes.right}>
            <form action="">
              <div className={classes.formInput}>
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className={classes.icon} />
                </label>
                <input 
                  type="file" 
                  id="file" 
                  style={{ display: "none" }}
                  onChange={e => setFile(e.target.files[0])}
                />
              </div>
              {inputs.map(input => (
                <div className={classes.formInput} key={input.id}>
                <label htmlFor="">{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}/>
              </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New