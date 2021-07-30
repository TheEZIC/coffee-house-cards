import React, {Component} from 'react';
import {Button, Layout, Modal} from "antd";
import MainInfo from "./MainInfo/MainInfo";
import Donators from "./Donators/Donators";
import Payments from "./Payments/Payments";
import Author from "./Author/Author";

import "./App.scss"
import "./CardsGlobal.scss";
import AfterwordCard from "./AfterwordCard/AfterwordCard";

interface IProps {
}

interface IState {
  modalIsShowed: boolean;
}

class App extends Component<IProps, IState> {
  state: IState = {
    modalIsShowed: false,
  }

  toggleModal() {
    const {modalIsShowed} = this.state;
    this.setState({modalIsShowed: !modalIsShowed});
  }

  render() {
    return (
      <>
        <Layout className="app">
          <MainInfo/>
          <Donators/>
          <Payments/>
          <Author/>
          <Button
            style={{width: "140px", margin: "15px auto"}}
            type="primary"
            onClick={() => this.toggleModal()}
          >
            Сгенерировать
          </Button>
        </Layout>
        <Modal
          visible={this.state.modalIsShowed}
          width={860}
          footer={null}
          onCancel={() => this.toggleModal()}
        >
          <AfterwordCard/>
        </Modal>
      </>
    );
  }

}

export default App;
