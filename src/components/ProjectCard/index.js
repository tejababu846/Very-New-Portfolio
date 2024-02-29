import { FaLink, FaGithub } from "react-icons/fa";

import {
  ProjectCardContainer,
  ProjectDetails,
  ProjectText,
  Stack,
  ProjectLinks,
} from "./styledComponents";

function ProjectCard(props) {
  const { projectDetails } = props;

  // Ensure projectDetails is defined before destructuring its properties
  const { title = '', description = '', tags = [], links = {}, projectImage = '' } = projectDetails || {};

  return (
    <ProjectCardContainer projectImage={projectImage}>
      <ProjectDetails>
        <ProjectText>
          <h3>{title}</h3>
          <p>{description}</p>
          <Stack>{tags.join(", ")}</Stack>
        </ProjectText>
        <ProjectLinks>
          <a href={links.live} target="_blank" rel="noopener noreferrer">
            <FaLink />
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </ProjectLinks>
      </ProjectDetails>
    </ProjectCardContainer>
  );
}

export default ProjectCard;
