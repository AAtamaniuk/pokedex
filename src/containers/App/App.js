import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokemonsActions from '../../actions/pokemonsActions';
import * as showActions from '../../actions/showActions';
import { Col, Container, Row } from 'react-grid-system';
// Components
import { Header } from '../../components/common/Header';
import { PokeItem } from '../../components/common/PokeItem';
import { Loading } from '../../components/common/Loading';
import { Error } from '../../components/common/Error';
import { Modal } from '../../components/common/Modal';
// Styles
import './App.css';


class App extends Component {
  constructor() {
    super();
    this._renderPokeItems = this._renderPokeItems.bind(this);
  }

  componentDidMount() {
    const {fetchList} = this.props.pokemonsActions;
    fetchList();
  }

  _renderPokeItems(pokemons) {
    const { openModal } = this.props.showActions;
    return (
      pokemons.map(item => {
          return (
            <Col key={item.id} sm={1} md={4} lg={3} xl={3}>
              <PokeItem pokemon={item} handleClick={() => openModal()}/>
            </Col>
          );
        }
      )
    );
  };

  render() {
    const { closeModal } = this.props.showActions;
    const { pokemons, fetching, fetched, error, modalOpen } = this.props;
    let content = null;
    if (fetched === true && error === null) {
      content = <Row>{this._renderPokeItems(pokemons)}</Row>;
    }
    else if (fetching === true) {
      content = <Loading/>;
    }
    else {
      content = <Error/>;
    }
    return (
      <div className={`App ${modalOpen ? 'App--modal' : ''}`}>
        <Header/>
        <Container>
          {content}
        </Container>
        <Modal open={modalOpen} onClose={() => closeModal()}>
          <h1>This is Modal</h1>
          <div style={{height: 1000}}>Dummy</div>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons.pokemons,
    fetching: state.pokemons.fetching,
    fetched: state.pokemons.fetched,
    error: state.pokemons.error,
    modalOpen: state.show.modalOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pokemonsActions: bindActionCreators(pokemonsActions, dispatch),
    showActions: bindActionCreators(showActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
