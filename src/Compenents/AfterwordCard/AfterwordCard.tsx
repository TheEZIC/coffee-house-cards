import React, {Component} from 'react';
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {connect, ConnectedProps} from "react-redux";
import {RootReducer} from "../../Reducers";

import "./AfterwordCard.scss";

import {ReactComponent as SberIcon} from "../../Assets/icons/sber.svg";
import {ReactComponent as YandexIcon} from "../../Assets/icons/yandex.svg";
import {ReactComponent as QiwiIcon} from "../../Assets/icons/qiwi.svg";
import {ReactComponent as PaypalIcon} from "../../Assets/icons/paypal.svg";
import {ReactComponent as WebMoneyIcon} from "../../Assets/icons/webmoney.svg";

import CHAvatar from "../../Assets/CHavatar.jpg";

interface IProps extends ConnectedProps<typeof connector> {
}

interface IState {
}

class AfterwordCard extends Component<IProps, IState> {
  renderMainInfoText() {
    const {mainInfo} = this.props;
    return mainInfo.text.split("\n").map((p, i) => <p key={`p-${i}`} className="afterword-card__text">{p}</p>);
  }

  renderDonators() {
    const {donators} = this.props.donators;
    return donators
      .sort((a, b) => b.sum - a.sum)
      .map((d, i) => (
        <div key={`donator-${i}`} className="card-item donators__item">
          {i < 3 && <div className={`donators__place donators__place--${i + 1}`}/>}
          <span className="donators__name">{d.name}</span>
          <span className="donators__sum">{d.sum}₽</span>
        </div>
      ))
  }

  renderPayments() {
    const {payments} = this.props.payments;

    console.log(payments)

    return payments.map((p, i) => (
      <div className="card-item payments__item">
        {this.getPaymentIcon(p.icon)}
        <span className="payments__data">{p.text}</span>
      </div>
    ))
  }

  getPaymentIcon(type: string) {
    switch (type) {
      case "sber":
        return <SberIcon className="payments__icon"/>;
      case "yandex":
        return <YandexIcon className="payments__icon"/>;
      case "qiwi":
        return <QiwiIcon className="payments__icon"/>;
      case "paypal":
        return <PaypalIcon className="payments__icon"/>;
      case "webmoney":
        return <WebMoneyIcon className="payments__icon"/>;
    }
  }

  render() {
    const {mainInfo, author} = this.props;
    return (
      <div className="afterword-card" id="afterword-card">
        <h2 className="card-title">{mainInfo.title}</h2>
        {this.renderMainInfoText()}

        <h2 className="card-title">Топ донатеров</h2>
        <section className="donators">
          {this.renderDonators()}
        </section>

        <h2 className="card-title">наши реквизиты</h2>
        <section className="payments">
          {this.renderPayments()}
        </section>

        <section className="author">
          <div className="author__left">
            <img src={author.avatar} alt="discord-avatar" className="author__img"/>
            <div className="author__data">
              <span className="author__nickname">{author.nickname}</span>
              <span className="author__tag">{author.tag}</span>
            </div>
          </div>
          <span className="author__center">{author.text}</span>
          <div className="authore__right">
            <img src={CHAvatar} alt="team-avatar" className="author__img"/>
          </div>
        </section>

        <div className="afterword-card__blur"/>
        <img className="afterword-card__bg" src={mainInfo.background}/>
      </div>
    );
  }
}

const mapStateToProps = (state: RootReducer) => ({
  mainInfo: state.mainInfo,
  donators: state.donators,
  payments: state.payments,
  author: state.author,
})

const dispatchStateToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
})

const connector = connect(mapStateToProps, dispatchStateToProps);
export default connector(AfterwordCard);