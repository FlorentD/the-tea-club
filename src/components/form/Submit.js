import React from "react";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { useFormikContext } from "formik";
import Wheel from "../../svg/Wheel";

const Submit = ({ children }) => {
  const { submitForm, isSubmitting } = useFormikContext();
  return (
    <Box m={2}>
      <Button
        startIcon={isSubmitting && <Wheel width={40} height={40} />}
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
