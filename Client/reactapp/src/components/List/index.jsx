import CardList from '../CardList';
import './style.css';
import '../modal';
import Bnt from "../modal";



function List() {

    return (

        <div className="cars">
            <div className="carsMod">
                <Bnt />
                <div className="carsModSearch">
                    <input type="text" className="carsModSearchInput"
                        placeholder=" Buscar..." />

                </div>
            </div>
            <div className="carView">

                <CardList name="corsa" brand=" Chevrolet" year="2015" sold={true} />
                <CardList name="uno" brand=" Chevrolet" year="2015" sold={true} />
                <CardList name="palio" brand=" Chevrolet" year="2015" sold={true} />
                <CardList name="duster" brand=" Chevrolet" year="2015" sold={true} />
                <CardList name="fusca" brand=" Chevrolet" year="2015" sold={true} />
                <CardList name="corsa" brand=" Chevrolet" year="2015" sold={true} />
                <CardList name="corsa" brand=" Chevrolet" year="2015" sold={true} />
                <CardList name="corsa" brand=" Chevrolet" year="2015" sold={true} />
                <CardList name="corsa" brand=" Chevrolet" year="2015" sold={true} />

            </div>
        </div >
    )
}
export default List