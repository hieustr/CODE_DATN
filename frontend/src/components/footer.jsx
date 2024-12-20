const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-2">
            <div className="footer-link">
              <h2>TechTitans</h2>
              <a href="#/">Trang chủ</a>
              <a href="#/">Giới thiệu</a>
              <a href="#/">Dịch vụ</a>
              <a href="#/">FAQs</a>
              <a href="#/">Đánh giá</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="footer-link">
              <h2>Chính sách và hỗ trợ</h2>
              <a href="#/">Điều kiện giao dịch chung</a>
              <a href="#/">Điều khoản sử dụng</a>
              <a href="#/">Bảo mật thông tin thanh toán</a>
              <a href="#/">Chính sách vận chuyển và giao nhận</a>
              <a href="#/">Chính sách bảo vệ dữ liệu cá nhân</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-contact">
              <h2>Liên Hệ</h2>
              <p>
                <i className="fa fa-map-marker-alt" />
                159 Dũng Sĩ Thanh Khê, Quận Thanh Khê, Đà Nẵng
              </p>
              <p>
                <i className="fa fa-phone-alt" />
                +84987483823
              </p>
              <p>
                <i className="fa fa-envelope" />
                trhieu1008@gmail.com
              </p>
              <div className="footer-social">
                <a href="#/">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#/">
                  <i className="fab fa-youtube" />
                </a>
                <a href="#/">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-form">
              <h2>Cập nhật</h2>
              <p>
                Chúng tôi luôn mang đến những sự mới mẻ và luôn cập nhật những chức năng
                mới nhất liên tục mang lại cảm nhận tốt nhất cho khách hàng
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
