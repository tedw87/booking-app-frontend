import PropTypes from "prop-types";

const CustomContainer = ({ children, width, height, backgroundColor }) => {
  const containerStyle = {
    maxWidth: width,
    height: height,
    backgroundColor: backgroundColor,
  };

  return (
    <div className="custom-container" style={containerStyle}>
      {children}
    </div>
  );
};

CustomContainer.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default CustomContainer;
