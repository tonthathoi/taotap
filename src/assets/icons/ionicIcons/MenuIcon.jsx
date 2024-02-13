import SVGIconBase from "../SVGIconBase";

const MenuIcon = (props) => {
  return (
    <SVGIconBase {...props}>
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M80 160h352M80 256h352M80 352h352"
      />
    </SVGIconBase>
  );
};

export default MenuIcon;
