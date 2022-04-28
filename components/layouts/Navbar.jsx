import { useCartContext } from "../../contexts/CartProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import NavButton from "../common/NavButton";
import navMenu from "../../config/navMenu.json";

const Navbar = (props) => {
  const { brand, color } = props;
  const { cartIds } = useCartContext();

  const navBtns = [
    {
      id: 1,
      destination: "/favorites",
      tooltip: "favorites",
      badge: null,
      iconClass: "fa fa-star",
      badgeClass: null,
    },
    {
      id: 2,
      destination: "/cart",
      badge: cartIds.length,
      tooltip: "cart",
      iconClass: "fa fa-shopping-cart",
      badgeClass: "danger",
    },
  ];

  const router = useRouter();

  return (
    <nav
      className={`navbar sticky-top navbar-expand navbar-${color} bg-${color} mb-4`}
    >
      <Link href="/">
        <a className="navbar-brand ml-2">{brand}</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          {navMenu.map((nm) => (
            <li key={nm.id} className="nav-item">
              <Link href={nm.itemDestination} passHref>
                <a
                  className={
                    router.pathname === nm.itemDestination
                      ? "nav-link activeLink"
                      : "nav-link"
                  }
                >
                  {nm.itemLabel}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <form className="form-inline">
          {navBtns.map((nb) => (
            <NavButton
              key={nb.id}
              destination={nb.destination}
              badge={nb.badge}
              iconClass={nb.iconClass}
              badgeClass={nb.badgeClass}
            />
          ))}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
