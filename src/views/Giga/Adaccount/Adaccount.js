import React, {Component} from 'react';
import {
  Badge, Button, Card,
  CardBody,
  CardHeader,
  Col,
  Nav,
  NavItem,
  NavLink,
  Pagination, PaginationItem, PaginationLink,
  Row,
  TabContent,
  Table,
  TabPane
} from 'reactstrap';

class Adaccount extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }



  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice();
    newArray[tabPane] = tab;
    this.setState({
      activeTab: newArray,
    });
  }



  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6">
            <p className="font-weight-bold">TÀI KHOẢN ADMIN CỦA TRANG WEB</p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12" className="mb-4">

            <Nav tabs>
              <NavItem>
                <NavLink>

                  <TabPane tabId="2">
                    <Card>
                      <CardBody>
                        <Table responsive>
                          <thead>
                          <tr>
                            <th>ID</th>
                            <th>Họ tên </th>
                            <th>Số ĐT</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Nút lệnh</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>#001</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>
                              <Button onClick={this.togglePrimary} className="mr-1"><i className="fa fa-eye "></i></Button>
                              <Button onClick={this.togglePrimary} className="mr-1"><i className="cui-pencil icons font-lg "></i></Button>
                              <Button onClick={this.togglePrimary} className="mr-1"><i className="cui-trash icons font-lg "></i></Button>
                            </td>
                          </tr>
                          <tr>
                            <td>#001</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>
                              <Button onClick={this.togglePrimary} className="mr-1"><i className="fa fa-eye "></i></Button>
                              <Button onClick={this.togglePrimary} className="mr-1"><i className="cui-pencil icons font-lg "></i></Button>
                              <Button onClick={this.togglePrimary} className="mr-1"><i className="cui-trash icons font-lg "></i></Button>
                            </td>
                          </tr>
                          </tbody>
                        </Table>

                      </CardBody>
                    </Card>
                  </TabPane>
                </NavLink>
              </NavItem>

            </Nav>
            {/*<TabContent activeTab={this.state.activeTab[1]}>*/}
            {/*  {this.tabPane()}*/}
            {/*</TabContent>*/}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Adaccount;
