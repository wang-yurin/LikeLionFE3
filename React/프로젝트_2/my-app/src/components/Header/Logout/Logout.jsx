import React from "react";

const Logout = () => {
  return (
    <>
      <li>
        <a href="#" class="button gray">
          <img src="./assets/icon-login.svg" alt="" />
          <span>Login</span>
        </a>
      </li>
      <li class="only-pc">
        <a href="#" class="button gray">
          <img src="./assets/icon-register.svg" alt="" />
          <span>Register</span>
        </a>
      </li>
    </>
  );
};

export default Logout;
