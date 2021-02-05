import React from "react"
import {Toast} from "react-bootstrap"

export default function Confirmation({toggle}) {
    return (
        <Toast onClose={() => toggle(false)}>
            <Toast.Header>
                <strong className="mr-auto">Your order is in the Oven</strong>
            </Toast.Header>
            <Toast.Body>
                Your A77AWS will arrive sooner or later
            </Toast.Body>
        </Toast>
    )
}