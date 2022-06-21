import './estilo.css';

function InputEscolhaSenha() {
    return (
        <div className='container-escolha-senha'>
            <h1>Escolha uma senha</h1>
            <form>
            <label>Senha*</label>
              <input
                type='password'
                ></input>
                <label>Repita a senha*</label>
              <input
                type='password'
                ></input>
                <div className='container-enviar'>
            <button className='btn-register' type='submit'>enviar</button>
            <span>Já possui uma conta? Faça seu Login</span>
            </div>
            </form>
        </div>
    )
}

export default InputEscolhaSenha;