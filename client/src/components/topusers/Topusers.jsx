import "./Topusers.css";
import { Link } from "react-router-dom"

function Topusers() {
    return (
        <div className="topusersContainer">
            <h4 className="topusersHeading">⭐ Top Users</h4>
            <Link to="/profile/blackgamma">
                <div className="topusersLinks">@blackgamma</div>
            </Link>
            <Link to="/profile/ranchdog">
                <div className="topusersLinks">@ranchdog</div>
            </Link>
            <Link to="/profile/citricshield">
                <div className="topusersLinks">@citricshield</div>
            </Link>
            <Link to="/profile/thebulldog">
                <div className="topusersLinks">@thebulldog</div>
            </Link>
            <Link to="/profile/eviltycoon">
                <div className="topusersLinks">@eviltycoon</div>
            </Link>
        </div>
    )
}

export default Topusers