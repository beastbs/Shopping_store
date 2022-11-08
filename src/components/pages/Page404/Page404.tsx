import { Link } from "react-router-dom";
import "./Page404.scss";

const Page404 = () => {
  return (
    <div className="page404">
      <div className="page404__title">404</div>
      <p className="page404__description">This page does not exist</p>
      <Link to="/" className="page404__link">
        Follow this link to go to main page
      </Link>
    </div>
  );
};

export default Page404;
