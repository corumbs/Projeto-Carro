import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { api } from '../../services/api';
import './style.css';

function Modal({ onClose }) {
    const initialValues = {
        veiculo: '',
        marca: '',
        ano: '',
        vendido: false,
        descricao: ''
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            await api.post('/veiculos', values);
            onClose();
            resetForm();
            window.location.reload();
        } catch (err) {
            console.error('Ocorreu um erro ao salvar o novo carro: ', err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="modal">
            <div className="modalContent">
                <h2>Adicionar carro</h2>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form>
                            <label>
                                Nome:
                                <Field type="text" name="veiculo" required />
                                <ErrorMessage name="veiculo" component="div" className="error" />
                            </label>
                            <label>
                                Marca:
                                <Field type="text" name="marca" required />
                                <ErrorMessage name="marca" component="div" className="error" />
                            </label>
                            <label>
                                Ano:
                                <Field type="number" name="ano" required />
                                <ErrorMessage name="ano" component="div" className="error" />
                            </label>
                            <label>
                                Vendido:
                                <Field type="checkbox" name="vendido" />
                            </label>
                            <label>
                                Descrição:
                                <Field type="text" name="descricao" required />
                                <ErrorMessage name="descricao" component="div" className="error" />
                            </label>
                            <button type="submit" disabled={isSubmitting}>Salvar</button>
                            <button type="button" onClick={onClose}>Fechar</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Modal;


