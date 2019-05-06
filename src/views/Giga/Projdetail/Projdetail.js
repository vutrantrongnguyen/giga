import React, {Component} from 'react';
import {
  Badge, Button, Card,
  CardBody, CardFooter,
  CardHeader,
  Col, Form, FormGroup, FormText, Input, Label,
  Nav,
  NavItem,
  NavLink,
  Pagination, PaginationItem, PaginationLink,
  Row,
  TabContent,
  Table,
  TabPane
} from 'reactstrap';

class Projdetail extends Component {

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
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <Row>
                  <Col xs="6" md="6">
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Tên dự án</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input"/>
                        {/*<FormText color="muted">This is a help text</FormText>*/}
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="email-input">Địa chỉ</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="email" id="email-input" name="email-input" autoComplete="email"/>
                        {/*<FormText className="help-block">Please enter your email</FormText>*/}
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="password-input">Chủ đầu tư</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="password" id="password-input" name="password-input" autoComplete="new-password"/>
                        {/*<FormText className="help-block">Please enter a complex password</FormText>*/}
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="password-input">Ngày khởi công</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="password" id="password-input" name="password-input" autoComplete="new-password"/>
                        {/*<FormText className="help-block">Please enter a complex password</FormText>*/}
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="password-input">Ngày hoàn thành</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="password" id="password-input" name="password-input" autoComplete="new-password"/>
                        {/*<FormText className="help-block">Please enter a complex password</FormText>*/}
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="password-input">Tiện ích</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="password" id="password-input" name="password-input" autoComplete="new-password"/>
                        {/*<FormText className="help-block">Please enter a complex password</FormText>*/}
                      </Col>
                    </FormGroup>


                  </Col>
                  <Col xs="6" md="6">

                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Khu vực</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="text-input" name="text-input" placeholder="Huyện ,Quận ,Thành phố"/>
                          {/*<FormText color="muted">Huyện ,Quận ,Thành phố</FormText>*/}
                        </Col>
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="textarea-input">Giới thiệu về dự án</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label>Trạng thái của dự án</Label>
                  </Col>
                  <Col md="9">
                    <FormGroup check inline>
                      <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1"
                             value="option1"/>
                      <Label className="form-check-label" check htmlFor="inline-checkbox1">Dự án mới </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2"
                             value="option2"/>
                      <Label className="form-check-label" check htmlFor="inline-checkbox2">Dự án đã bàn giao</Label>
                    </FormGroup>
                  </Col>
                </FormGroup>


              {/*<Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Hủy</Button>*/}
              {/*<Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Xem trước</Button>*/}
              {/*<Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Hoàn thành</Button>*/}
              <div className="form-actions">
                <Button type="submit" color="primary">Hủy</Button>
                <Button type="submit" color="info">Xem trước</Button>
                <Button color="secondary">Hoàn thành</Button>
              </div>
              </Form>
            </CardBody>


          </Card>
        </TabPane>
        <TabPane tabId="2">
          <Card>
            <CardBody>
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <Row>

                  <Card>
                    <CardBody>
                      <Table responsive>
                        <thead>
                        <tr>
                          <th></th>
                          <th>Tên tòa</th>
                          <th>Số tầng</th>
                          <th>Số mặt bằng điển hình</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td> Tòa số 1</td>
                          <td><Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input"/>
                          </Col></td>
                          <td><Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input"/>
                          </Col></td>
                          <td>
                            <Col xs="12" md="9">
                              <Input type="text" id="text-input" name="text-input"/>
                            </Col>
                          </td>
                        </tr>
                        </tbody>
                      </Table>

                    </CardBody>
                  </Card>

                </Row>

