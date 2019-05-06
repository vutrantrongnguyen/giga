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

class Conflictpost extends Component {

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
                  <th>Người đăng<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                  <th>Ngày<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                  <th>Dự án<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                  <th>Chủ đầu tư<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                  <th>Khu vực<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                  <th>báo xấu<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                  <th>Chi tiết</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                  <td><i className="fa fa-user-circle fa-lg"></i>  Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td><i className="fa fa-eye fa-lg"></i></td>

                </tr>
                <tr>
                  <td><i className="fa fa-user-circle fa-lg"></i>  Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td><i className="fa fa-eye fa-lg"></i></td>

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
        <Row> <Col xs="12" md="6" >
          <p className="font-weight-bold"> QUẢN LÝ TIN XUNG ĐỘT</p>
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

export default Conflictpost;
