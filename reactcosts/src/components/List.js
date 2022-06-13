import Item from "./Item"

function List() {
    return (
        //Fragments <> </>
        <> 
          <h1>Minha Lista</h1>
          <ul>
            <Item marca="Ferrari" ano_lancamento={2018}/>
            <Item marca="Honda" ano_lancamento={2010}/>
            <Item />
          </ul>
        </>

    )
}

export default List