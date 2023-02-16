import CardList from '../CardList';
import './style.css';
import '../modal';
import Bnt from "../modal";
import { useState, useEffect } from 'react';
import { api } from "../../services/api";


function List() {

    const [car, setCar] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await api.get("/veiculos");
            setCar(response.data);
        }
        fetchData();
    }, []);




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
                {car.map(car => (
                    <CardList name={car.veiculo} brand={car.marca} year={car.ano} sold={car.vendido} />

                ))}

            </div>
        </div >
    )
}
export default List