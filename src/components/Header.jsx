import Logo from "./Logo";
import links from "../data/headerMenu"


export default function Header() {
    return (
    <header className="container">
        <div className="row">
        <Logo />
        <nav className="nav-list">
            <ul>
                {links.map((link) => {
                    return (
                    <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                    </li>
                    )
                })}
            </ul>
        </nav>
        </div>
        {/* <div className="selector"></div> */}
    </header>
    
    );
}