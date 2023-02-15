import { FiDollarSign } from "react-icons/fi";
import './style.css';
function CardList(props) {
    return (
        <div className="carViewObject">

            <div className="carViewObjectInfo">
                <h1>{props.name}</h1>
                <h3>{props.brand}</h3>
                <h3>{props.year}</h3>
            </div>
            <button className="carsViewObjectInfoSold">
                <FiDollarSign size={25} color={props.sold ? "#fff" : "#597ddf"} />
            </button>
        </div>
    )
}

export default CardList