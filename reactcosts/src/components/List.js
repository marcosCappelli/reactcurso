import Item from "./Item"

function List() {
    return (
        //Fragments <> </>
        <> 
          <h1>Minha Lista</h1>
          <ul>
            <Item marca="Ferrari"/>
            <Item marca="Honda"/>
            <Item marca="mercedes"/>
          </ul>
        </>

    )
}

export default List