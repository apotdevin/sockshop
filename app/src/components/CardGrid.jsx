import React from "react";
import { SockCard } from "./SockCard";
import { Row, Col } from "antd";

export const CardGrid = () => (
  <Row justify="end">
    <Col xs={24} sm={24} lg={12} xl={8}>
      <SockCard title={"Bitcoin Socks"} coin={"bitcoin"} price={10}/>
    </Col>
    <Col xs={24} sm={24} lg={12} xl={8}>
      <SockCard title={"Digibyte Socks"} coin={"digibyte"} price={5}/>
    </Col>
    <Col xs={24} sm={24} lg={24} xl={8}>
      <SockCard title={"Monero Socks"} coin={"monero"} price={25}/>
    </Col>
  </Row>
);
