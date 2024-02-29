import { useContext } from "react";
import themeContext from "../../themeContext/themeContext";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { FaBootstrap, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiNpm } from "react-icons/si";
import './styledComponents'

import {
  AboutSectionContainer,
  AboutContainer,
  Photowrapper,
  MyPhoto,
  Background,
  BackgroundTitle,
  BackgroundSubtile,
  Description,
  TechStackContainer,
  TechStackHeading,
  Tools,
  ToolList,
  ToolItem,
} from "./styledComponents";

function AboutSection() {
  const { isDarkMode } = useContext(themeContext);
  return (
    <AboutSectionContainer id="about">
      <AboutContainer>
        <Photowrapper>
          <MyPhoto
            alt="my photo"
            loading="lazy"
            src="https://res.cloudinary.com/dhzqndogf/image/upload/v1709145627/Untitled_on7pr2.jpg"
          />
        </Photowrapper>
        <Background isDarkMode={isDarkMode}>
          <BackgroundTitle>Background</BackgroundTitle>
          <BackgroundSubtile>A bit About Me</BackgroundSubtile>
          <Description>
            I'm a full-stack developer with a passion for using technology to
            solve real-world problems. I learned full stack development from
            Nxtwave, a leading software training institute in India.
          </Description>
          <Description>
            During my training at Nxtwave, I gained a strong understanding of
            both front-end and back-end technologies, including HTML, CSS,
            Bootstrap, JavaScript, React.js, Node.js, Express.js, and SQLite. I
            also have experience with a variety of other technologies, such as
            Git, and GitHub.
          </Description>
          <Description>
            I'm a highly motivated and results-oriented individual. I'm always
            willing to go the extra mile to get the job done, and I'm always
            looking for ways to improve my skills and knowledge. I'm also a team
            player and I'm able to work effectively with others to achieve
            common goals.
          </Description>
          <Description>
            I'm excited to Being as a full-stack developer, and I'm confident
            that I can make a significant contribution to your's success. I'm
            also open to learning new technologies and taking on new challenges.
          </Description>
        </Background>
      </AboutContainer>
      <TechStackContainer isDarkMode={isDarkMode}>
        <TechStackHeading>My core tools and technologies</TechStackHeading>
        <Tools>
          <ToolList>
            <ToolItem>
              <AiFillHtml5
                color="#ff4d15"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              HTML
            </ToolItem>
            <ToolItem>
              <DiCss3
                color="#264de4"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              CSS
            </ToolItem>
            <ToolItem>
              <FaBootstrap
                color="#7a09f7"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              Bootstrap
            </ToolItem>
          </ToolList>
          <ToolList>
            <ToolItem>
              <RiJavascriptFill
                color="#f0db4f"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              Javascript
            </ToolItem>
            <ToolItem>
              <DiReact
                color="#61dbfb"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              React.JS
            </ToolItem>
            <ToolItem>
              <img
                src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1688022486/Python-logo-notext.svg_uvzbbk.png"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="Python Icon"
              />
              Python
            </ToolItem>
          </ToolList>
          <ToolList>
            <ToolItem>
              <img
                src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1688022770/sqlite_logo_icon_169724_ox8bsk.png"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="SQLite Icon"
              />
              SQLite
            </ToolItem>
            <ToolItem>
              <FaNodeJs
                color="#68a063"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              Node.JS
            </ToolItem>
            <ToolItem>
              <SiExpress
                style={{
                  marginRight: "0.5rem",
                }}
              />{" "}
              Express.JS
            </ToolItem>
          </ToolList>
          <ToolList>
            <ToolItem>
              <SiNpm
                color="#cb3837"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              NPM
            </ToolItem>
            <ToolItem>
              <FaGitAlt
                color="#f05030"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              Git
            </ToolItem>
            <ToolItem>
              <AiFillGithub
                style={{
                  marginRight: "0.5rem",
                }}
              />
              GitHub
            </ToolItem>
          </ToolList>
          <ToolList>
            <ToolItem>
              <img
                src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1688022067/pngwing.com_rte7ts.png"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="Figma Icon"
              />
              Figma
            </ToolItem>
            <ToolItem>
              <img
                src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1688023219/mongodb_original_logo_icon_146424_gfauqe.png"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="MongoDB Icon"
              />
              MongoDB
              <sup
                style={{
                  color: "#47b147",
                  fontSize: "0.54rem",
                  fontFamily: "Roboto, Mono monospace",
                  marginLeft: "0.2rem",
                }}
              >
                SOON!
              </sup>
            </ToolItem>
          </ToolList>
        </Tools>
      </TechStackContainer>
    </AboutSectionContainer>
  );
}

export default AboutSection;
