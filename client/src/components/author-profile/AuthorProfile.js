import "./AuthorProfile.css";
import { NavLink, Outlet } from "react-router-dom";
import {useSelector} from 'react-redux';


function AuthorProfile() {
  let {currentUser}=useSelector(state=>state.userAuthorLoginReducer)
 
  return (
    <div className="author-profile p-3 " >
      <ul className="nav row fs-3">
        <li className="nav-item col-6">
          <NavLink
            className="nav-link" style={{ fontFamily: ' "Edu TAS Beginner", cursive', fontWeight: 700 }} 
            to={`articles-by-author/${currentUser.username}` }
          >
            Your Articles 
          </NavLink>
        </li>
        <li className="nav-item col-6">
          <NavLink
            className="nav-link" style={{ fontFamily: ' "Edu TAS Beginner", cursive', fontWeight: 700 }}
            to="new-article"
          >
            Add new
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AuthorProfile;