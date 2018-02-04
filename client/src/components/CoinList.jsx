import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Coin from './Coin.jsx';

const CoinList = props => (
  <div className="coinList">
    <ul>
      <li>Rank</li>
      <li>Name</li>
      <li>Price</li>
      <li>BTC Price</li>
      <li>Change (24H)</li>
    </ul>
    {props.coinList.map(coin => (
      <Coin
        coin={coin}
        key={coin.id}
      />
    ))}
  </div>
);

CoinList.propTypes = {
  coinList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CoinList;