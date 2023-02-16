import React, { useState } from 'react';
import Modal from '../modal';


function Bnt() {
    const [showModal, setShowModal] = useState(false);

    function handleAddCarClick() {
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
    }

    return (
        <div className="carsModButtons">
            <button className="carsModButtonAdd" onClick={handleAddCarClick}>
                Adicionar carro
            </button>
            {showModal && <Modal onClose={handleCloseModal} />}
        </div>
    );
}

export default Bnt;