              </Form>
            </CardBody>
            <Button type="submit" size="sm" color="secondary"><i className="fa fa-dot-circle-o"></i>+ Thêm tòa</Button>
            <CardFooter>
              <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Hủy</Button>
              <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Hoàn thành</Button>
            </CardFooter>
          </Card>
        </TabPane>
        <TabPane tabId="3">
          <Card>
            <CardBody>
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <Row>
                  <Table responsive>
                    <thead>
                    <tr>
                      <th>Tòa số</th>
                      <th>Từ tầng</th>
                      <th>Đến tầng</th>
                      <th>Số căn hộ mẫu</th>
                      <th>Mặt bằng tầng</th>
                      <th>Lưu thông tin</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>R3</td>
                      <td><Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col></td>
                      <td><Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="20"/>
                      </Col></td>
                      <td>
                        <Col xs="12" md="9">
                          <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                        </Col>
                      </td>
                      <td>
                        <Col xs="12" md="9">
                          <Button type="submit" size="sm" color="secondary"><i className="fa fa-camera fa-lg"></i></Button>
                        </Col>
                      </td>
                      <td>
                        <Col xs="12" md="9">
                          <Button type="submit" size="sm" color="primary">Save</Button>
                        </Col>
                      </td>
                    </tr>
                    <tr>
                      <td>R3</td>
                      <td><Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col></td>
                      <td><Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="20"/>
                      </Col></td>
                      <td>
                        <Col xs="12" md="9">
                          <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                        </Col>
                      </td>
                      <td>
                        <Col xs="12" md="9">
                          <Button type="submit" size="sm" color="secondary"> <i className="fa fa-camera fa-lg"></i></Button>
                        </Col>
                      </td>
                      <td>
                        <Col xs="12" md="9">
                          <Button type="submit" size="sm" color="primary">Hủy</Button>
                        </Col>
                      </td>
                    </tr>

