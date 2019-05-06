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

class Addinvestor extends Component {

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
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="file-input">Logo công ty</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="file" id="file-input" name="file-input" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Tên công ty (Tên thương hiệu)</Label>
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
                    <Label htmlFor="text-input">Khu vực</Label>
                  </Col>
                  <Col md="3">
                    <Input type="select" name="select" id="select">
                      <option value="0">Quận</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </Input>
                  </Col>
                  <Col md="3">
                    <Input type="select" name="select" id="select">
                      <option value="0">Huyện</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </Input>
                  </Col>
                  <Col md="3">
                    <Input type="select" name="select" id="select">
                      <option value="0">Thành phố</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="password-input">Số điện thoại</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="password" id="password-input" name="password-input" autoComplete="new-password"/>
                    {/*<FormText className="help-block">Please enter a complex password</FormText>*/}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="password-input">Email</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="password" id="password-input" name="password-input" autoComplete="new-password"/>
                    {/*<FormText className="help-block">Please enter a complex password</FormText>*/}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="password-input">Website</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="password" id="password-input" name="password-input" autoComplete="new-password"/>
                    {/*<FormText className="help-block">Please enter a complex password</FormText>*/}
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label>Có nhân viên môi giới</Label>
                  </Col>
                  <Col md="9">
                    <FormGroup check inline>
                      <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1"
                             value="option1"/>
                      <Label className="form-check-label" check htmlFor="inline-checkbox1">Có</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2"
                             value="option2"/>
                      <Label className="form-check-label" check htmlFor="inline-checkbox2">Không</Label>
                    </FormGroup>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="textarea-input">Giới thiệu về công ty</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="password-input">Tối ưu từ khóa</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="password" id="password-input" name="password-input" autoComplete="new-password"/>
                    {/*<FormText className="help-block">Please enter a complex password</FormText>*/}
                  </Col>
                </FormGroup>
                <div className="form-actions">
                  <Button type="submit" color="primary">Hủy</Button>
                  <Button type="submit" color="info">Xem trước</Button>
                  <Button color="secondary">Hoàn thành</Button>
                </div>
              </Form>
            </CardBody>


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
          <Col xs="12" md="6">
            <p className="font-weight-bold">THÊM CHỦ ĐẦU TƯ</p>
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
            {/*      (1)Thông tin chung của dự án*/}
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

export default Addinvestor;
