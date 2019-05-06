import React, {Component} from 'react';
import {
  Badge, Button, Card,
  CardBody,
  CardHeader,
  Col, Form, FormGroup, Input, InputGroup, InputGroupAddon,
  Nav,
  NavItem,
  NavLink,
  Pagination, PaginationItem, PaginationLink,
  Row,
  TabContent,
  Table,
  TabPane
} from 'reactstrap';
import CardFooter from "reactstrap/es/CardFooter";

class Cities extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

  lorem() {
    return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice();
    newArray[tabPane] = tab;
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          <Card>

            <CardBody>
              <Table responsive>
                <thead>
                <tr>
                  <th>TT</th>
                  <th>Mô tả</th>
                  <th>Chỉnh sửa</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Bể bơi</td>
                  <td>
                    <Button onClick={this.togglePrimary} className="mr-1"><i className="cui-pencil icons font-lg "></i></Button>
                    <Button onClick={this.togglePrimary} className="mr-1"><i className="cui-trash icons font-lg "></i></Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Siêu thị</td>
                  <td>
                    <Button onClick={this.togglePrimary} className="mr-1"><i className="cui-pencil icons font-lg "></i></Button>
                    <Button onClick={this.togglePrimary} className="mr-1"><i className="cui-trash icons font-lg "></i></Button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Khu tập Gym</td>
                  <td>
                    <Button onClick={this.togglePrimary} className="mr-1"><i className="cui-pencil icons font-lg "></i></Button>
                    <Button onClick={this.togglePrimary} className="mr-1"><i className="cui-trash icons font-lg "></i></Button>
                  </td>
                </tr>
                </tbody>

              </Table>
            </CardBody>
            <CardFooter>
              <Form action="" method="post" className="form-horizontal">
                <FormGroup row>
                  <Col md="12">
                    <InputGroup>
                      <Input type="email" id="input2-group2" name="input2-group2"/>
                      <InputGroupAddon addonType="append">
                        <Button type="button" color="primary">+ Thêm tiện ích</Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Col>
                </FormGroup>

              </Form>

            </CardFooter>
          </Card>
        </TabPane>
      </>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <p className="font-weight-bold">QUẢN LÝ DANH SÁCH TIỆN ÍCH KHU ĐÔ THỊ</p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12" className="mb-4">
            {/*<Nav tabs>*/}
            {/*  <NavItem>*/}
            {/*    <NavLink*/}
            {/*      active={this.state.activeTab[0] === '1'}*/}
            {/*      onClick={() => {*/}
            {/*        this.toggle(0, '1');*/}
            {/*      }}*/}
            {/*    >*/}
            {/*    </NavLink>*/}
            {/*  </NavItem>*/}

            {/*</Nav>*/}
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Cities;
