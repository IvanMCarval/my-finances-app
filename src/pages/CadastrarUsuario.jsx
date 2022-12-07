import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../components/Card";

class CadastrarUsuario extends React.Component {

  state = {
    nome: '',
    email: '',
    senha: '',
    senhaRepetida: ''
  }

  cancelar = () => {
    this.props.history.push("/login")
  }

  render() {
    return (
      <div className="container" style={{ padding: '100px' }}>
        <div className="column" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="col-md-13">
            <div className="bs-docs-section">
              <Card title={"Cadastrar"}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bs-component">
                      <form>
                        <fieldset>
                          <div className="form-group">
                            <div className="form-group" style={{ marginBottom: '10px' }}>
                              <label>Nome: *</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Digite o Nome"
                                onChange={event => this.setState({ nome: event.target.value })}>
                              </input>
                            </div>
                            <div className="form-group" style={{ marginBottom: '10px' }}>
                              <label>Email: *</label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Digite o Email"
                                onChange={event => this.setState({ email: event.target.value })}>
                              </input>
                            </div>
                            <div className="form-group" style={{ marginBottom: '10px' }}>
                              <label>Senha: *</label>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={event => this.setState({ senha: event.target.value })}>
                              </input>
                            </div>

                            <div className="form-group">
                              <label>Repita a Senha: *</label>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={event => this.setState({ senhaRepetida: event.target.value })}>
                              </input>
                            </div>

                            <div style={{ paddingTop: '20px' }}>
                              <button className="btn btn-success" style={{ marginRight: '15px' }}>Salvar</button>
                              <button onClick={this.cancelar} className="btn btn-danger">Cancelar</button>
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
}

export default withRouter(CadastrarUsuario)