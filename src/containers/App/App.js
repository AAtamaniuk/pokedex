import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokemonsActions from '../../actions/pokemonsActions';
import { Col, Container, Row } from 'react-grid-system';
// Components
import { Header } from '../../components/common/Header';
import { PokeItem } from '../../components/common/PokeItem';
import { Loading } from '../../components/common/Loading';
// Styles
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.renderPokeItems = this.renderPokeItems.bind(this);
  }

  componentDidMount() {
    const {fetchList} = this.props.pokemonsActions;
    fetchList();
  }

  renderPokeItems(item) {
    return (
      <Col key={item.id} sm={1} md={4} lg={3} xl={3}>
        <PokeItem pokemon={item}/>
      </Col>
    );
  };

  render() {
    const {pokemons, fetching, fetched, error} = this.props;
    let content = null;
    if (fetched === true && error === null) {
      content = <Row>{pokemons.map(item => this.renderPokeItems(item))}</Row>
    } else if (fetching === true) {
      content = <Loading/>
    } else {
      content = <h1>Error</h1>
    }
    return (
      <div className="App">
        <Header/>
        <Container>
          {content}
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons.pokemons,
    fetching: state.pokemons.fetching,
    fetched: state.pokemons.fetched,
    error: state.pokemons.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pokemonsActions: bindActionCreators(pokemonsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
