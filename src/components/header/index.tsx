import logo from "/svg/Logo.svg";
import ArrowRight from "/svg/ArrowRight.svg";
import "./style.scss";
import { UI_Button } from "../UI/Button/Button";

export const Header = () => {
  return (
    <>
      <header>
        <div className="logo-header">
          <img src={logo} />
          <h1>whitepace</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Solutions</a>
            </li>
            <li>
              <a>Resources</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2">
          <UI_Button hover={true} text="Login" bg={"yellow"} size="md" />
          <UI_Button
            text="Try Whitepace free"
            bg={"blue"}
            icon={ArrowRight}
            size="md"
          />
        </div>
      </header>
    </>
  );
};
