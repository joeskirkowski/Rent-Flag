import React from 'react'
import {Form, Row, Col, Button, FormControl, InputGroup, Nav, Navbar, Container, Card, ListGroup, NavDropdown, Offcanvas, Text} from 'react-bootstrap/'

export default function FAQPage () {
  return (

    <Card style={{ width: '60rem'}} className="Home bg-dark">
    <div className="bg-dark">
  <ListGroup>
    <ListGroup.Item className = "bg-dark"><h3> 1.) I can't find my property on the database?</h3></ListGroup.Item>
    <ListGroup.Item className = "bg-dark"> <p>No news is good news! If your property isn't showing up on our database it just means that there hasn't
     been a claim made against that address.</p></ListGroup.Item>
    <ListGroup.Item className = "bg-dark"><h3> 2.) Will I get in trouble for posting complaints against my landlord?</h3></ListGroup.Item>
    <ListGroup.Item  className = "bg-dark"><p>No, you are completely within your rights as paying tenants to make professional complaints against the professional conduct of your landlord. However, we do encourage you to attach as much evidence as
    posible to your claims.</p> </ListGroup.Item>
    <ListGroup.Item  className = "bg-dark"><h3> 3.) I'm a landlord and a tennant has made an unfair claim against me, what can I do?</h3></ListGroup.Item>
    <ListGroup.Item  className = "bg-dark"> <p>We ask all of our contributors to attach evidence where possible but we appreciate that unfair claims are going to crop up. Get in touch with our disputes team to talk about this further.</p></ListGroup.Item>
    <ListGroup.Item className = "bg-dark"><h3>4.) How long will it take for my complaint to be uploaded? </h3></ListGroup.Item>
    <ListGroup.Item className = "bg-dark"> <p>We try to screen and upload every new complaint within 24 hours but please allow up to three working days for submissions to be processed </p></ListGroup.Item>
    <ListGroup.Item className = "bg-dark"><h3>5.) I still live in the property I want to post about, can I still upload my complaints? </h3></ListGroup.Item>
    <ListGroup.Item className = "bg-dark"> <p>We would recommend not uploading current issues until you have vacated your property. This gives your landlord a fair chance to fix them. However, if your landlord routinely ignores maintenance
    requests or acts inappropriately then that is something that should be passed on.</p> </ListGroup.Item>
    <ListGroup.Item className = "bg-dark"><h3>6.) I moved out of a property years ago but want to raise a complaint? </h3></ListGroup.Item>
    <ListGroup.Item className = "bg-dark"> <p>Unfortunately we want to keep the database as up to date as possible, which is why we insist on all submissions being dated. Issues from the past could be fixed by now so we don't believe it's fair to upload them
    retroactively.</p></ListGroup.Item>
    <ListGroup.Item className = "bg-dark"><h3>7.) I'm not a British national, could making a complaint about my landlord / housing assosiation affect my right to stay in the UK? </h3></ListGroup.Item>
    <ListGroup.Item className = "bg-dark"><p>No, as long as you've signed a contract and are up to date on rent payments you are within your rights to raise issues on here and it won't have any bearing on your visa situation.</p> </ListGroup.Item>
    <ListGroup.Item className = "bg-dark"><h3>8.) Why can't I see how much the rent was for these properties? </h3></ListGroup.Item>
    <ListGroup.Item className = "bg-dark"><p> While we appreciate that it's good to know if the landlord has recently put the rent up, it is within their rights to do so in between tennancies and it is up to the prospoective tennants to decide if it is suitable for them.</p></ListGroup.Item>
    </ListGroup>
    </div>
</Card>
  )
}
