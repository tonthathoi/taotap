const EditIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M9 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3" />
      <path d="M9 15h3l8.5-8.5a1.5 1.5 0 0 0-3-3L9 12v3M16 5l3 3" />
    </svg>
  );
};

export default EditIcon;
