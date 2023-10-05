import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

function Home () {

    return (

        <div>
            <section id="categorias">
                <ItemListContainer className="itemListContainer" greeting="Categorías" /> 
            </section>
        </div>
    )

}

export default Home;