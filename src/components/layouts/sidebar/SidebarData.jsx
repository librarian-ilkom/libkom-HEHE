import React from "react";
import * as BiIcons from "react-icons/bi";
import {CgNotes} from "react-icons/cg";
export const SidebarData = [
  {
    name : "Dashboard",
    path : "/",
    icon : <BiIcons.BiHomeAlt />
  },
  {
    name : "Absen",
    path : "/",
    icon : <BiIcons.BiUser/>
  },
  {
    name : "Peminjaman",
    path : "/",
    icon : <CgNotes />
  },
  {
    name : "Buku",
    path : "/",
    icon : <BiIcons.BiBook />
  },
  {
    name : "Log Out",
    path : "/",
    icon : <BiIcons.BiLogOut />
  },
];
