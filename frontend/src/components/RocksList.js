import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

class RocksList extends React.Component {
    render() {
        return (
                this.props.rocks.map(item => (
                    <Card key={item.id} style={style.card}>
                        <Row>
                            <Col xs={3}>
                                <a style={{ fontSize: 15 }}>{item.date.getDate() + ' / ' + item.date.getMonth() + ' / ' + item.date.getFullYear()}</a><br />
                                <a style={{ fontSize: 13 }}>{item.date.getHours() + ' : ' + item.date.getMinutes() + ' : ' + item.date.getSeconds()}</a>
                            </Col>
                            <Col>
                                {Object.keys(item.elements).map((i, k) => (
                                    <div key={k}>
                                        <b>{i}: </b>{item.elements[i]}
                                    </div>
                                ))}
                            </Col>
                        </Row>
                    </Card>
                ))
        );
    }
}

const style = {
    card: {
        padding: 10,
        margin: 10
    }
}

export default RocksList;