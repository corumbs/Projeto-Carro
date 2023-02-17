import React, { useState } from 'react';
import Modal from '../modal';
import { FiPlus } from "react-icons/fi";
import './style.css';



function Bnt({ car, onEdit = false }) {
    const [showModal, setShowModal] = useState(false);

    function handleAddCarClick() {
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
    }

    return (
        <div className="carsModButtons">
            <button FiPlus className="carsModButtonAdd" onClick={handleAddCarClick}>
                <FiPlus size={25} color="#597ddf" />
            </button>
            {showModal && <Modal onClose={handleCloseModal} car={car} onEdit={onEdit} />}
        </div>
    );
}

export default Bnt;