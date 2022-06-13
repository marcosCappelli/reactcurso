import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
    return(
        //Fragments <> </>
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>

    )
}
//Validação definida
//Cuidar com essas validações pois são os tipos que definem o objeto
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number, 
}

//Valor default
Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0,
}

export default Item