import React, {Component} from 'react';
import TitleDivider from "../TitleDivider/TitleDivider";
import {Col, Input, Row} from "antd";
import {connect, ConnectedProps} from "react-redux";
import {RootReducer} from "../../Reducers";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import IMainInfo from "./IMainInfo";
import {updateMainInfo} from "../../Actions/MainInfoActions";
import ImageDrop from "../ImageDrop/ImageDrop";

interface IProps extends ConnectedProps<typeof connector>{
}

interface IState {
  text: string;
  background: string;
}

class MainInfo extends Component<IProps, IState> {
  state: IState = {
    text: "",
    background: "",
  }

  titleInput = React.createRef<Input>();
  textInput = React.createRef<Input>();

  onChange() {
    const {updateMainInfo} = this.props;
    const title = this.titleInput.current?.input?.value ?? "";
    const {text, background} = this.state;

    updateMainInfo({
      title,
      text,
      background,
    });
  }

  render() {
    return (
      <>
        <TitleDivider text="Кофейный домик"/>
        <Row className="input-group">
          <Col span ={24}>
            <Input
              placeholder="Заголовок"
              ref={this.titleInput}
              onChange={() => this.onChange()}
            />
          </Col>
        </Row>
        <Row className="input-group">
          <Col span={24}>
            <Input.TextArea
              placeholder="Контент"
              ref={this.textInput}
              onChange={e => {
                this.setState({text: e.target.value});
                this.onChange();
              }}
            />
          </Col>
        </Row>
        <Row className="input-group">
          <ImageDrop
            placeholder="Бекграунд"
            onFile={bg => {
              this.setState({background: bg});
              this.onChange();
            }}
          />
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state: RootReducer) => ({
})

const dispatchStateToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  updateMainInfo: (mainInfoData: IMainInfo) => dispatch(updateMainInfo(mainInfoData))
})

const connector = connect(mapStateToProps, dispatchStateToProps);
export default connector(MainInfo);