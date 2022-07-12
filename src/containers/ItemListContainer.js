import Item from '../components/Item'

const ItemListContainer = () => {
    return(
        <>
        <h1>Item List Container</h1>
        <Item titulo = 'Dibujo para principiantes' profesor = 'Juan Perez' descripcion ='Some quick example text to build on the card title and make up the bulk of the cards content.' valor ={1500} stock={5} initial ={1}/>
        <Item titulo = 'Dibujo para principiantes' profesor = 'Juan Perez' descripcion ='Enim aut cum cupiditate. Rerum sint non est rerum accusamus reiciendis. Cupiditate est minus ipsa aut. ' valor ={1500} stock={5} initial ={1}/>
    </>
    )
} 
export default ItemListContainer