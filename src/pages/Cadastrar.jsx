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
                          <div className="form-group" style={{marginBottom: '10px'}}>
                            <label>Nome: *</label>
                            <input type="email" className="form-control" placeholder="Digite o Nome"></input>
                          </div>
                          <div className="form-group" style={{marginBottom: '10px'}}>
                            <label>Email: *</label>
                            <input type="email" className="form-control" placeholder="Digite o Email"></input>
                          </div>
                          <div className="form-group" style={{marginBottom: '10px'}}>
                            <label>Senha: *</label>
                            <input type="password" className="form-control" placeholder="Password"></input>
                          </div>

                          <div className="form-group">
                            <label>Repita a Senha: *</label>
                            <input type="password" className="form-control" placeholder="Password"></input>
                          </div>

                          <div style={{ paddingTop: '20px' }}>
                            <button type="button" className="btn btn-success" style={{ marginRight: '15px' }}>Salvar</button>
                            <button type="button" className="btn btn-danger">Voltar</button>
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