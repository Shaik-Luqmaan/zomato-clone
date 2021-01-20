import React from "react";
import Typography from "@material-ui/core/Typography";

const TypographyComponent = (props) => {

    return (
    <Typography variant={props.variant}>
      {props.children}
    </Typography>
  );
};

export default TypographyComponent;