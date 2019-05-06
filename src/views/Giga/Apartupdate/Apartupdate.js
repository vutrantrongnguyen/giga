import React, {Component} from 'react';
import {
  Badge, Button, Card,
  CardBody, CardFooter,
  CardHeader,
  Col, FormGroup, Input,
  Nav,
  NavItem,
  NavLink,
  Pagination, PaginationItem, PaginationLink,
  Row,
  TabContent,
  Table,
  TabPane
} from 'reactstrap';

class Apartupdate extends Component {

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
                  <th>Chọn tòa</th>
                  <th>Chọn tầng</th>
                  <th>Chọn số căn hộ</th>
                  <th>Load bảng giá</th>
                  <th>Chính sách PP</th>
                  <th>Trạng thái</th>
                  <th>Xác nhận</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <Input type="select" name="ccyear" id="ccyear">
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                  </Input>
                  </td>
                  <td>
                    <Input type="select" name="ccyear" id="ccyear">
                      <option></option>
                      <option></option>
                      <option></option>
                      <option></option>
                  </Input>
                  </td>
                  <td> <Input type="select" name="ccyear" id="ccyear">
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                  </Input></td>
                  <td><button onClick={this.togglePrimary} className="mr-1">upload</button></td>
                  <td> <Input type="select" name="ccyear" id="ccyear">
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                  </Input></td>
                  <td> <Input type="select" name="ccyear" id="ccyear">
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                  </Input></td>
                  <td><button onClick={this.togglePrimary} className="mr-1">Hủy</button><button onClick={this.togglePrimary} className="mr-1">Xác nhận</button></td>
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
            <p className="font-weight-bold">CẬP NHẬT NHANH GIÁ ,PHÂN PHỐI VÀ TRẠNG THÁI CĂN HỘ</p>
          </Col>
          <Col xs="12" md="6">
            <Row><Col xs="12" md="6"></Col>
              <Col xs="12" md="6">
                <Input type="select" name="select" id="select">
                  <option value="0">Chọn dự án cần nhập liệu</option>
                  <option value="1">Option #1</option>
                  <option value="2">Option #2</option>
                  <option value="3">Option #3</option>
                </Input>
              </Col>
            </Row>
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

export default Apartupdate;
