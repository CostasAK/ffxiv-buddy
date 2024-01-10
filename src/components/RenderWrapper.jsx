import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const RenderWrapper = ({ children }) => (
  <HelmetProvider>
    <Helmet
      defaultTitle={import.meta.env.VITE_APP_NAME}
      titleTemplate={`%s - ${import.meta.env.VITE_APP_NAME}`}
    />
    {children}
  </HelmetProvider>
);

RenderWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
