import CardList from '../CardList';
import './style.css';
import '../modal';
import Bnt from "../Bnt";
import { useState, useEffect } from 'react';
import { api } from "../../services/api";


function List() {

    const [car, setCar] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        async function fetchData() {
            const response = await api.get("/veiculos");
            setCar(response.data);
        }
        fetchData();
    }, []);

    const filteredCars = car.filter(c => c.veiculo.toLowerCase().includes(searchValue.toLowerCase()));

    return (

        <div className="cars">
            <div className="carsMod">
                <Bnt />
                <div className="carsModSearch">
                    <input
                        type="text"
                        className="carsModSearchInput"
                        placeholder=" Buscar..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                </div>
            </div>
            <div className="carView">
                {filteredCars.map(car => (
                    <CardList name={car.veiculo} brand={car.marca} year={car.ano} sold={car.vendido} />

                ))}

            </div>
        </div >
    )
}
export default List
