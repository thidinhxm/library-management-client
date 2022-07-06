import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import loginStyle from './login.module.scss';

import { login } from '../../redux/features/authSlice';
const initialState = {
  username: '',
  password: '',
}
const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { username, password } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(login({ formValue, navigate }));
    }
  }

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  return (

    <div className={loginStyle.login}>
      <form 
        className={loginStyle.loginForm}
        onSubmit={handleSubmit}
      >
        <h1 className={loginStyle.title}>Login</h1>

        <div className={loginStyle.inputContainer}>
          <input 
            type="text" 
            placeholder="Username" 
            name="username"
            value={username}
            className={loginStyle.input}
            onChange={onInputChange}
          />
          <label className={loginStyle.label}>Username</label>
        </div>

        <div className={loginStyle.inputContainer}>
          <input 
            type="password" 
            placeholder="Password" 
            className={loginStyle.input}
            name="password"
            value={password}
            onChange={onInputChange}
          />
          <label className={loginStyle.label}>Password</label>
        </div>

        <button className={loginStyle.btnSubmit}>Login</button>
      </form>
    </div>
  )
}

export default Login