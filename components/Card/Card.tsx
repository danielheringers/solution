import { Card, CardBody, CardFooter, Divider } from "@nextui-org/react";

interface ICard{
    dataNumbers: string
    dataText: string
}

export default function NewCard({dataNumbers, dataText}: ICard) {
    return(
        <Card className="w-[280px] h-[150px] z-40" >
            <CardBody className="flex items-center justify-center text-2xl">
            <p>{dataNumbers}</p>
            </CardBody>
        <Divider/>
            <CardFooter className="flex items-center justify-center">
                <p>{dataText}</p>
            </CardFooter>
        </Card>
    )
}