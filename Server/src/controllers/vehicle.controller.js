import { vehicleValidation } from "../validations/vehicle.validations.js";
import { createVehicle, getAll, getById, updateVehicle, deleteVehicle, updateVehicleParts, getByParam } from "../repositorys/vehicle.repository.js"

export const create = async (req, res) => {
    try {
        await vehicleValidation.validate(req.body);

        const vehicle = await createVehicle(req.body);
        res.status(200).send(vehicle);
    } catch (e) {
        res.status(400).send(e);
    }
};

export const get = async (req, res) => {
    try {
        const vehicles = await getAll();
        res.status(200).send(vehicles);
    } catch (e) {
        res.status(400).send(e);
    }
};

export const getId = async (req, res) => {
    try {
        const vehicle = await getById(Number(req.params.id));
        res.status(200).send(vehicle);
    } catch (e) {
        res.status(400).send(e);
    }
};

export const update = async (req, res) => {
    try {
        const vehicle = await updateVehicle(Number(req.params.id), req.body);
        res.status(200).send(vehicle);
    } catch (e) {
        res.status(400).send(e);
    }
};

export const remove = async (req, res) => {
    try{
        await deleteVehicle(Number(req.params.id));
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e);
    }
};

export const updateParts = async (req, res) => {
    try {
        const vehicle = await updateVehicleParts(Number(req.params.id), req.body);
        res.status(200).send(vehicle);
    } catch (e) {
        res.status(400).send(e);
    }
};

export const getParms = async (req, res) => {
    try {
        const vehicle = await getByParam(req.query);
        res.status(200).send(vehicle);
    } catch (e){
        res.status(400).send(e);
    }
};