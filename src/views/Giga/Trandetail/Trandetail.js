import React, {Component} from 'react';
import {
  Badge, Button, Card,
  CardBody,
  CardHeader,
  Col, Form, FormGroup, Input, Label, ListGroup, ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  Pagination, PaginationItem, PaginationLink,
  Row,
  TabContent,
  Table,
  TabPane
} from 'reactstrap';

class Trandetail extends Component {

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
            <p className="font-weight-bold">THỐNG KÊ BÁO CÁO</p>
          </Col>
        </Row>
        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
        <Row>
          <Col sm="12" xl="12">
            <Card>
              <CardHeader>
                <strong>Thông tin căn hộ</strong>

              </CardHeader>
              <CardBody>
                <ListGroup>
                  <Row>
                    <Col sm="12" xl="4">
                      <ListGroupItem>Mã căn : Hiển thị</ListGroupItem>
                      <ListGroupItem>Dự án : Hiển thị</ListGroupItem>
                      <ListGroupItem> Giá tiền: Hiển thị</ListGroupItem>
                      <ListGroupItem> Diện tích tim tường: Hiển thị</ListGroupItem>
                      <ListGroupItem>Số PN: Hiển thị</ListGroupItem>
                    </Col>
                    <Col sm="12" xl="4">
                      <ListGroupItem> Diện tích thông thủy: Hiển thị</ListGroupItem>
                      <ListGroupItem>Số PT: Hiển thị</ListGroupItem>

                    </Col>
                    <Col sm="12" xl="4">
                      <ListGroupItem>Hướng BC: Hiển thị</ListGroupItem>

                    </Col>
                  </Row>

                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <strong>Thông tin khách hàng đặt cọc</strong>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem>Ngày tháng năm sinh : Hiển thị</ListGroupItem>
                  <ListGroupItem>Họ và tên : Hiển thị</ListGroupItem>
                  <ListGroupItem> Số CMT : Hiển thị</ListGroupItem>
                  <ListGroupItem>Số điện thoại : Hiển thị</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <strong>Thông tin môi giới viên</strong>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem> Mã công ty : Hiển thị</ListGroupItem>
                  <ListGroupItem>Tên công ty môi giới : Hiển thị</ListGroupItem>
                  <ListGroupItem>Mã nhân viên môi giới viên : Hiển thị</ListGroupItem>
                  <ListGroupItem>Họ tên môi giới viên: Hiển thị</ListGroupItem>
                  <ListGroupItem>Số điện thoại môi giới: Hiển thị</ListGroupItem>
                  <ListGroupItem>Ngày giờ cọc: 24 tháng 10, 2018. 14h:30</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="12" xl="12">
            <Card>
              <CardHeader>
               <strong>Xác nhận của chủ đầu tư</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col md="3">
                    <Label>Xác thực trạng thái:</Label>
                  </Col>
                  <Col md="9">
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                      <Label check className="form-check-label" htmlFor="radio1">Hủy Giữ (đang bán) </Label>
                    </FormGroup>
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                      <Label check className="form-check-label" htmlFor="radio2">Xong HĐ Đặt Cọc (HĐ cọc/ đã bán)</Label>
                    </FormGroup>
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                      <Label check className="form-check-label" htmlFor="radio3">Hủy Hợp đồng đặt cọc (đang bán)</Label>
                    </FormGroup>
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                      <Label check className="form-check-label" htmlFor="radio3">Xong hợp đồng (đã bán)</Label>
                    </FormGroup>
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="radio3" name="radios" value="option3" />
                      <Label check className="form-check-label" htmlFor="radio3">Hủy hợp đồng (chỉ để admin 1 có quyền này)</Label>
                    </FormGroup>

                  </Col>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>

        </Row>
        <div className="form-actions">
          <Button type="submit" color="primary">Hủy</Button>
          <Button type="submit" color="info">Xác nhận</Button>

        </div>
      </Form>
      </div>
    );
  }
}

export default Trandetail;
