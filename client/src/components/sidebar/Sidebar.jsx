import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import Topusers from "../topusers/Topusers";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link to="/">
            <li className="sidebarListItem">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
          </Link>
          <Link to="/">
            <li className="sidebarListItem">
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </li>
          </Link>
          <Link to="/">
            <li className="sidebarListItem">
              <PlayCircleFilledOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </li>
          </Link>
          <Link to="/">
            <li className="sidebarListItem">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </li>
          </Link>
          <Link to="/">
            <li className="sidebarListItem">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
          </Link>
          <Link to="/">
            <li className="sidebarListItem">
              <HelpOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </li>
          </Link>
          <Link to="/">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </li>
          </Link>
          <Link to="/">
            <li className="sidebarListItem">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </li>
          </Link>
          <Link to="/">
            <li className="sidebarListItem">
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </li>
          </Link>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <Topusers />
      </div>
    </div>
  );
}
