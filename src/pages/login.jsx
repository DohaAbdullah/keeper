import Input from "../components/input";

function Login() {
  return (
    <div className="login-body">
      <div className="login-container">
        <div className="form-container">
          <h1 className="login-hello-title">Hello</h1>
          <form>
            <Input placeholder="email" name="email" type="text" />
            <Input placeholder="Password" name="password" type="password" />
            <button className="login-button" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
