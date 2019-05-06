import React, {Component} from 'react';
import {
  Badge, Button, ButtonGroup, ButtonToolbar, Card,
  CardBody,
  // CardHeader,
  Col, Modal, ModalBody, ModalFooter, ModalHeader,
  Nav,
  NavItem,
  NavLink,
  // Pagination, PaginationItem, PaginationLink,
  Row,
  TabContent,
  Table,
  TabPane
} from 'reactstrap';

class Investors extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.togglePrimary = this.togglePrimary.bind(this);
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

  togglePrimary() {
    this.setState({
      primary: !this.state.primary,
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
                  <th>Mã công ty</th>
                  <th>Logo</th>
                  <th>Tên chủ đầu tư</th>
                  <th>Số điện thoại</th>
                  <th>Xem trước</th>
                  <th>Nút lệnh</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>
                    <Button onClick={this.togglePrimary} className="mr-1"><i className="fa fa-eye"></i></Button>
                  </td>
                  <td>
                    <Button onClick={this.togglePrimary} className="mr-1"><i className="cui-pencil icons font-lg "></i></Button>
                    <Button onClick={this.togglePrimary} className="mr-1"><i className="cui-trash icons font-lg "></i></Button>

                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>
                    <Button onClick={this.togglePrimary} className="mr-1"><i className="fa fa-eye"></i></Button>

                  </td>
                  <td>
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
                  <th>Mã công ty</th>
                  <th>Logo</th>
                  <th>Tên chủ đầu tư</th>
                  <th>Số điện thoại</th>
                  <th>Xem trước</th>
                  <th>Nút lệnh</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td>Hiển thị</td>
                  <td><Button onClick={this.togglePrimary} className="mr-1"><i className="fa fa-eye "></i></Button></td>
                  <td>
                    <ButtonToolbar>
                      <ButtonGroup className="mr-2">
                        <Button block color="primary">Đồng ý</Button>
                      </ButtonGroup>
                      <ButtonGroup className="mr-2">
                        <Button block color="danger">Từ chối</Button>
                      </ButtonGroup>
                    </ButtonToolbar>

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

        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
          <ModalHeader toggle={this.toggleModal}>Xem trước giới thiệu về chủ đầu tư</ModalHeader>
          <ModalBody>
            Công ty Cổ phần Tập đoàn Phượng Hoàng Xanh A&A
            Hoàng Ngân, Trung Hòa, Cầu Giấy, Hà Nôi, Việt Nam
            02433685980
            Giới thiệu
            bds@phenikaa.com http://www.phenikaa.com
            Giới thiệu
            bds@phenikaa.com http://www.phenikaa.com
          </ModalBody>
          <ModalFooter>
            Công ty CP Tập đoàn Phượng Hoàng Xanh A&A được thành lập và hoạt động theo GPKD số 0104961939 do Sở kế hoạch
            và Đầu tư
            thành tư Hà Nội cấp lần đầu ngày 20/10/2010 và chứng nhận thay đổi lần thứ 13 ngày 29/12/2017
            Công ty Cổ phần Tập đoàn Phượng Hoàng Xanh A&A nằm trong top đầu trên thế giới về sản xuất và cung cấp đá
            thạch anh nhân tạo.
            Sản phẩm đá thạch anh thương hiệu VICOSTONE Quartz Surfaces của Tập đoàn Phenikaa thuộc một trong những
            thương hiệu đá
            thạch anh lớn nhất trên thế giới.
            Với định hướng chiến lược “Lấy sản xuất công nghiệp là kinh doanh cốt lõi, vật liệu sinh thái và sản phẩm
            công nghệ cao là mũi nhọn,
            tăng dần tỷ trọng tham gia chuỗi cung ứng cho các sản phẩm công nghệ cao”, Phenikaa xác định đá thạch anh
            sản xuất theo công
            nghệ được chuyển giao độc quyền từ hãng Breton (Ý) là sản phẩm cốt lõi. Phenikaa đã và đang triển khai các
            dự án đầu tư bất động
            sản, xây lắp, tư vấn thiết kế, thương mại dịch vụ và chế biến khoáng sản.
            Trong những năm tới, Phenikaa sẽ tiếp tục tận dụng những nền tảng sẵn có để không ngừng xây dựng và phát
            triển, khẳng định
            thương hiệu Phenikaa không chỉ là một doanh nghiệp tiên phong tại Việt Nam mà còn là một đơn vị uy tín toàn
            cầu với phương châm
            của mình: Hiện thực hóa mọi cam kết.
            Lĩnh vực hoạt động: Sản xuất đá thạch anh cao cấp, Đầu tư xây dựng, Bất động sản, Thương mại dịch vụ, Giáo
            dục đào tạo,…
            Danh sách các dự án đã đầu tư, thi công xây dựng (nếu có): Chung cư Phenikaa
            Khu vực môi giới tốt nhất hiện nay:Thạch Thất
            Loại BDS môi giới chủ yếu: Bán căn hộ chung cư
          </ModalFooter>

        </Modal>
        <Modal isOpen={this.state.primary} toggle={this.togglePrimary}
               className={'modal-primary ' + this.props.className}>
          <ModalHeader toggle={this.togglePrimary}>Xem trước giới thiệu về chủ đầu tư</ModalHeader>
          <ModalBody>
            Công ty Cổ phần Tập đoàn Phượng Hoàng Xanh A&A
            Hoàng Ngân, Trung Hòa, Cầu Giấy, Hà Nôi, Việt Nam
            02433685980
            Giới thiệu
            bds@phenikaa.com http://www.phenikaa.com
            Giới thiệu
            bds@phenikaa.com http://www.phenikaa.com
          </ModalBody>
          <ModalFooter>
            <p> Công ty CP Tập đoàn Phượng Hoàng Xanh A&A được thành lập và hoạt động theo GPKD số 0104961939 do Sở kế
              hoạch và Đầu tư
              thành tư Hà Nội cấp lần đầu ngày 20/10/2010 và chứng nhận thay đổi lần thứ 13 ngày 29/12/2017
              Công ty Cổ phần Tập đoàn Phượng Hoàng Xanh A&A nằm trong top đầu trên thế giới về sản xuất và cung cấp đá
              thạch anh nhân tạo.
              Sản phẩm đá thạch anh thương hiệu VICOSTONE Quartz Surfaces của Tập đoàn Phenikaa thuộc một trong những
              thương hiệu đá
              thạch anh lớn nhất trên thế giới.
              Với định hướng chiến lược “Lấy sản xuất công nghiệp là kinh doanh cốt lõi, vật liệu sinh thái và sản phẩm
              công nghệ cao là mũi nhọn,
              tăng dần tỷ trọng tham gia chuỗi cung ứng cho các sản phẩm công nghệ cao”, Phenikaa xác định đá thạch anh
              sản xuất theo công
              nghệ được chuyển giao độc quyền từ hãng Breton (Ý) là sản phẩm cốt lõi. Phenikaa đã và đang triển khai các
              dự án đầu tư bất động
              sản, xây lắp, tư vấn thiết kế, thương mại dịch vụ và chế biến khoáng sản.
              Trong những năm tới, Phenikaa sẽ tiếp tục tận dụng những nền tảng sẵn có để không ngừng xây dựng và phát
              triển, khẳng định
              thương hiệu Phenikaa không chỉ là một doanh nghiệp tiên phong tại Việt Nam mà còn là một đơn vị uy tín
              toàn cầu với phương châm
              của mình: Hiện thực hóa mọi cam kết.
              Lĩnh vực hoạt động: Sản xuất đá thạch anh cao cấp, Đầu tư xây dựng, Bất động sản, Thương mại dịch vụ, Giáo
              dục đào tạo,…
              Danh sách các dự án đã đầu tư, thi công xây dựng (nếu có): Chung cư Phenikaa
              Khu vực môi giới tốt nhất hiện nay:Thạch Thất
              Loại BDS môi giới chủ yếu: Bán căn hộ chung cư</p>
          </ModalFooter>
        </Modal>
        <Row>

          <Col xs="12" md="6" >
            <p className="font-weight-bold">QUẢN LÝ DANH SÁCH CHỦ ĐẦU TƯ</p>
          </Col>
          <Col xs="12" md="6">
            <Button block color="info" className="btn btn-primary float-right" style={{width: 200}} ><a href="/addinvestor">+Thêm chủ đầu
              tư</a></Button>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12" className="mb-4">
            <Nav tabs >
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => {
                    this.toggle(0, '1');
                  }}
                >
                  Danh sách chủ đầu tư
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

export default Investors;
