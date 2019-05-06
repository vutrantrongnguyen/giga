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

class Combrockers extends Component {

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
                  <th>Mã Cty</th>
                  <th>Logo</th>
                  <th>Tên công ty</th>
                  <th>Số điện thoại</th>
                  <th>Dự án được PP</th>
                  <th>Xem trước</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td><Button onClick={this.togglePrimary} className="mr-1">Xem</Button></td>
                  <td>
                    <Button onClick={this.togglePrimary} className="mr-1"><i className="fa fa-eye "></i></Button>
                    <Button onClick={this.togglePrimary} className="mr-1"><i className="cui-pencil icons font-lg "></i></Button>
                    <Button onClick={this.togglePrimary} className="mr-1"><i className="cui-trash icons font-lg "></i></Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td><Button onClick={this.togglePrimary} className="mr-1">Xem</Button></td>
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
        <TabPane tabId="2">
          {/*{`2. ${this.lorem()}`}*/}
          <Card>
            <CardBody>
              <Table responsive>
                <thead>
                <tr>
                  <th>Mã Cty</th>
                  <th>Logo</th>
                  <th>Tên công ty</th>
                  <th>Số điện thoại</th>
                  <th>Nút lệnh</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td><Button onClick={this.togglePrimary} className="mr-1">Đồng ý</Button><Button onClick={this.togglePrimary} className="mr-1">Từ chối</Button></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td><Button onClick={this.togglePrimary} className="mr-1">Đồng ý</Button><Button onClick={this.togglePrimary} className="mr-1">Từ chối</Button></td>
                </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </TabPane>
      </>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>

          <Col xs="12" md="6" >
            <p className="font-weight-bold">QUẢN LÝ DANH SÁCH CÔNG TY MÔI GIỚI</p>
          </Col>
          <Col xs="12" md="6">
            <Button block color="info" className="btn btn-primary float-right" style={{width: 200}}><a href="/addcombrocker">+Thêm công ty môi giới</a></Button>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => {
                    this.toggle(0, '1');
                  }}
                >
                  Danh sách công ty môi giới
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => {
                    this.toggle(0, '2');
                  }}
                >
                  Danh sách yêu cầu
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Combrockers;
