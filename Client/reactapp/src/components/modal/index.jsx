import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { api } from '../../services/api';
import './style.css';

function Modal({ onClose, car, onEdit = false }) {
    const initialValues = {
        veiculo: onEdit ? car.veiculo : "",
        marca: onEdit ? car.marca : "",
        ano: onEdit ? car.ano : "",
        vendido: onEdit ? car.vendido : false,
        descricao: onEdit ? car.descricao : ""
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        if (!onEdit) {
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
        }

        try {
            console.log(values)
            console.log(car)
            await api.put(`/veiculos/${car.id}`, {
                veiculo: values.veiculo,
                marca: values.marca,
                ano: values.ano,
                vendido: values.vendido,
                descricao: values.descricao
            });
            onClose();
            window.location.reload();

        }
        catch (err) {
            console.error('Ocorreu um erro ao salvar o novo carro: ', err);

        } finally {
            setSubmitting(false);
        }

    };

    return (
        <div className="modal">
            <div className="modalContent">
                <h2>{onEdit ? "Editar carro" : "Adicionar carro"}</h2>

                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form className="modalContentForm">
                            <label >
                                Nome:
                                <Field className="modalContentFormText" type="text" name="veiculo" required />
                                <ErrorMessage name="veiculo" component="div" className="error" />
                            </label>
                            <label >
                                Marca:
                                <Field className="modalContentFormText" type="text" name="marca" required />
                                <ErrorMessage name="marca" component="div" className="error" />
                            </label>
                            <label>
                                Ano:
                                <Field className="modalContentFormYear" type="number" name="ano" required />
                                <ErrorMessage name="ano" component="div" className="error" />
                            </label>
                            <label>
                                Vendido:
                                <Field type="checkbox" name="vendido" />
                            </label>
                            <label >
                                Descrição:
                                <Field className="modalContentFormDesc" type="text" name="descricao" required />
                                <ErrorMessage name="descricao" component="div" className="error" />
                            </label>
                            <button className="modalContentFormSubmit" type="submit" disabled={isSubmitting}>Salvar</button>
                            {onEdit && (
                                <button
                                    className="modalContentFormCancel"
                                    type="button"
                                    onClick={async () => {
                                        if (window.confirm("Tem certeza que deseja excluir este carro?")) {
                                            try {
                                                await api.delete(`/veiculos/${car.id}`);
                                                onClose();
                                                window.location.reload();
                                            } catch (err) {
                                                console.error('Ocorreu um erro ao excluir o carro: ', err);
                                            }
                                        }
                                    }}
                                >
                                    Deletar
                                </button>
                            )}

                            <button className="modalContentFormCancel" type="button" onClick={onClose}>Fechar</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Modal;


