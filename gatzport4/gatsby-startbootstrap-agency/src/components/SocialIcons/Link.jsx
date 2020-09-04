import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Link = ({ userName }) => (
  <CircleIcon href={userName} iconName="LinkIcon" />
);

Link.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Link;
