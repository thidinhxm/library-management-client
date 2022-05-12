import loginStyle from './login.module.scss'

const Login = () => {
  return (
    <div className={loginStyle.login}>
      <form className={loginStyle.loginForm}>
        <h1 className={loginStyle.title}>Đăng nhập</h1>

        <div className={loginStyle.inputContainer}>
          <input type="text" placeholder="Email" className={loginStyle.input}/>
          <label className={loginStyle.label}>Email</label>
        </div>

        <div className={loginStyle.inputContainer}>
          <input type="text" placeholder="Password" className={loginStyle.input}/>
          <label className={loginStyle.label}>Mật khẩu</label>
        </div>

        <button className={loginStyle.btnSubmit}>Đăng nhập</button>
      </form>
    </div>
  )
}

export default Login