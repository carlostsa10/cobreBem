import "./estilos.css";
import MenuLateral from "../../componentes/MenuLateral";
import Cabecalho from "../../componentes/Cabecalho";
import MenuClientes from "../../componentes/MenuClientes";
import IconeCliente from '../../imagens/iconeClientes.svg'
import UnicoDadosCliente from "../../componentes/UnicoDadosCliente";
import UnicoCobrancaCliente from "../../componentes/UnicoCobrancaCliente";

function PaginaClienteDetalhe() {

    return (
        <div className="paginaClienteDetalhe">
            <MenuLateral pagina="clientes" />
            <main>
                <Cabecalho
                    titulo="Cobranças"
                    pagina="Estilizada"
                    detalhes = {true}
                />
                <MenuClientes
                    src={IconeCliente}
                    titulo="Sara Lage Silva"
                />

                <UnicoDadosCliente/>
                <UnicoCobrancaCliente/>
            </main>
        </div>
    )
}

export default PaginaClienteDetalhe;
