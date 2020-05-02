import React from "react";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { useFormikContext } from "formik";

const Submit = ({ children }) => {
  const { submitForm } = useFormikContext();
  return (
    <Box m={2}>
      <Button
        fullWidth
        size="large"
        variant="contained"
        color="primary"
        onClick={submitForm}
      >
        <Box m={2}>{children}</Box>
      </Button>
    </Box>
  );
};

export default Submit;
