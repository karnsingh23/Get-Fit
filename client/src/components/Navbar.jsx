import React from "react";

const Navbar = () => {
  return (
    <div className="flex gap-3">
      <h1>Get Fit</h1> 
      <ul>
        <li>Dashboard</li>
        <li>Workouts</li>
        <li>Tutorials</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>
      <div>
        <span>User Avatar</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
