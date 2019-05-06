import React, {Component} from 'react';
import {
  Badge, Card,
  CardBody,
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

class Projbuy extends Component {

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
                  <th>Mã căn<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                  <th>Tầng<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                  <th>Số căn hộ<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                  <th>Công ty môi giới</th>
                  <th>Tên khách hàng</th>
                  <th>Số điện thoại</th>
                  <th>Ngày giờ cọc</th>
                  <th>Trạng thái</th>
                  <th>Giá</th>
                  <th>Chi tiết</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>#001</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>

                  <td>
                    <Badge color="secondary"><a href="/trandetail"><i className="fa fa-eye"></i></a></Badge>
                  </td>
                </tr>
                <tr>
                  <td>#001</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>

                  <td>
                    <Badge color="secondary"> <a href="/trandetail"><i className="fa fa-eye"></i></a></Badge>
                  </td>
                </tr>
                <tr>
                  <td>#001</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>

                  <td>
                    <Badge color="secondary"><a href="/trandetail"><i className="fa fa-eye"></i></a></Badge>
                  </td>
                </tr>
                <tr>
                  <td>#001</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>

                  <td>
                    <Badge color="secondary"><a href="/trandetail"><i className="fa fa-eye"></i></a></Badge>
                  </td>
                </tr>
                <tr>
                  <td>#001</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>

                  <td>
                    <Badge color="secondary"><a href="/trandetail"><i className="fa fa-eye"></i></a></Badge>
                  </td>
                </tr>
                </tbody>
              </Table>

            </CardBody>
          </Card>
        </TabPane>
        <TabPane tabId="2">
          <Card>
            <CardBody>
              <Table responsive>
                <thead>
                <tr>
                  <th>Mã căn<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                  <th>Tầng<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                  <th>Số căn hộ<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                  <th>Công ty môi giới</th>
                  <th>Tên khách hàng</th>
                  <th>Số điện thoại</th>
                  <th>Ngày giờ cọc</th>
                  <th>Trạng thái</th>
                  <th>Giá</th>
                  <th>Chi tiết</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>#001</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>

                  <td>
                    <Badge color="secondary"><a href="/trandetail"><i className="fa fa-eye"></i></a></Badge>
                  </td>
                </tr>
                <tr>
                  <td>#001</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>

                  <td>
                    <Badge color="secondary"><a href="/trandetail"><i className="fa fa-eye"></i></a></Badge>
                  </td>
                </tr>
                <tr>
                  <td>#001</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>

                  <td>
                    <Badge color="secondary"><a href="/trandetail"><i className="fa fa-eye"></i></a></Badge>
                  </td>
                </tr>
                <tr>
                  <td>#001</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>

                  <td>
                    <Badge color="secondary"><a href="/trandetail"><i className="fa fa-eye"></i></a></Badge>
                  </td>
                </tr>
                <tr>
                  <td>#001</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>

                  <td>
                    <Badge color="secondary"><a href="/trandetail"><i className="fa fa-eye"></i></a></Badge>
                  </td>
                </tr>
                </tbody>
              </Table>

            </CardBody>
          </Card>
        </TabPane>
        <TabPane tabId="3">
          <Card>
            <CardBody>
              <Table responsive>
                <thead>
                <tr>
                  <th>Mã căn<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                  <th>Tầng<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                  <th>Số căn hộ<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                  <th>Công ty môi giới</th>
                  <th>Tên khách hàng</th>
                  <th>Số điện thoại</th>
                  <th>Ngày giờ cọc</th>
                  <th>Trạng thái</th>
                  <th>Giá</th>
                  <th>Chi tiết</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>#001</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>

                  <td>
                    <Badge color="secondary"><a href="/trandetail"><i className="fa fa-eye"></i></a></Badge>
                  </td>
                </tr>
                <tr>
                  <td>#001</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>

                  <td>
                    <Badge color="secondary"><a href="/trandetail"><i className="fa fa-eye"></i></a></Badge>
                  </td>
                </tr>
                <tr>
                  <td>#001</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>

                  <td>
                    <Badge color="secondary"><a href="/trandetail"><i className="fa fa-eye"></i></a></Badge>
                  </td>
                </tr>
                <tr>
                  <td>#001</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>

                  <td>
                    <Badge color="secondary"><a href="/trandetail"><i className="fa fa-eye"></i></a></Badge>
                  </td>
                </tr>
                <tr>
                  <td>#001</td>
                  <td>1</td>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>

                  <td>
                    <Badge color="secondary"><a href="/trandetail"><i className="fa fa-eye"></i></a></Badge>
                  </td>
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
            <p className="font-weight-bold">QUẢN LÝ BÁN HÀNG THEO DỰ ÁN</p>
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
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => {
                    this.toggle(0, '1');
                  }}
                >
                  Tòa 1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => {
                    this.toggle(0, '2');
                  }}
                >
                  Tòa 2
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => {
                    this.toggle(0, '3');
                  }}
                >
                  Tòa 3
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

export default Projbuy;
