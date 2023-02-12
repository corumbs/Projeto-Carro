import { create, get, getId, update, remove } from "../controllers/vehicle.controller";

const vehicleRoutes = app => {
    app.post("/veiculos", create);
    app.get("/veiculos", get);
    app.get("/veiculos/:id", getId);
    app.put("/veiculos/:id", update);
    app.delete("/veiculos/:id", remove);
}

export default vehicleRoutes;