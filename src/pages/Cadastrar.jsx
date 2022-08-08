import { Card } from "../components/Card";

export function Cadastrar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
          <div className="bs-docs-section">
            <Card title={"Cadastrar"}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <form>
                      <fieldset>
                        <div className="form-group">
                          <div className="form-group">
                            <label for="exampleInputEmail1">Nome: *</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite o Nome"></input>
                          </div>
                          <div className="form-group">
                            <label for="exampleInputEmail1">Email: *</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite o Email"></input>
                            <small id="emailHelp" className="form-text text-muted">Não divulgamos o seu email.</small>
                          </div>
                          <div className="form-group">
                            <label for="exampleInputPassword1">Senha: *</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                          </div>

                          <div class="form-group">
                            <label for="exampleInputPassword1">Repita a Senha: *</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                          </div>

                          <button type="button" className="btn btn-success">Salvar</button>
                          <button type="button" className="btn btn-danger">Voltar</button>
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