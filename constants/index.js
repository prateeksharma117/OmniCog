import {
  IoHomeOutline,
  IoImagesOutline,
  IoCameraOutline,
} from "react-icons/io5";
import { PiMagicWandLight } from "react-icons/pi";
import { AiOutlineScan } from "react-icons/ai";
import { MdOutlineColorLens } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { LuGem } from "react-icons/lu";

export const navLinks = [
  {
    label: "Home",
    route: "/dashboard",
    icon: <IoHomeOutline size={24} color="#40a1ff" />,
  },
  {
    label: "Image Restore",
    route: "/transformations/add/restore",
    icon: <IoImagesOutline size={24} color="#ffa417" />,
  },
  {
    label: "Generative Fill",
    route: "/transformations/add/fill",
    icon: <PiMagicWandLight size={24} color="#82d135" />,
  },
  {
    label: "Object Remove",
    route: "/transformations/add/remove",
    icon: <AiOutlineScan size={24} color="#b145e7" />,
  },
  {
    label: "Object Recolor",
    route: "/transformations/add/recolor",
    icon: <MdOutlineColorLens size={24} color="#ffce14" />,
  },
  {
    label: "Background Remove",
    route: "/transformations/add/removeBackground",
    icon: <IoCameraOutline size={24} color="#d4d6db" />,
  },
  {
    label: "Profile",
    route: "/profile",
    icon: <FiUser size={24} color="#6a71e6" />,
  },
  {
    label: "Buy Credits",
    route: "/credits",
    icon: <LuGem size={24} color="#bd3729" />,
  },
];

export const plans = [
  {
    _id: 1,
    name: "Free",
    icon: "/credits.png",
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: "20 Free Credits",
        isIncluded: true,
      },
      {
        label: "Basic Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: "/credits.png",
    price: 40,
    credits: 120,
    inclusions: [
      {
        label: "120 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: "/credits.png",
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: "2000 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: <IoImagesOutline size={24} />,
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: <IoCameraOutline size={24} />,
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: <PiMagicWandLight size={24} />,
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: <AiOutlineScan size={24} />,
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: <MdOutlineColorLens size={24} />,
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;
