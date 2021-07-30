import React, {Component, ReactNode} from 'react';
import TitleDivider from "../TitleDivider/TitleDivider";
import AddButton from "../AddButton";
import {RootReducer} from "../../Reducers";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {addOrUpdateDonator} from "../../Actions/DonatorsActions";
import {IDonator} from "./IDonator";
import {connect, ConnectedProps} from "react-redux";
import DonatorItem from "./DonatorItem";

interface IProps extends ConnectedProps<typeof connector> {
}

interface IState {
  currentDonatorId: number;
}

class Donators extends Component<IProps, IState> {
  state: IState = {
    currentDonatorId: 0,
  }

  addDonatorItem() {
    const {addOrUpdateDonator} = this.props;
    const {currentDonatorId} = this.state;
    addOrUpdateDonator({
      id: currentDonatorId,
      name: "",
      sum: 0,
    });
    this.setState({currentDonatorId: currentDonatorId + 1});
  }

  render() {
    return (
      <>
        <TitleDivider
          level={2}
          text="Топ донатеров"
        />
        {this.props.donators.donators.map(d => <DonatorItem id={d.id} key={d.id}/>)}
        <AddButton onClick={() => this.addDonatorItem()}/>
      </>
    );
  }
}

const mapStateToProps = (state: RootReducer) => ({
  donators: state.donators,
});

const dispatchStateToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  addOrUpdateDonator: (donatorData: IDonator) => dispatch(addOrUpdateDonator(donatorData)),
});

const connector = connect(mapStateToProps, dispatchStateToProps);
export default connector(Donators);