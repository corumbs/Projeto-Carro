import * as yup from "yup";

export const vehicleValidation = yup.object({
    veiculo: yup.string().required(),
    marca: yup.string().required(),
    ano: yup.number().required(),
    descricao: yup.string().required(),
    vendido: yup.bool().required()
})