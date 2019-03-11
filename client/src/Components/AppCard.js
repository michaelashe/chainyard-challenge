import React, {Component} from 'react';
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class AppCard extends Component {

render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Block Index: </CardTitle>
            <CardSubtitle>Received Time: </CardSubtitle>
          </CardBody>
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button><CardLink href="#">SINGLE BLOCK</CardLink></Button>
            <Button><CardLink href="#">SINGLE TRANSACTION</CardLink></Button>
          </CardBody>
        </Card>
      </div>
    );
  };
}
  