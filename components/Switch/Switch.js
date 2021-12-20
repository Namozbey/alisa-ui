import RcSwitch from "rc-switch";
// import PropTypes from 'prop-types'

export default function Switch({ style, ...props }) {
  return (
    <RcSwitch
      className="alisa-switch"
      style={{ outline: "none", ...style }}
      {...props}
    />
  );
}
