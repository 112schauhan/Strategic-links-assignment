import "./Header.css";

const Header=()=>{

    return (

        <div className="main-header">
            <header>
                STRATEGIC LINK
            </header>
            <nav className="main-navigation">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Team</li>
                <li>
                    <select className="drop-down">
                        <option>Drop Down</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                </li>
                <li>Contact</li>
                <li className="special-button">Get Started</li>
            </nav>
        </div>
    )
}

export default Header;