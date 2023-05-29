import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import MarketGraph from './MarketGraph';
import MyCurrencies from './MyCurrencies';
import MyPortfolio from './MyPortfolio';
import NewsFeed from './NewsFeed';
import RecentActivity from './RecentActivity';
import TopPerformers from './TopPerformers';
import Trading from './Trading';
import Widgets from './Widgets';
import Widgets1 from './Widgets1';


const DashboardCrypto = () => {
    document.title = "Crypto Dashboard | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* <BreadCrumb title="Crypto" pageTitle="Dashboards" /> */}
                    <Row>
                        <Col className="order-xxl-0 order-first">
                            <Row>
                                {/* <Widgets /> */}
                                <MyCurrencies />
                            </Row>
                        </Col>
                        <RecentActivity />
                    </Row>
                    <Row>
                        <Widgets1 />
                    </Row>
                    <Row>
                        <MarketGraph />
                        <MyPortfolio />
                    </Row>
                    <Row>
                        <Trading />
                        <TopPerformers />
                        <NewsFeed />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default DashboardCrypto;