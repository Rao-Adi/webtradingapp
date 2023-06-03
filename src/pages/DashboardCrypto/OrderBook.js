import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { currencies } from '../../common/data';
const OrderBook = () => {
    return (
        <React.Fragment>
            <Col xxl={4} lg={6}>
                <Card className="card-height-100"> 
                    <CardBody className="order-book-sm p-0">
                        <table >
                            <tr>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Total</th>
                            </tr>
                            {(currencies || []).map((item, key) => (
                                <tr  key={key}>
                                    <td>{item.price}</td>
                                    <td>{item.balance}</td>
                                    <td>{item.totalCoin}</td>
                                    <div className="progress-bar ask-bar" ></div>
                                </tr>
                                 
                            ))}
                        </table>
                    </CardBody>
                </Card>
            </Col>
 

        </React.Fragment>
    );
};

export default OrderBook;


 