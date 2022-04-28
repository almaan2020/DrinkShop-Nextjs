import Link from "next/link";

const NavButton = (props) => {
  const { destination, badge, iconClass, badgeClass } = props;
  const showBadge = () => {
    if (badge > 0)
      return <span className={`badge badge-${badgeClass}`}>{badge}</span>;
  };
  return (
    <Link href={destination}>
      <a className="btn btn-outline-light m-1">
        &nbsp;
        <i className={iconClass}></i>
        &nbsp;
        {showBadge()}
      </a>
    </Link>
  );
};

export default NavButton;