                    </tbody>
                  </Table>
                </Row>
              </Form>
            </CardBody>
            <CardFooter>
              <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Hủy</Button>
              <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Hoàn thành</Button>
            </CardFooter>
          </Card>
        </TabPane>
        <TabPane tabId="4">
          <Card>
            <CardBody>
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <FormGroup row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Tòa số</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="1">R1</option>
                        <option value="2">R2</option>
                        <option value="3">R3</option>
                        <option value="4">R4</option>
                        <option value="5">R5</option>
                        <option value="6">R6</option>
                        <option value="7">R7</option>
                        <option value="8">R8</option>
                        <option value="9">R9</option>
                        <option value="10">R10</option>
                        <option value="11">R11</option>
                        <option value="12">R12</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <Row>
                  <Col xs="12" md="3">
                    <Table responsive>
                      <thead>
                      <tr>
                        <th>TT</th>
                        <th>Tên tầng</th>
                        <th></th>

                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary"> Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary"> Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary"> Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary"> Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col xs="12" md="3">
                    <Table responsive>
                      <thead>
                      <tr>
                        <th>TT</th>
                        <th>Tên tầng</th>
                        <th></th>

                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col xs="12" md="3">
                    <Table responsive>
                      <thead>
                      <tr>
                        <th>TT</th>
                        <th>Tên tầng</th>
                        <th></th>

                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary"> Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary"> Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary"> Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary"> Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col xs="12" md="3">
                    <Table responsive>
                      <thead>
                      <tr>
                        <th>TT</th>
                        <th>Tên tầng</th>
                        <th></th>

                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary">Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary"> Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary"> Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary"> Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary"> Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary"> Save</Button>
                          </Col>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>
                          <Col xs="12" md="9">
                            <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                          </Col>
                        </td>
                        <td>
                          <Col xs="12" md="9">
                            <Button type="submit" size="sm" color="primary"> Save</Button>
                          </Col>
                        </td>
                      </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Form>
            </CardBody>
            <CardFooter>
              <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Hoàn thành</Button>
            </CardFooter>
          </Card>
        </TabPane>
        <TabPane tabId="5">
          <Card>
            <CardBody>
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <FormGroup row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Tòa số</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="1">R1</option>
                        <option value="2">R2</option>
                        <option value="3">R3</option>
                        <option value="4">R4</option>
                        <option value="5">R5</option>
                        <option value="6">R6</option>
                        <option value="7">R7</option>
                        <option value="8">R8</option>
                        <option value="9">R9</option>
                        <option value="10">R10</option>
                        <option value="11">R11</option>
                        <option value="12">R12</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>Tòa</th>
                    <th>Tầng</th>
                    <th>Căn hộ mẫu</th>
                    <th>Diện tích TT</th>
                    <th>Diện tích Tim</th>
                    <th>Số PN</th>
                    <th>Số VS</th>
                    <th>Hướng BC</th>
                    <th>Ảnh mặt bằng CH</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>R1</td>
                    <td><Col xs="12" md="9">
                     1|20
                    </Col></td>
                    <td><Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      <Button type="submit" size="sm" color="primary"> Save</Button>
                    </Col></td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Button type="submit" size="sm" color="secondary"><i className="fa fa-camera fa-lg"></i></Button>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Button type="submit" size="sm" color="primary">Save</Button>
                      </Col>
                    </td>
                  </tr>
                  <tr>
                    <td>R2</td>
                    <td><Col xs="12" md="9">
                      1|20
                    </Col></td>
                    <td><Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      <Button type="submit" size="sm" color="primary">Save</Button>
                    </Col></td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Button type="submit" size="sm" color="secondary"><i className="fa fa-camera fa-lg"></i></Button>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Button type="submit" size="sm" color="primary">Save</Button>
                      </Col>
                    </td>
                  </tr>
                  <tr>
                    <td>R3</td>
                    <td><Col xs="12" md="9">
                      1|20
                    </Col></td>
                    <td><Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      <Button type="submit" size="sm" color="primary">Save</Button>
                    </Col></td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Button type="submit" size="sm" color="secondary"><i className="fa fa-camera fa-lg"></i></Button>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Button type="submit" size="sm" color="primary">Save</Button>
                      </Col>
                    </td>
                  </tr>
                  <tr>
                    <td>R4</td>
                    <td><Col xs="12" md="9">
                      1|20
                    </Col></td>
                    <td><Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      <Button type="submit" size="sm" color="primary">Save</Button>
                    </Col></td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Button type="submit" size="sm" color="secondary"><i className="fa fa-camera fa-lg"></i></Button>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Button type="submit" size="sm" color="primary">Save</Button>
                      </Col>
                    </td>
                  </tr>
                  <tr>
                    <td>R5</td>
                    <td><Col xs="12" md="9">
                      1|20
                    </Col></td>
                    <td><Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      <Button type="submit" size="sm" color="primary">Save</Button>
                    </Col></td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="1"/>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Button type="submit" size="sm" color="secondary"><i className="fa fa-camera fa-lg"></i></Button>
                      </Col>
                    </td>
                    <td>
                      <Col xs="12" md="9">
                        <Button type="submit" size="sm" color="primary">Save</Button>
                      </Col>
                    </td>
                  </tr>
                  </tbody>
                </Table>
              </Form>
            </CardBody>
            <CardFooter>
              <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Hoàn thành</Button>
            </CardFooter>
          </Card>
        </TabPane>

      </>
    )
      ;
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>

          <Col xs="12" md="6" >
            <p className="font-weight-bold">QUẢN LÝ CHI TIẾT DỰ ÁN,CÁC DỮ LIỆU NHẬP</p>
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
            <p></p>
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => {
                    this.toggle(0, '1');
                  }}
                >
                  (1)Thông tin chung của dự án
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => {
                    this.toggle(0, '2');
                  }}
                >
                  (2)Cập nhật thông tin tòa
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => {
                    this.toggle(0, '3');
                  }}
                >
                  (3)Tải mặt bằng
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '4'}
                  onClick={() => {
                    this.toggle(0, '4');
                  }}
                >
                  (4)Điều chỉnh tên tầng
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '5'}
                  onClick={() => {
                    this.toggle(0, '5');
                  }}
                >
                  (5)Chỉnh sửa căn hộ
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

export default Projdetail;
