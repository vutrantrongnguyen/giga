import React, {Component} from 'react';
import {
  Badge, Button, Card,
  CardBody,
  CardHeader,
  Col, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label,
  Nav,
  NavItem,
  NavLink,
  Pagination, PaginationItem, PaginationLink,
  Row,
  TabContent,
  Table,
  TabPane
} from 'reactstrap';

class Customerbuy extends Component {

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
          <Col xs="12" md="6" >
            <p className="font-weight-bold">QUẢN LÝ BÁN THEO KHÁCH HÀNG</p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12" className="mb-4">
            <Col xs="12" sm="6">
              <Card>
                <CardBody>
                  <Form action="" method="post">
                    <FormGroup row>
                      <Col md="12">
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <Button type="button" color="primary"><i className="fa fa-search"></i> Tìm kiếm</Button>
                          </InputGroupAddon>
                          <Input type="text" id="input1-group2" name="input1-group2" placeholder="Mã căn, tên khách hàng, số điện thoại" />
                        </InputGroup>
                      </Col>
                    </FormGroup>

                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Nav tabs>
              <NavItem>
                <NavLink>

                  <TabPane tabId="2">
                    <Card>
                      <CardBody>
                        <Table responsive>
                          <thead>
                          <tr>
                            <th>Mã căn<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                            <th>Chủ đầu tư<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                            <th>Công ty môi giới<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                            <th>Tên khách hàng<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                            <th>Số điện thoại<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                            <th>Ngày giờ cọc</th>
                            <th>Trạng thái</th>
                            <th>Chi tiết</th>
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
                            <td>Hiển thị</td>
                            <td>
                              <Button onClick={this.togglePrimary} className="mr-1"><a href="/trandetail"><i className="fa fa-eye"></i></a></Button>

                            </td>
                          </tr>
                          <tr>
                            <td>#001</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>
                              <Button onClick={this.togglePrimary} className="mr-1"><a href="/trandetail"><i className="fa fa-eye"></i></a></Button>

                            </td>
                          </tr>
                          <tr>
                            <td>#001</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>
                              <Button onClick={this.togglePrimary} className="mr-1"><a href="/trandetail"><i className="fa fa-eye"></i></a></Button>

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

export default Customerbuy;
