import React, {Component} from 'react';
import {Col, Image, Input, Row, Upload} from "antd";
import TitleDivider from "../TitleDivider/TitleDivider";
import ImageDrop from "../ImageDrop/ImageDrop";
import {RootReducer} from "../../Reducers";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {connect, ConnectedProps} from "react-redux";
import IAuthor from "./IAuthor";
import {updateAuthor} from "../../Actions/AuthorActions";

import "./Author.scss";


interface IProps extends ConnectedProps<typeof connector> {
}

interface IState {
  avatar: string;
}

class Author extends Component<IProps, IState> {
  state: IState = {
    avatar: "",
  }

  nicknameInput = React.createRef<Input>();
  tagInput = React.createRef<Input>();
  textInput = React.createRef<Input>();

  onChange() {
    const {updateAuthor} = this.props;
    const {avatar} = this.state;
    const nickname = this.nicknameInput.current?.input.value ?? "";
    const tag = this.tagInput.current?.input.value ?? "";
    const text = this.textInput.current?.input.value ?? "";

    updateAuthor({
      avatar,
      nickname,
      tag,
      text,
    });
  }

  render() {
    return (
      <>
        <TitleDivider
          level={2}
          text="Автор"
        />
        <Row className="input-group">
          <ImageDrop
            placeholder="Аватарка"
            onFile={avatar => {
              this.setState({avatar});
              this.onChange();
            }}
          />
        </Row>
        <Row className="input-group">
          <Col span={12}>
            <Input
              placeholder="Никнейм"
              ref={this.nicknameInput}
              onChange={() => this.onChange()}
            />
          </Col>
          <Col span={12}>
            <Input
              placeholder="Тег"
              ref={this.tagInput}
              onChange={() => this.onChange()}
            />
          </Col>
        </Row>
        <Row className="input-group">
          <Col span={24}>
            <Input
              placeholder="Текст"
              ref={this.textInput}
              onChange={() => this.onChange()}
            />
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state: RootReducer) => ({
})

const dispatchStateToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  updateAuthor: (authorData: IAuthor) => dispatch(updateAuthor(authorData))
})

const connector = connect(mapStateToProps, dispatchStateToProps);
export default connector(Author);