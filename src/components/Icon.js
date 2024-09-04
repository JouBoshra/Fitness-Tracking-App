import React from "react";
import { ImPause, ImPlay2 } from "react-icons/im";
import { RiDashboard3Line, RiUser3Line } from "react-icons/ri";
import { IoMdFitness, IoIosRemoveCircleOutline } from "react-icons/io";
import {
  AiOutlineLoading3Quarters,
  AiOutlineCheckCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const icons = {
  loading: AiOutlineLoading3Quarters,
  check: AiOutlineCheckCircle,
  play: ImPlay2,
  pause: ImPause,
  dashboard: RiDashboard3Line,
  fitness: IoMdFitness,
  user: RiUser3Line,
  remove: IoIosRemoveCircleOutline,
  plus: AiOutlinePlusCircle,
  menu: HiOutlineMenuAlt3,
};

const Icon = ({ type }) => {
  const SelectedIcon = icons[type];
  return (
    <SelectedIcon
      className={`transition-transform ${
        type === "loading" ? "animate-spin" : "hover:scale-125 duration-300"
      }`}
    />
  );
};

export default Icon;
