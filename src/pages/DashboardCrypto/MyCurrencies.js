import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { currencies } from '../../common/data';
import { CardBody, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane, UncontrolledTooltip } from "reactstrap";
import classnames from "classnames";

const MyCurrencies = () => {

    // Default Tabs
    const [activeTab, setactiveTab] = useState("1");
    const toggle = (tab) => {
        if (activeTab !== tab) {
            setactiveTab(tab);
        }
    };


    return (
        <React.Fragment>
            <Nav tabs className="nav-tabs mb-3">
                <NavItem>
                    <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "1", })} onClick={() => { toggle("1"); }} >
                        Spot Grid
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "2", })} onClick={() => { toggle("2"); }} >
                        Future Grid
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "3", })} onClick={() => { toggle("3"); }} >
                        Index Grid
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink style={{ cursor: "pointer" }} className={classnames({ active: activeTab === "4", })} onClick={() => { toggle("4"); }} >
                        Settings
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab} className="text-muted">
                <TabPane tabId="1" id="home">
                    <Col xl={12}>
                        <Card>
                            <CardHeader className="align-items-center d-flex">
                                <h4 className="card-title mb-0 flex-grow-1">Sport Grid</h4>
                                <div className="flex-shrink-0">
                                    <button className="btn btn-soft-primary btn-sm">24H</button>
                                </div>
                                <div className="flex-shrink-0 ms-2">
                                    <UncontrolledDropdown className="card-header-dropdown" direction='start'>
                                        <DropdownToggle className="btn btn-soft-primary btn-sm" role="button" tag="a">
                                            Get Report<i className="mdi mdi-chevron-down align-middle ms-1"></i>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu dropdown-menu-end">
                                            <DropdownItem>Download Report</DropdownItem>
                                            <DropdownItem>Export</DropdownItem>
                                            <DropdownItem>Import</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </CardHeader>
                            <div className="card-body">
                                <div className="table-responsive table-card">
                                    <table className="table table-hover table-borderless table-centered align-middle table-nowrap mb-0">
                                        <thead className="text-muted bg-soft-light">
                                            <tr>
                                                <th>Coin Name</th>
                                                <th>Price</th>
                                                <th>24h Change</th>
                                                <th>Total Balance</th>
                                                <th>Total Coin</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(currencies || []).map((item, key) => (
                                                <tr key={key}>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <img src={item.img} alt="" className="avatar-xxs" />
                                                            </div>
                                                            <div>
                                                                <h6 className="fs-14 mb-0">{item.coinName}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>${item.price}</td>
                                                    <td><h6 className={"fs-13 mb-0 text-" + item.iconClass}><i className={"align-middle me-1 " + item.icon}></i>{item.change}</h6></td>
                                                    <td>${item.balance}</td>
                                                    <td>{item.totalCoin}</td>
                                                    <td><Link to="/apps-crypto-buy-sell" className="btn btn-sm btn-soft-secondary">Trade</Link></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </TabPane>

                <TabPane tabId="2" id="product">
                    <Col xl={12}>
                        <Card>
                            <CardHeader className="align-items-center d-flex">
                                <h4 className="card-title mb-0 flex-grow-1">Future Grid</h4>
                                <div className="flex-shrink-0">
                                    <button className="btn btn-soft-primary btn-sm">24H</button>
                                </div>
                                <div className="flex-shrink-0 ms-2">
                                    <UncontrolledDropdown className="card-header-dropdown" direction='start'>
                                        <DropdownToggle className="btn btn-soft-primary btn-sm" role="button" tag="a">
                                            Get Report<i className="mdi mdi-chevron-down align-middle ms-1"></i>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu dropdown-menu-end">
                                            <DropdownItem>Download Report</DropdownItem>
                                            <DropdownItem>Export</DropdownItem>
                                            <DropdownItem>Import</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </CardHeader>
                            <div className="card-body">
                                <div className="table-responsive table-card">
                                    <table className="table table-hover table-borderless table-centered align-middle table-nowrap mb-0">
                                        <thead className="text-muted bg-soft-light">
                                            <tr>
                                                <th>Coin Name</th>
                                                <th>Price</th>
                                                <th>24h Change</th>
                                                <th>Total Balance</th>
                                                <th>Total Coin</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(currencies || []).map((item, key) => (
                                                <tr key={key}>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <img src={item.img} alt="" className="avatar-xxs" />
                                                            </div>
                                                            <div>
                                                                <h6 className="fs-14 mb-0">{item.coinName}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>${item.price}</td>
                                                    <td><h6 className={"fs-13 mb-0 text-" + item.iconClass}><i className={"align-middle me-1 " + item.icon}></i>{item.change}</h6></td>
                                                    <td>${item.balance}</td>
                                                    <td>{item.totalCoin}</td>
                                                    <td><Link to="/apps-crypto-buy-sell" className="btn btn-sm btn-soft-secondary">Trade</Link></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </TabPane>

                <TabPane tabId="3" id="messages">
                    <Col xl={12}>
                        <Card>
                            <CardHeader className="align-items-center d-flex">
                                <h4 className="card-title mb-0 flex-grow-1">Index Grid</h4>
                                <div className="flex-shrink-0">
                                    <button className="btn btn-soft-primary btn-sm">24H</button>
                                </div>
                                <div className="flex-shrink-0 ms-2">
                                    <UncontrolledDropdown className="card-header-dropdown" direction='start'>
                                        <DropdownToggle className="btn btn-soft-primary btn-sm" role="button" tag="a">
                                            Get Report<i className="mdi mdi-chevron-down align-middle ms-1"></i>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu dropdown-menu-end">
                                            <DropdownItem>Download Report</DropdownItem>
                                            <DropdownItem>Export</DropdownItem>
                                            <DropdownItem>Import</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </div>
                            </CardHeader>
                            <div className="card-body">
                                <div className="table-responsive table-card">
                                    <table className="table table-hover table-borderless table-centered align-middle table-nowrap mb-0">
                                        <thead className="text-muted bg-soft-light">
                                            <tr>
                                                <th>Coin Name</th>
                                                <th>Price</th>
                                                <th>24h Change</th>
                                                <th>Total Balance</th>
                                                <th>Total Coin</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(currencies || []).map((item, key) => (
                                                <tr key={key}>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <img src={item.img} alt="" className="avatar-xxs" />
                                                            </div>
                                                            <div>
                                                                <h6 className="fs-14 mb-0">{item.coinName}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>${item.price}</td>
                                                    <td><h6 className={"fs-13 mb-0 text-" + item.iconClass}><i className={"align-middle me-1 " + item.icon}></i>{item.change}</h6></td>
                                                    <td>${item.balance}</td>
                                                    <td>{item.totalCoin}</td>
                                                    <td><Link to="/apps-crypto-buy-sell" className="btn btn-sm btn-soft-secondary">Trade</Link></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </TabPane>

                <TabPane tabId="4" id="settings">
                    <h6>Settings</h6>
                    <p className="mb-0">
                        Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                        art party before they sold out master cleanse gluten-free squid
                        scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                        art party locavore wolf cliche high life echo park Austin. Cred
                        vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                        farm-to-table VHS.
                    </p>
                </TabPane>
            </TabContent>


        </React.Fragment>
    );
};

export default MyCurrencies;