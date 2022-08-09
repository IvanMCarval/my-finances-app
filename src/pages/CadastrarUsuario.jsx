import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";

export function CadastrarUsuario() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaRepetida, setSenhaRepetida] = useState('')

  function cadastrar(e) {
    e.preventDefault();

    if (nome != '' && email != '' && senha != '') {
      if (senha == senhaRepetida) {
        setNome(nome)
        setEmail(email)
        setSenha(senha)
        console.log(nome, email, senha)
      } else {
        alert("Senha não coresponde")
      }
    } else {
      alert("Preencha o formulario")
    }
  }

  return (
    <div className="container" style={{padding: '100px'}}>
      <div className="column" style={{display: 'flex', justifyContent: 'center'}}>
        <div className="col-md-13">
          <div className="bs-docs-section">
            <Card title={"Cadastrar"}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <form onSubmit={cadastrar}>
                      <fieldset>
                        <div className="form-group">
                          <div className="form-group" style={{ marginBottom: '10px' }}>
                            <label>Nome: *</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Digite o Nome"
                              onChange={event => setNome(event.target.value)}>
                            </input>
                          </div>
                          <div className="form-group" style={{ marginBottom: '10px' }}>
                            <label>Email: *</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Digite o Email"
                              onChange={event => setEmail(event.target.value)}>
                            </input>
                          </div>
                          <div className="form-group" style={{ marginBottom: '10px' }}>
                            <label>Senha: *</label>
                            <input
                              type="password" 
                              className="form-control" 
                              placeholder="Password"
                              onChange={event => setSenha(event.target.value)}>
                            </input>
                          </div>

                          <div className="form-group">
                            <label>Repita a Senha: *</label>
                            <input 
                              type="password" 
                              className="form-control" 
                              placeholder="Password"
                              onChange={event => setSenhaRepetida(event.target.value)}>
                            </input>
                          </div>

                          <div style={{ paddingTop: '20px' }}>
                            <button type="submit" className="btn btn-success" style={{ marginRight: '15px' }}>Salvar</button>
                            <Link to={"/"} className="btn btn-danger">Cancelar</Link>
                          </div>
                        </div>
                      </fieldset>
                    </form>

                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}