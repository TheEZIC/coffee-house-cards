import React, {Component} from 'react';
import {Col, Row, Input, Select, Button} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {RefSelectProps} from "antd/es/select";
import {RootReducer} from "../../Reducers";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import IPayment from "./IPayment";
import {deletePayment, updatePayment} from "../../Actions/PaymentsActions";
import {connect, ConnectedProps} from "react-redux";

interface IProps extends ConnectedProps<typeof connector> {
  id: number;
}

interface IState {
  paymentTypeSelectValue: string;
}

class PaymentItem extends Component<IProps, IState> {
  state: IState = {
    paymentTypeSelectValue: "sber",
  }

  valueInput = React.createRef<Input>();

  componentDidMount() {
    this.onChange();
  }

  onChange() {
    const {updatePayment, id} = this.props;
    const {paymentTypeSelectValue} = this.state;
    const paymentValue = this.valueInput.current?.input.value!;

    updatePayment({
      id,
      icon: paymentTypeSelectValue,
      text: paymentValue,
    });
  }

  deleteItem() {
    const {deletePayment, id} = this.props;
    const {paymentTypeSelectValue} = this.state;
    const paymentValue = this.valueInput.current?.input.value!;

    deletePayment({
      id,
      icon: paymentTypeSelectValue,
      text: paymentValue,
    });
  }

  render() {
    return (
      <Row className="input-group">
        <Col span={22}>
          <Input.Group compact className="payments__input-group">
            <Select
              defaultValue="sber"
              className="payments__select"
              onChange={value => {
                this.setState({paymentTypeSelectValue: value}, this.onChange);
              }}
            >
              <Select.Option value="sber">Сбербанк</Select.Option>
              <Select.Option value="yandex">Яндекс</Select.Option>
              <Select.Option value="paypal">PayPal</Select.Option>
              <Select.Option value="qiwi">Qiwi</Select.Option>
              <Select.Option value="webmoney">WebMoney</Select.Option>
            </Select>
            <Input
              className="payments__input"
              placeholder="Значение"
              ref={this.valueInput}
              onChange={() => this.onChange()}
            />
          </Input.Group>
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
})

const dispatchStateToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  updatePayment: (paymentData: IPayment) => dispatch(updatePayment(paymentData)),
  deletePayment: (paymentData: IPayment) => dispatch(deletePayment(paymentData)),
})

const connector = connect(mapStateToProps, dispatchStateToProps);
export default connector(PaymentItem);