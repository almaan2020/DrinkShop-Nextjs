const ViewButton = (props) => {
  const { onView, iconClass } = props;
  return <i onClick={onView} className={iconClass} aria-hidden="true"></i>;
};

export default ViewButton;
