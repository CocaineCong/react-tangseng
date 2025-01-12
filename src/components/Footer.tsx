import React from 'react';
import '../assets/styles/footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="right-info">
          <div>
            <p className="footer-item">
              <span></span>
              <a
                href="https://www.xiaomiyoupin.com/app/shop/content?id=qf58f1039488314e3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tangseng 搜素索引{' '}
              </a>
            </p>
            <p className="footer-item">
              <a
                href="https://github.com/CocaineCong"
                target="_blank"
                rel="noopener noreferrer"
              >
                FanOne404{' '}
              </a>
            </p>
            <p className="footer-item">
              <span>FanOne出品 </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
