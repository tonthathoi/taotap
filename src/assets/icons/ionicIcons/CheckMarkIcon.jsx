import SVGIconBase from "../SVGIconBase";

const CheckMarkIcon = (props) => {
  return (
    <SVGIconBase {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="44"
        d="M416 128L192 384l-96-96"
      />
    </SVGIconBase>
  );
};

export default CheckMarkIcon;
