import React from 'react';
import './App.css'
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
      ],
      numRocksDay: 20,
      numRocksTT: 1453
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
          <Row style={style.circleRow}>
          <div className="circle">
            <h1 style={style.num}>{this.state.numRocksDay}</h1>
                <div style={style.info}>

            <a >Média de pedras coletadas por dia</a>
                </div>
          </div>
          <div className="circle">
            <h1 style={style.num}>{this.state.numRocksTT}</h1>
                <div style={style.info}>

            <a >Total de pedras coletadas</a>
                </div>
          </div>

          </Row>
          </Col>
          <Col>
          <h2 style={style.title}>Histórico de Coleta</h2>
            <div className="scroll">

          <RocksList rocks={this.state.rocks} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const style = {
  container:{
    width: '100%',
    paddingTop: '10vh',
    margin: '0 auto'
  },
  title: {
    textAlign: 'center',
    margin: 10
  },
  circleRow:{
     justifyContent: 'center',
     marginTop: '50px'
  },
  num:{
    textAlign: 'center',
    marginTop: '25%',
    fontSize: 60
  },
  info:{
    textAlign: 'center',
    fontWeight: 'bold'
  }
}

export default App;
