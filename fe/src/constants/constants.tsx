import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import NotificationDropDown from "../components/Dropdown/NotificationDropdown/NotificationDropdown";
import MessagesDropDown from "../components/Dropdown/MessagesDropdown/MessagesDropdown";
import PersonIcon from "@mui/icons-material/Person";
import UserDropDown from "../components/Dropdown/UserDropdown/UserDropdown";
import LanguageDropDown from "../components/Dropdown/LanguageDropdown/LanguageDropDown";
import LanguageButton from "../components/LanguageButton/LanguageButton";

export const locales = {
  en: "English",
  ar: "Arabic",
};

export const sidebarLinks = [
  {
    id: "dashboard",
    icon: <HomeIcon />,
    title: "Dashboard",
  },
  {
    id: "schedule",
    icon: <CalendarMonthIcon />,
    title: "Schedule",
  },
  {
    id: "courses",
    icon: <MenuBookIcon />,
    title: "Courses",
  },
  {
    id: "gradebook",
    icon: <SchoolIcon />,
    title: "Gradebook",
  },
  {
    id: "performance",
    icon: <QueryStatsIcon />,
    title: "Performance",
  },
  {
    id: "announcements",
    icon: <CampaignIcon />,
    title: "Announcements",
  },
];

export const navbarLinks = [
  {
    id: "notification",
    icon: <NotificationsIcon />,
    title: "Notification",
    component: <NotificationDropDown />,
  },
  {
    id: "messages",
    icon: <EmailIcon />,
    title: "Messages",
    component: <MessagesDropDown />,
  },
  {
    id: "user",
    icon: <PersonIcon />,
    title: "user",
    component: <UserDropDown />,
  },
  {
    id: "language",
    icon: <LanguageButton />,
    title: "user",
    component: <LanguageDropDown />,
  },
];
export const userDropDown = [
  {
    id: "profile",
    title: "Profile",
  },
  {
    id: "settings",
    title: "Settings",
  },
  {
    id: "logout",
    title: "Logout",
  },
];
export const filters = [
  {
    id: "all",
    title: "All",
  },
  {
    id: "assignment",
    title: "Assignment",
  },
  {
    id: "quiz",
    title: "Quiz",
  },
];
