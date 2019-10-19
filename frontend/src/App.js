import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Card} from 'react-bootstrap';

import Nav from './components/Nav';
import RocksList from './components/RocksList';
import Graph from './components/Graph';
import { data } from './components/data'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rocks:[
        {
          id: 1,
          date: new Date(),
          elements: {
            'Aluminio': '30%',
            'Hidrogenio': '50%',
            'Fósforo': '20%',
          }
        },
        {
          id: 2,
          date: new Date(),
          elements: {
            'Cobre': '60%',
            'Lítio': '10%',
            'Berílio': '30%',
          }
        },
        {
          id: 3,
          date: new Date(),
          elements: {
            'Sódio': '40%',
            'Enxofre': '10%',
            'Iodo': '50%',
          }
        },
        {
          id: 4,
          date: new Date(),
          elements: {
            'Aluminio': '30%',
            'Hidrogenio': '50%',
            'Fósforo': '20%',
          }
        },
        {
          id: 5,
          date: new Date(),
          elements: {
            'Cobre': '60%',
            'Lítio': '10%',
            'Berílio': '30%',
          }
        },
        {
          id: 6,
          date: new Date(),
          elements: {
            'Sódio': '40%',
            'Enxofre': '10%',
            'Iodo': '50%',
          }
        },
        {
          id: 7,
          date: new Date(),
          elements: {
            'Aluminio': '30%',
            'Hidrogenio': '50%',
            'Fósforo': '20%',
          }
        },
        {
          id: 8,
          date: new Date(),
          elements: {
            'Cobre': '60%',
            'Lítio': '10%',
            'Berílio': '30%',
          }
        },
        {
          id: 9,
          date: new Date(),
          elements: {
            'Sódio': '40%',
            'Enxofre': '10%',
            'Iodo': '50%',
          }
        },
      ]
    }
  }
  render(){
    return (
      <div style={style.container}>
        <Nav/>
        <Row>
          <Col xs={7}>
          <h2 style={style.title}>Elementos Coletados</h2>
          <Graph data={data}/>
          
          </Col>
          <Col xs={5}>
          <h2 style={style.title}>Histórico de Coleta</h2>
          <RocksList rocks={this.state.rocks} />
          </Col>
        </Row>
      </div>
    );
  }
}

const style = {
  container:{
    width: '100%',
    paddingTop: '10vh'
  },
  title: {
    textAlign: 'center',
    margin: 10
  }
}

export default App;
