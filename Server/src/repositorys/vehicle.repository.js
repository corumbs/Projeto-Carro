import { prisma } from "../services/prisma.js";

export const createVehicle = async (data) => {
    const vehicle = await prisma.vehicle.create({
        data,
    });
    return vehicle;
};

export const getAll = async () => {
    const vehicles = await prisma.vehicle.findMany({});
    return vehicles;
};

export const getById = async (id) => {
    const vehicle = await prisma.vehicle.findUnique({
        where: {
            id,
        },
    });
    return vehicle;
};

export const updateVehicle = async (id, data) => {
    const vehicle = await prisma.vehicle.update({
        where: {
            id
        },
        data,
    });
    return vehicle;
};

export const deleteVehicle = async (id) => {
    await prisma.vehicle.delete({
        where: {
            id,
        },
    });
};

export const updateVehicleParts = async (id, data) => {
    const vehicle = await prisma.vehicle.update({
        where: {
            id
        },
        data,
    });
    return vehicle;
};

export const getByParam = async (query) => {
    const { q } = query;
    const vehicle = await prisma.vehicle.findMany({
        where: {
            OR: [
                {veiculo: query.q}, 
                {marca: query.q}
            ]
        }
    });
    return vehicle;
};