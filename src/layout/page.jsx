import PropTypes from "prop-types";

export default function Page({ children }) {
  return <main className="grow">{children}</main>;
}

Page.propTypes = {
  children: PropTypes.node,
};
