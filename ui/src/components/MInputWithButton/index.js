import { forwardRef } from "react";
import PropTypes from "prop-types";
import MInputWithButtonRoot from "components/MInputWithButton/MInputWithButtonRoot";

const MInputWithButton = forwardRef(({ error, success, disabled, ...rest }, ref) => (
  <MInputWithButtonRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />
));

// Setting default values for the props of MDInput
MInputWithButton.defaultProps = {
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the MDInput
MInputWithButton.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MInputWithButton;
