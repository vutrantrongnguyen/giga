export default {
  items: [
    {
      name: 'Quản lý danh sách chủ đầu tư',
      url: '/investors',
      icon: 'icon-people',
    },
    {
      name: 'Danh sách công ty môi giới',
      url: '/Combrockers',
      icon: 'icon-pencil',
    },
    {
      name: 'Danh sách tiện ích khu đô thị',
      url: '/cities',
      icon: 'icon-puzzle',
    },
    {
      name: 'Quản lý chi tiết dự án',
      url: '/projdetail',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Bảng danh sách tổng quát',
          url: '/generalist',
          icon: 'icon-arrow-right',
        },
        {
          name: 'Quản lý chi tiết dự án, các dữ liệu nhập',
          url: '/projdetail',
          icon: 'icon-arrow-right',
        },
        {
          name: 'Quản lý giá và phân phối căn hộ',
          url: '/apartdistrib',
          icon: 'icon-arrow-right',
        },
        {
          name: 'Quản lý trạng thái căn hộ',
          url: '/apartstatus',
          icon: 'icon-arrow-right',
        },
        {
          name: 'Cập nhật nhanh giá,phân phối và trạng thái căn hộ',
          url: '/apartupdate',
          icon: 'icon-arrow-right',
        },
      ],
    },
    {
      name: 'Quản lý bán căn hộ',
      url: '/charts',
      icon: 'icon-pie-chart',
      children: [
        {
          name: 'Quản lý bán theo khách hàng',
          url: '/customerbuy',
          icon: 'icon-arrow-right',
        },
        {
          name: 'Quản lý bán hàng theo dự án',
          url: '/projbuy',
          icon: 'icon-arrow-right',
        },
      ],
    },
    {
      name: 'Quản lý đăng tin của người dùng',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Quản lý tin đăng mới',
          url: '/newpost',
          icon: 'icon-arrow-right',
        },
        {
          name: 'Quản lý tin xung đột',
          url: '/conflictpost',
          icon: 'icon-arrow-right',
        },
      ],
    },
    {
      name: 'Quản lý tài khoản',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Tài khoản người dùng',
          url: '/useraccount',
          icon: 'icon-arrow-right',
        },
        {
          name: 'Tài khoản nhân viên môi giới',
          url: '/brockeraccount',
          icon: 'icon-arrow-right',
        },
        {
          name: 'Tài khoản admin công ty môi giới',
          url: '/adbrockeraccount',
          icon: 'icon-arrow-right',
        },
        {
          name: 'Tài khoản admin của chủ đầu tư',
          url: '/adinvestorsaccount',
          icon: 'icon-arrow-right',
        },
        {
          name: 'Tài khoản admin của trang web',
          url: '/adaccount',
          icon: 'icon-arrow-right',
        },
      ],
    },
    {
      name: 'Thống kê báo cáo',
      url: '/reports',
      icon: 'icon-calculator',
    },
    {
      name: 'Quản lý thành viên quản trị',
      url: '/users',
      icon: 'icon-star',
    },
    {
      name: 'Setting quản trị',
      url: '/dashboard',
      icon: 'icon-settings',
    },
  ],
};
