import React, {Component} from 'react';
import {Button, Col, Input, Row} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {connect, ConnectedProps} from "react-redux";
import {RootReducer} from "../../Reducers";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {IDonator} from "./IDonator";
import {addOrUpdateDonator, deleteDonator} from "../../Actions/DonatorsActions";

interface IProps extends ConnectedProps<typeof connector> {
  id: number;
}

interface IState {
}

class DonatorItem extends Component<IProps, IState> {
  nameInput = React.createRef<Input>();
  sumInput = React.createRef<Input>();

  onChange() {
    const nameValue = this.nameInput.current?.input.value ?? "";
    const sumValue = this.sumInput.current?.input.value ?? "";
    const {id} = this.props;

    this.props.addOrUpdateDonator({
      id,
      name: nameValue,
      sum: Number(sumValue),
    });
  }

  deleteItem() {
    const nameValue = this.nameInput.current?.input.value ?? "";
    const sumValue = this.sumInput.current?.input.value ?? "";
    const {id} = this.props;

    this.props.deleteDonator({
      id,
      name: nameValue,
      sum: Number(sumValue),
    });
  }

  render() {
    return (
      <Row className="input-group">
        <Col span={11}>
          <Input
            placeholder="Имя донатера"
            ref={this.nameInput}
            onChange={() => this.onChange()}
          />
        </Col>
        <Col span={11}>
          <Input
            placeholder="Сумма"
            suffix="₽"
            ref={this.sumInput}
            onChange={() => this.onChange()}
          />
        </Col>
        <Col span={2}>
          <Button
            type="primary"
            shape="round"
            icon={<DeleteOutlined />}
            size="middle"
            danger
            onClick={() => this.deleteItem()}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state: RootReducer) => ({
  donators: state.donators.donators,
})

const dispatchStateToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  addOrUpdateDonator: (donatorData: IDonator) => dispatch(addOrUpdateDonator(donatorData)),
  deleteDonator: (donatorData: IDonator) => dispatch(deleteDonator(donatorData)),
})

const connector = connect(mapStateToProps, dispatchStateToProps);
export default connector(DonatorItem);