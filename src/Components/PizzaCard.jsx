    import React from "react"
import {Badge, Button, Card} from "react-bootstrap";
import x from "../data.json"


export default function ({data, setOrdered}) {
    let y = ["a","o","7"]
    let f = data.image.toString()
    console.log(f)


    return (
        <Card className="h=100 shadow-sm bg-white rounded">

                    <Card.Img variant="top" src={require("../images/A77" + f[5] + ".png") } />

            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold">
                        {data.name}
                    </Card.Title>
                    <Badge pill className="mb-1" variant="warning">
                        ${data.price}
                    </Badge>
                </div>
                <Card.Text className="text.secondary">
                    {data.desc}
                </Card.Text>
                <Button onClick={() => setOrdered()}
                        className="mt-auto font-weight-bold"
                        variant="success"
                        block>
                    Order A7EH
                </Button>
            </Card.Body>
        </Card>

    )
}