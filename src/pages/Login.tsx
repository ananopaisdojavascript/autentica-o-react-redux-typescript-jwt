import { useState, Fragment } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // const handleLogin = () => {}

  return (
    <Fragment>
      <form>
        <div>
          <label htmlFor="">Digite o e-mail: </label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
          <label htmlFor="">Digite a senha: </label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>
        Se ainda não tem cadastro, <Link to="/register">Clique Aqui</Link>
      </p>
    </Fragment>
  )
}

export default Login