import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Space } from 'antd';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{
            color: 'white',
            textAlign: 'center',
          }}
        >
          Copyrights &copy; 2021 Cryptomania App
          <br />
          All Rights Reserverd
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </>
  );
};

export default Footer;
