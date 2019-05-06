import React, {Component} from 'react';
import {
  Badge, Button, Card,
  CardBody,
  CardHeader,
  Col, Input,
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
        <Row>

          <Col xs="12" md="6" >
            <p className="font-weight-bold">QUẢN LÝ DỰ ÁN,KHU ĐÔ THỊ</p>
          </Col>
          <Col xs="12" md="6">
            <Button block color="info" className="btn btn-primary float-right" style={{width: 200}}>+Thêm dự án</Button>
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
                            <th>Mã</th>
                            <th>Tên dự án<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                            <th>Chủ đầu tư<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                            <th>Địa điểm<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                            <th>Năm hoàn thành<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                            <th>Số căn hộ</th>
                            <th>Trạng thái<Input bsSize="sm" type="text" id="input-small" name="input-small" className="input-sm" placeholder="Text input" /></th>
                            <th>Sửa dự án</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>1</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>
                              <Button onClick={this.togglePrimary} className="mr-1"><i className="fa fa-eye"></i></Button>
                              <Button onClick={this.togglePrimary} className="mr-1"><i className="cui-pencil icons font-lg "></i></Button>
                              <Button onClick={this.togglePrimary} className="mr-1"><i className="cui-trash icons font-lg "></i></Button>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>Hiển thị</td>
                            <td>
                              <Button onClick={this.togglePrimary} className="mr-1"><i className="fa fa-eye"></i></Button>
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
            <TabContent activeTab={this.state.activeTab[1]}>
              {/*{this.tabPane()}*/}
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Generalist;
