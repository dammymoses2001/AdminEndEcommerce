import React from 'react'
import { Card, CardTitle, CardBody, CardImg, CardSubtitle, CardText, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
function Card1(prop) {
    return (
        <Card className='p-5 top' >
            {!prop.context ?
                <>
                    <CardImg>{prop.image}</CardImg>
                    <CardBody>
                        <CardTitle>{prop.title}</CardTitle>
                        <CardSubtitle>{prop.subtitle}</CardSubtitle>
                        <CardText>{prop.text}</CardText>
                        {prop.button ? <Button>{prop.button}</Button> : null}
                    </CardBody>
                </>
                :
                <>

                    {prop.context}


                </>

            }


        </Card>
    )
}

export default Card1
