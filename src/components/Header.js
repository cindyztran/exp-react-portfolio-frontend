import {Link} from "react-router-dom";

function Header(props) {
    //inline style for nav tag
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "2px solid #606e79",
        padding: "8px",
        width: "90%",
        margin: "auto",
    };

    return (
        <header>
            <h1>My Portfolio Page</h1>
            <nav style={navStyle}>
                <Link to="/">
                    <div>
                        HOME
                    </div>
                </Link>
                <Link to="/about">
                    <div>
                        ABOUT
                    </div>
                </Link>
                <Link to="/projects">
                    <div>
                        PROJECTS
                    </div>
                </Link>
            </nav>
        </header>
    )
}

export default Header;