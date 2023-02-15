import React, { useState } from 'react';
import './style.css';
import { FiPlus } from "react-icons/fi";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
        <div className="modal">
            <div className="modalContent">
                {children}
                <div className="modalContentButtons">
                    <button className="modalContentCancel" onClick={onClose}>Cancelar</button>
                    <button className="modalContentConfirm" onClick={onClose}>Confirmar</button>
                </div>
            </div>
        </div>
    );
}

function Bnt() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)} className="carsModAdd">
                <FiPlus size={25} color="#597ddf" />
            </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2>Novo Veículo</h2>
                <div className="modalContentInputs">
                    <input type="text" placeholder="Veículo" />
                    <input type="text" placeholder="Marca" />
                    <input type="number" placeholder="Ano" />
                    <div className="modalContentInputSold">
                        <p>Vendido</p>
                        <input type="checkbox" />
                    </div>
                    <input type="text" placeholder="Descrição"
                        className="modalContentInputDesc" />
                </div>

            </Modal>
        </div>
    );
}

export default Bnt;

