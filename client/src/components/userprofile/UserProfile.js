import "./UserProfile.css";
import { NavLink, Outlet } from "react-router-dom";

function UserProfile() {
  return (
    <div className="user-profile container">
      <div className="navlinkusp">
        <NavLink to='articles' className='fs-1 text-primary nav-link mt-4' style={{ fontFamily: ' "Edu TAS Beginner", cursive', fontWeight: 700 }}>Articles</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default UserProfile;