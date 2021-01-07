import React from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { Wrapper } from './styled';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <div className="header-wrapper">
        <Row className="header">
          <Col span={7}>
            <p className="name">Huy Dep trai</p>
            <p className="caption">Dep trai nhat la anh </p>
          </Col>
          <Col span={8}>
            <div className="menu-wrapper">
              <ul className="list">
                <li className="item">
                  <Link>Trang Chủ</Link>
                </li>
                <li className="item">
                  <Link>Lịch sử giao dịch</Link>
                </li>
                <li className="item">
                  <Link>Báo cáo thu chi</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col span={9}>
            <div className="setting-wrapper"></div>
          </Col>
        </Row>
      </div>
      {children}
    </Wrapper>
  );
};

export default Layout;
