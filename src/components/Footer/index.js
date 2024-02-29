import { MdEmail } from "react-icons/md";
import { TfiTwitterAlt } from "react-icons/tfi";
import { useContext } from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";

import themeContext from "../../themeContext/themeContext";

import {
  FooterContainer,
  Email,
  FooterSocials,
  CopyRight,
} from "./styledComponents";

function Footer() {
  const { isDarkMode } = useContext(themeContext);

  return (
    <FooterContainer isDarkMode={isDarkMode}>
      <Email>
        <MdEmail
          style={{
            fontSize: "1.1rem",
            fontWeight: "bolder",
            marginRight: "5px",
          }}
        />
        <a href="mailto: tejababu08@gmail.com">tejababu0808@gmail.com</a>
      </Email>
      <FooterSocials>
        <a
          aria-label="twitter"
          href="https://twitter.com/TejaBabu716288"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TfiTwitterAlt
            color="#1d9bf0"
            style={{
              fontSize: "45px",
              transition: "all 0.3s ease-in-out",
              padding: "8px",
            }}
          />
        </a>
        <a
          aria-label="github"
          href="https://github.com/tejababu846"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub
            style={{
              fontSize: "45px",
              transition: "all 0.3s ease-in-out",
              padding: "8px",
            }}
          />
        </a>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/in/teja-gulagani-0a1338274/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin
            color="#0366c3"
            style={{
              fontSize: "45px",
              transition: "all 0.3s ease-in-out",
              padding: "8px",
            }}
          />
        </a>
      </FooterSocials>
      <CopyRight>
        Copyright 2024 ©{" "}
          Teja Gulagani
        - All Right Reserved.
      </CopyRight>
    </FooterContainer>
  );
}

export default Footer;
