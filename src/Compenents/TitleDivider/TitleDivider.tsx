import React, {Component} from 'react';
import {Col, Row, Typography} from "antd";

import "./TitleDivider.scss";

interface IProps {
  level: 1 | 2 | 3 | 4 | 5 | undefined;
  text: string;
}

interface IState {
}

class TitleDivider extends Component<IProps, IState> {
  static defaultProps = {
    level: 1,
    text: "",
  }

  render() {
    const {level, text} = this.props;
    return (
      <Row>
        <Col span={24}>
          <Typography.Title className="title" level={level}>{text}</Typography.Title>
        </Col>
      </Row>
    );
  }
}

export default TitleDivider;