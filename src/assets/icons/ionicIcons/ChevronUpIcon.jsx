import SVGIconBase from "../SVGIconBase";

const ChevronUpIcon = (props) => {
  return (
    <SVGIconBase {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M112 328l144-144 144 144"
      />
    </SVGIconBase>
  );
};

export default ChevronUpIcon;
