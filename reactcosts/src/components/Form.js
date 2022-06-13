function Form() {

    function cadastrarUsuario(event) {
        //Usado esse event para evitar envio "submit"
        event.preventDefault()
        console.log("Cadastrou o osuário!")
    }

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form