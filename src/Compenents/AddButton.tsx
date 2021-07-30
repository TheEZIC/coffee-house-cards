import React, {Component} from 'react';
import {PlusOutlined} from "@ant-design/icons";
import {Button, Col, Row} from "antd";

interface IProps {
  onClick: () => void;
}

interface IState {
}

class AddButton extends Component<IProps, IState> {
  render() {
    return (
      <Row>
        <Col span={24}>
          <Button
            icon={<PlusOutlined />}
            size="middle"
            onClick={this.props.onClick}
            block
          />
        </Col>
      </Row>
    );
  }
}

export default AddButton;