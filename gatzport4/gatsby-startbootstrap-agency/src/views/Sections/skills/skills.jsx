import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./skills.scss";

const skills = ({ className, frontmatter }) => {

  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent,
    teamMember,
  } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {teamMember.map(({ header, ...tmProps }) => (
          <Col sm={3} key={header}>
            <TeamMember header={header} {...tmProps} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <p className="large text-muted">{rootContent}</p>
        </Col>
      </Row>
    </PageSection>
  );
};

skills.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

skills.defaultProps = {
  className: null,
  frontmatter: null,
};

export default skills;
