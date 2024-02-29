import React, { useState, useContext } from "react";
import themeContext from "../../themeContext/themeContext";
import myProjectsList from "./myProjectsList";
import { MdDoubleArrow } from "react-icons/md";
import {
  ProjectsSectionContainer,
  ProjectContainer,
  TextContainer,
  TextHeading,
  TextSubNote,
  FilterContainer,
  FilterButton,
  Projects,
  ProjectsBtn,
} from "./styledComponents";
import ProjectCard from "../ProjectCard";

function ProjectsSection() {
  const { isDarkMode } = useContext(themeContext);
  const [activeCategory, setActiveCategory] = useState("ALL");

  const onChangeCategory = (selectedCategory) => {
    setActiveCategory(selectedCategory);
  };

  return (
    <ProjectsSectionContainer id="projects" isDarkMode={isDarkMode}>
      <ProjectContainer>
        <TextContainer>
          <TextHeading>Featured Projects</TextHeading>
          <TextSubNote>Some Projects I have worked on</TextSubNote>
        </TextContainer>
        <ProjectContainer>
          <FilterContainer isDarkMode={isDarkMode}>
            {["STATIC", "RESPONSIVE", "DYNAMIC", "REACTJS"].map((category) => (
              <FilterButton
                key={category}
                type="button"
                onClick={() => onChangeCategory(category)}
                isactive={activeCategory === category ? "true" : "false"}
                isDarkMode={isDarkMode ? "true" : "false"} // Ensure isDarkMode prop is a string
              >
                {category}
              </FilterButton>
            ))}
          </FilterContainer>
          <Projects>
            {myProjectsList
              .filter((project) => activeCategory === "ALL" || project.category === activeCategory)
              .map((project) => (
                <ProjectCard key={project.id} projectDetails={project} /> // Corrected typo in projectDetails prop
              ))}
          </Projects>
        </ProjectContainer>
      </ProjectContainer>
      <ProjectsBtn>
        <a
          href="https://github.com/tejababu846"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>See More Work</span>
          <MdDoubleArrow
            style={{
              fontSize: "20px",
              marginLeft: "7px",
            }}
          />
        </a>
      </ProjectsBtn>
    </ProjectsSectionContainer>
  );
}

export default ProjectsSection;
