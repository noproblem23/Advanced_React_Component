import { Component } from 'react';
import withData from '../lib/withData';
import Items from '../components/Items';
import CreateItem from '../components/CreateItem';
import Signup from '../components/Signup';
import LoginAuth0 from '../components/LoginAuth0';
import Page from '../components/Page';
import OrderList from '../components/OrderList';

class Orders extends Component {
  render() {
    return (
      <Page>
        <h2>My Orders</h2>
        <OrderList/>
      </Page>
    )
  }
}

export default Orders;
