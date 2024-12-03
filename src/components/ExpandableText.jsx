// ExpandableText.js
import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

/**
 * A component that displays a given text, truncated to a given length with an
 * ellipsis at the end, and a button to expand the text to its full length or
 * collapse it if it's already expanded.
 *
 * @param {string} text The text to display
 * @param {number} [initialLength=100] The length of the text to display before
 * expanding
 * @param {...props} props Other props to pass to the Stack component
 * @returns {React.ReactElement} A Stack component with a Typography and a
 * Button component
 */
const ExpandableText = ({ text, initialLength = 150, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [t] = useTranslation("global");

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Truncate text to initial length if not expanded
  const displayText = isExpanded || text.length < initialLength ? text : `${text.slice(0, initialLength)}...`;

  return (
    <Box {...props}>
      <Typography whiteSpace={"pre-wrap"} variant="bssr">
        {displayText}
      </Typography>
      {text.length > initialLength && (
        <Button size="small" onClick={toggleExpand} variant="text">
          {isExpanded ? t("homepage.seeLess") : t("homepage.seeMore")}
        </Button>
      )}
    </Box>
  );
};

export default ExpandableText;
