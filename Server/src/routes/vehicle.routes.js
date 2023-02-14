import { create, get, getId, update, remove, updateParts, getParms } from "../controllers/vehicle.controller.js";

const vehicleRoutes = app => {
    app.get("/veiculos", get); 
    app.get("/veiculos/find", getParms);
    app.get("/veiculos/:id", getId);
    app.post("/veiculos", create);
    app.put("/veiculos/:id", update);
    app.patch("/veiculos/:id", updateParts);
    app.delete("/veiculos/:id", remove);
}

export default vehicleRoutes;