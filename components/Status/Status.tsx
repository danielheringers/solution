"use client"

import { Card, CardHeader, Chip, Divider } from "@nextui-org/react";
import { useEffect, useState } from 'react';

interface IProviderStatus {
    dfe: string;
    provider_name: string;
    cStat: string;
    emission_type: string;
}

interface IStatusData {
    data: IProviderStatus[];
}

const StatusSefaz = ({data = []}: IStatusData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [statusColors, setStatusColors] = useState<{ [key: string]: string }>({});
    
    const estados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
    
    useEffect(() => {
        const newStatusColors = {};
        data.forEach((item) => {
            if (item.dfe === 'nfe') {
                newStatusColors[item.provider_name] = item.emission_type === "normal" ? 'success' : 'danger';
            }
        });
        setStatusColors(newStatusColors);
    }, [data]);

    return (
        <Card className="flex w-full border border-zinc-800 p-2" radius="sm">
            <CardHeader>
                <p className="font-semibold text-xl text-zinc-500">Status Sefaz</p>
            </CardHeader>
            <Divider/>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-2 p-6">
                {estados.map(estado => (
                    <div key={estado}>
                        <Chip color={statusColors[estado] || 'default'} variant="dot">{estado}</Chip>
                    </div>
                ))}
            </div>
        </Card>
    );    
};

export default StatusSefaz;

