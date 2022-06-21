import "./estilos.css";
import MenuLateral from "../../componentes/MenuLateral";
import Cabecalho from "../../componentes/Cabecalho";
import CardCobrancas from "../../componentes/CardCobrancas";
import IconePagas from "../../imagens/iconeCobrancasPagas.svg";
import IconeVencidas from "../../imagens/iconeCobrancasVencidas.svg";
import IconePrevistas from "../../imagens/iconeCobrancasPrevistas.svg";
import StatusCliente from "../../componentes/StatusCliente";
import CardCliente from "../../componentes/CardClientes";
import IconeEmDia from "../../imagens/iconeClientesAdimplente.svg";
import IconeInadimplente from "../../imagens/iconeClientesInadimplentes.svg";

function ResumoCobrancas() {
  return (
    <div className="home">
      <MenuLateral pagina="home" />
      <main>
        <Cabecalho titulo="Resumo das cobranças" pagina="Normal" />
        <div className="conteudoTodosCards">
          <div className="container-cards">
            <CardCobrancas
              titulo="Cobranças Pagas"
              valor="R$30.000"
              color="#EEF7F7"
              icon={IconePagas}
            />
            <CardCobrancas
              titulo="Cobranças Vencidas"
              valor="R$7.000"
              color="#FFEFEF"
              icon={IconeVencidas}
            />
            <CardCobrancas
              titulo="Cobranças Previstas"
              valor="R$10.000"
              color="#FCF6DC"
              icon={IconePrevistas}
            />
          </div>
          <div className="container-cards-cobrancasInfo"></div>
          <div className="container-cards-clientesInfo">
            <div className="container-card-historico">
              <CardCliente
                titulo="Cobranças Vencidas"
                color="#971D1D"
                bgcolor="#FFEFEF"
                quantidade="10"
              />
              <CardCliente
                titulo="Cobranças Previstas"
                color="#C5A605"
                bgcolor="#FCF6DC"
                quantidade="10"
              />
              <CardCliente
                titulo="Cobranças Pagas"
                color="#1FA7AF"
                bgcolor="#EEF6F6"
                quantidade="10"
              />
            </div>
            <div className="container-card-status-cliente">
              <StatusCliente
                titulo="Clientes Inadimplentes"
                color="#971D1D"
                bgcolor="#FFEFEF"
                quantidade="10"
                icon={IconeInadimplente}
              />
              <StatusCliente
                titulo="Clientes em dia"
                color="#1FA7AF"
                bgcolor="#EEF6F6"
                quantidade="10"
                icon={IconeEmDia}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ResumoCobrancas;
