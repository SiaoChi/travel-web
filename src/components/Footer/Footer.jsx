import './Footer.css'
import React, { useState } from 'react';

function Footer(){
      const [isActive, setIsActive] = useState(false);

    // 處理 SVG 點擊事件，切換 active2 狀態
    const handleSvgClick = () => {
        setIsActive(!isActive);
    };
    
    return (
        <footer>
        <div className="footer_top">
          <div className="footer_inner">
            <div className="footer_link">
              <div className="footer_title">相關連結</div>
              <div className="style_pc">
                <ul>
                  <li><a href="https://www.transglobe.com.tw/" target="_blank">全球人壽官網</a></li>
                  <li><a href="https://www.facebook.com/TGLlife/?fref=ts" className="icon_footer_fb" target="_blank">全球人壽粉絲YA　</a></li>
                  <li><a href="https://eservice.transglobe.com.tw/cs/Logon/Logon.xhtml" target="_blank">保戶專區</a></li>
                  <li><a href="https://www.transglobe.com.tw/service-contact-location.html?" target="_blank">服務據點　</a></li>
                  <li><a href="https://www.transglobe.com.tw/law-lawcom.html" target="_blank">電子商務自律規範主管機關連結</a></li>
                  <li><a href="https://e-commerce.transglobe.com.tw/assets/tgl/pdf/TGLECContract.pdf" target="_blank">網路投保業務暨網路保險服務契約</a></li>
                </ul>
              </div>
              <div className="style_mb">
                <ul>
                  <li><a href="http://www.transglobe.com.tw/transglobe-web" target="_blank">全球人壽官網</a></li>
                  <li><a href="https://www.fsc.gov.tw/ch/index.jsp" target="_blank">主管機關連結</a></li>
                </ul>
                <div className="footer_more">
                  <div className="footer_title btn_footer_more">
                    更多相關連結
                    <svg className="icon-footer-arrow" onClick={handleSvgClick}>
                      <use xlink:href="images/icon-re.svg?svg=#ico-accor"></use>
                    </svg>
                  </div>
                  <div className={`footer_more_content ${isActive ? 'active2' : ''}`}>
                    <ul>
                      <li><a href="https://www.facebook.com/TGLlife/?fref=ts" className="icon_footer_fb" target="_blank">全球人壽粉絲YA　</a></li>
                      <li><a href="https://eservice.transglobe.com.tw/cs/Logon/Logon.xhtml" target="_blank">保戶專區</a></li>
                      <li><a href="https://www.transglobe.com.tw/service-contact-location.html?" target="_blank">服務據點　</a></li>
                      <li><a href="https://www.transglobe.com.tw/law-lawcom.html" target="_blank">電子商務自律規範主管機關連結</a></li>
                      <li><a href="https://e-commerce.transglobe.com.tw/assets/tgl/pdf/TGLECContract.pdf" target="_blank">網路投保業務暨網路保險服務契約</a></li>
                    </ul>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="footer_info">
              <div className="footer_title">聯絡我們</div>
              <ul>
                <li className="icon_footer_map"><span>台北市110信義區市民大道六段288號16樓<a href="https://www.google.com/maps?q=%E5%8F%B0%E5%8C%97%E5%B8%82%E4%BF%A1%E7%BE%A9%E5%8D%80%E5%B8%82%E6%B0%91%E5%A4%A7%E9%81%93%E5%85%AD%E6%AE%B5288%E8%99%9F16%E6%A8%93&amp;t=m&amp;z=16" target="_blank" className="link_map">地圖</a></span></li>
                <li className="icon_footer_phone">免付費服務專線：0800-000-662</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_inner">
            <span className="copyright">2024 ©本網站版權屬 全球人壽保險股份有限公司所有</span>
          </div>
        </div>
      </footer>
    )
}

export default Footer;
