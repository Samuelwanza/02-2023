import React, { useState, useEffect, useMemo } from "react";
import { AUTH_TOKEN } from "../../src/Components/constant";

import styles from "../../styles/dashboard.module.css";
import { BsPerson } from "react-icons/bs";
import Layout from "../../src/Components/DashBoard/Layout";
//import DevMsg from "../../src/Components/DashBoard/DevMsg";
import { parseCookies } from "nookies";
import PageBelt from "../../src/Components/DashBoard/PageBelt";
import ProjectsPage from "../../src/Components/DashBoard/ProjectsPage";

export default function projects() {
  // const [token, setToken] = useState(null);
  // useEffect(() => {

  //     const authToken = localStorage.getItem(AUTH_TOKEN);
  //     setToken(authToken);
  //     // console.log("The token: ", authToken);

  //     if (!authToken) Router.push(h'/login');

  // }, []);

  return (
    <div className="flex-1 mb-8 mr-3 ml-2 mt-2">
      <ProjectsPage />
    </div>
  );
}

projects.getLayout = function getLayout(projects) {
  return <Layout>{projects}</Layout>;
};

export const getServerSideProps = async (context) => {
  const { ["auth_token"]: token } = parseCookies(context);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanet: false,
      },
    };
  }

  return {
    props: {},
  };
};
