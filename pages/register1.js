import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { UserSelection } from "../src/Components/SignUpComponents";

export default function register() {
  return (
    <React.Fragment>
      <div className="bg-white overflow-x-hidden">
        <UserSelection />
      </div>
    </React.Fragment>
  );
}
