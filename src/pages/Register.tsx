import { Link } from "react-router-dom"
import { Fragment, useState } from "react"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // const handleRegister = async () => {}

  return (
    <Fragment>
      <form>
        <div>
          <label htmlFor="">Digite o nome: </label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label htmlFor="">Digite o e-mail: </label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Digite a senha: </label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <button type="submit">Registrar</button>
      </form>
      <p>
        Se já tem cadastro, <Link to="/login">Clique Aqui</Link>
      </p>
    </Fragment>
  )
}

export default Register