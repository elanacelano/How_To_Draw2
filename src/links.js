import React from "react";
import helpers from "./utils/helpers";
import DrawingVideos from "./DrawingVideos";
import { Col, Button, Form, FormGroup, Label, Input, FormText, Jumbotron, Container, Card, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBlock  } from "reactstrap";
// export default links;
// import React from 'react';
// import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
//  CardSubtitle, CardBlock } from 'reactstrap';

// const links = (props) => {
class Links extends React.Component {
  render() {
      return (
        <CardDeck>
          <Card>
            <CardImg top width="100%" src="" alt="Card image cap" />
            <CardBlock>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <Button>Button</Button>
            </CardBlock>
          </Card>
          <Card>
            <CardImg top width="100%" src="" alt="Card image cap" />
            <CardBlock>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Button</Button>
            </CardBlock>
          </Card>
          <Card>
            <CardImg top width="100%" src="" alt="Card image cap" />
            <CardBlock>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button>Button</Button>
            </CardBlock>
          </Card>
        </CardDeck>
      );
    };
  }
export default Links;



