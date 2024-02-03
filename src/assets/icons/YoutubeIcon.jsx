const YoutubeIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <rect width="18" height="14" x="3" y="5" rx="4" />
      <path d="m10 9 5 3-5 3z" />
    </svg>
  );
};

export default YoutubeIcon;
