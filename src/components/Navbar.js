"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  // {
  //   id: 2,
  //   title: "Courses",
  //   url: "/course",
  // },
  // {
  //   id: 3,
  //   title: "Attendance",
  //   url: "/attendance",
  // },
  // {
  //  {
  //    id: 4,
  //   title: "Marks",
  //   url: "/marks",
  // },

  // {
  //   id: 5,
  //   title: "Faculty",
  //   url: "/faculty",
  // },
//   {
//     id: 2,
//     title: "Timetablestudent",
//     url: "/timetablestudent",
//   },
//   {
//     id: 3,
//     title: "Timetablefaculty",
//     url: "/timetablefaculty",
//   },
//   {
//     id: 4,
//     title: "Timetableadmin",
//     url: "/timetableadmin",
//   },
    {
    id: 5,
    title: "Test",
    url: "/test",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Acad Portal
      </Link>

      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>

      {/* <button
        onClick={() => {
          signOut();
        }}
        className={styles.logoutButton}
      >
        Logout
      </button> */}

      
          <Link href="/login" className={styles.link}>
            Login
          </Link>
          <Link href="/register" className={styles.link}>
            Register
          </Link>
     
    </div>
  );
  };

export default Navbar;
