import React, {Component} from 'react';
import {
  Badge, Card,
  CardBody,
  CardHeader,
  Col, ListGroup, ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  Pagination, PaginationItem, PaginationLink,
  Row,
  TabContent,
  Table,
  TabPane
} from 'reactstrap';

class Generalist extends Component {

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
        <p>THỐNG KÊ BÁO CÁO</p>
        <Row>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <strong>Thống kê tài khoản</strong>
                {/*<div className="card-header-actions">*/}
                {/*  <a href="https://reactstrap.github.io/components/listgroup/" rel="noreferrer noopener" target="_blank" className="card-header-action">*/}
                {/*    <small className="text-muted">docs</small>*/}
                {/*  </a>*/}
                {/*</div>*/}
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem>Số chủ đầu tư<Badge className="float-right">56</Badge></ListGroupItem>
                  <ListGroupItem>Số công ty môi giới<Badge className="float-right">23</Badge></ListGroupItem>
                  <ListGroupItem>Số tài khoản môi giới<Badge className="float-right">154</Badge></ListGroupItem>
                  <ListGroupItem>Số tài khoản đăng nhập<Badge className="float-right">142</Badge></ListGroupItem>
                  <ListGroupItem>Số tài khoản đang online<Badge className="float-right">24</Badge></ListGroupItem>

                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
               <strong>Căn hộ</strong>
                {/*<div className="card-header-actions">*/}
                {/*  <a href="https://reactstrap.github.io/components/listgroup/" rel="noreferrer noopener" target="_blank" className="card-header-action">*/}
                {/*    <small className="text-muted">docs</small>*/}
                {/*  </a>*/}
                {/*</div>*/}
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem>Số căn hộ mới đang bán<Badge className="float-right">56</Badge></ListGroupItem>
                  <ListGroupItem>Số căn hộ chính chủ đăng ký trên HT<Badge className="float-right">23</Badge></ListGroupItem>
                  <ListGroupItem>Số căn hộ CC đang bán<Badge className="float-right">23</Badge></ListGroupItem>
                  <ListGroupItem>Số CHCC đang cho thuê<Badge className="float-right">23</Badge></ListGroupItem>
                  <ListGroupItem>Số căn CH tránh làm phiền<Badge className="float-right">23</Badge></ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <strong>Dự án</strong>
                {/*<div className="card-header-actions">*/}
                {/*  <a href="https://reactstrap.github.io/components/listgroup/" rel="noreferrer noopener" target="_blank" className="card-header-action">*/}
                {/*    <small className="text-muted">docs</small>*/}
                {/*  </a>*/}
                {/*</div>*/}
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem>Số dự án mới<Badge className="float-right">56</Badge></ListGroupItem>
                  <ListGroupItem>Số dự án đã bàn giao<Badge className="float-right">23</Badge></ListGroupItem>

                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Generalist;
