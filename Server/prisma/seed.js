import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const vehicles = [
    {
        veiculo: "fusca",
        marca: "fusca",
        ano: 2010,
        descricao: "caindo aos pedaços",
        vendido: false,
    },
    {
        veiculo: "gol",
        marca: "gol",
        ano: 2020,
        descricao: "sujo",
        vendido: false,
    }, 
    {
        veiculo: "camaro",
        marca: "camaro",
        ano: 2022,
        descricao: "intacto",
        vendido: false,
    },


];

async function main() {
    for (let vehicle of vehicles) {
        await prisma.vehicle.create({
            data: vehicle
        });
    }
}

main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(() => {
    prisma.$disconnect();
}) 