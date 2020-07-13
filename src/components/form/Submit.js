import React from "react";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { useFormikContext } from "formik";
import Wheel from "../../svg/Wheel";

const Submit = ({ children, m = 2 }) => {
  const { submitForm, isSubmitting } = useFormikContext();
  return (
    <Box m={m}>
      <Button
        startIcon={isSubmitting && <Wheel width={30} height={30} />}
        fullWidth
        size="large"
        variant="contained"
        color="primary"
        onClick={submitForm}
      >
        {children}
      </Button>
    </Box>
  );
};

export default Submit;
