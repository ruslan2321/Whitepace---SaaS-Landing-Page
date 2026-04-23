
import logo from "/svg/Logo.svg";
import ArrowRight from "/svg/ArrowRight.svg";
import lang from "/svg/launges.svg";
import "./style.scss";
import { UI_Button } from "../UI/Button/Button";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-top-content">
        <div className="flex flex-col gap-[15px]">
          <div className="logo-footer">
            <img src={logo} />
            <h1>whitepace</h1>
          </div>
          <p>
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </p>
        </div>
        <div >
          <h1>Product</h1>
          <ul>
            <li>
              <p>Overview</p>
            </li>
            <li>
              <p>Pricing</p>
            </li>
            <li>
              <p>Customer stories</p>
            </li>
          </ul>
        </div>
        <div>
          <h1>Resources</h1>
          <ul>
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>Guides & tutorials</p>
            </li>
            <li>
              <p>Help center</p>
            </li>
          </ul>
        </div>
        <div >
          <h1>Company</h1>
          <ul>
            <li>
              <p>About us</p>
            </li>
            <li>
              <p>Careers</p>
            </li>
            <li>
              <p>Media kit</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[23px]">
          <h1>Try It Today</h1>
          <p>Get started for free. Add your whole team as your needs grow.</p>
          <UI_Button bg="blue" text="Start today" size="sm" icon={ArrowRight} />
        </div>
      </div>
      <div className="bg-[#ffffff] w-[100%] h-[2px]"></div>
      <div className="footer-botom-content">
        <div className="flex gap-[6px]">
          <img src={lang} alt="" />
          <p>English</p>
        </div>
        
        <p>Terms & privacy</p>
        <p>Security</p>
        <p>Status</p>
        <p>©2021 Whitepace LLC.</p>
      </div>
    </footer>
  );
};
