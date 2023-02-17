import CardList from '../CardList';
import './style.css';
import '../modal';
import Bnt from "../Bnt";
import { useState, useEffect } from 'react';
import { api } from "../../services/api";
import { FiDollarSign } from "react-icons/fi";

function Main() {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        async function fetchData() {
            const response = await api.get("/veiculos");
            setCars(response.data);
        }
        fetchData();
    }, []);

    const filteredCars = cars.filter(car => car.veiculo.toLowerCase().includes(searchValue.toLowerCase()));

    function handleCarClick(car) {
        setSelectedCar(car);
    }

    return (
        <div className="main">
            <div className="cars">
                <div className="carsMod">
                    <Bnt onAdd={true} />
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
                        <CardList
                            key={car.id}
                            name={car.veiculo}
                            brand={car.marca}
                            year={car.ano}
                            sold={car.vendido}
                            onClick={() => handleCarClick(car)}
                        />
                    ))}
                </div>
            </div>
            <div className="carDetailsView">
                <h1>Detalhes</h1>
                {selectedCar && (
                    <div className="carDetailsViewDetails">
                        <h2>{selectedCar.veiculo}</h2>
                        <div className="carDetailsViewDetailsBY">
                            <p><strong>Marca:</strong><br></br> {selectedCar.marca}</p>
                            <p><strong>Ano:</strong><br></br> {selectedCar.ano}</p>

                        </div>
                        <p><strong>Descrição:</strong><br></br> {selectedCar.descricao}</p>
                        <div className="carDetailsViewDetailsFooter">
                            <Bnt car={selectedCar} onEdit={true} />
                            <FiDollarSign size={25} color={selectedCar.vendido ? "#fff" : "#597ddf"} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Main;
