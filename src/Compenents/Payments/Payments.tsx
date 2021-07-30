import React, {Component} from 'react';
import TitleDivider from "../TitleDivider/TitleDivider";
import AddButton from "../AddButton";
import {RootReducer} from "../../Reducers";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import IPayment from "./IPayment";
import {addPayment} from "../../Actions/PaymentsActions";
import {connect, ConnectedProps} from "react-redux";
import PaymentItem from "./PaymentItem";

import "./Payments.scss";

interface IProps extends ConnectedProps<typeof connector>{
}

interface IState {
  currentPaymentId: number;
}

class Payments extends Component<IProps, IState> {
  state: IState = {
    currentPaymentId: 0,
  }

  addPaymentsItem() {
    const {addPayment} = this.props;
    const {currentPaymentId} = this.state;
    addPayment({
      id: currentPaymentId,
      icon: "",
      text: "",
    });
    this.setState({currentPaymentId: currentPaymentId + 1});
  }

  render() {
    return (
      <>
        <TitleDivider
          level={2}
          text="Реквезиты"
        />
        {this.props.payments.map(p => <PaymentItem id={p.id}/>)}
        <AddButton onClick={() => this.addPaymentsItem()}/>
      </>
    );
  }
}

const mapStateToProps = (state: RootReducer) => ({
  payments: state.payments.payments,
});

const dispatchStateToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  addPayment: (paymentData: IPayment) => dispatch(addPayment(paymentData)),
});

const connector = connect(mapStateToProps, dispatchStateToProps);
export default connector(Payments);