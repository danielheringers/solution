import { Chip } from "@nextui-org/chip";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

const StatusSefaz = () => {
    // Lista de siglas dos estados
    const estados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

    return (
        <div className="grid max-w-sm max-h-96 gap-2 grid-rows-1">
            {estados.map(estado => (
                <div key={estado}>
                    <Chip color="success" variant="dot">{estado}</Chip>
                </div>
            ))}
        </div>
    );
}

export default StatusSefaz;
