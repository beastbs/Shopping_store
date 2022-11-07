import { ButtonPropsPrimary } from "../../models/models";

import classNames from "classnames";

import "./Button.scss";

const Button = (props: ButtonPropsPrimary) => {
  // console.log(props);
  const btnClass = classNames({
    btn: true,
    "btn--primary": props.type === "primary",
    "btn--success": props.type === "success",
    "btn--warning": props.type === "warning",
    "btn--danger": props.type === "danger",
    "btn--small": props.size === "small",
    "btn--medium": props.size === "medium",
  });
  return (
    <button className={btnClass} onClick={props.onClick} tabIndex={1}>
      {props.children}
    </button>
  );
};

export default Button;
