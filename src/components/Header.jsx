import Logo from "./Logo";


const links = [
    {
        id: 1,
        text: 'CHARACTERS',
        url: '#'
    },
    {
        id: 2,
        text: 'COMICS',
        url: '#'
    },
    {
        id: 3,
        text: 'MOVIES',
        url: '#'
    },
    {
        id: 4,
        text: 'TV',
        url: '#'
    },
    {
        id: 5,
        text: 'GAMES',
        url: '#'
    },
    {
        id: 6,
        text: 'COLLECTIBLES',
        url: '#'
    },
    {
        id: 7,
        text: 'VIDEOS',
        url: '#'
    },
    {
        id: 8,
        text: 'FANS',
        url: '#'
    },
    {
        id: 9,
        text: 'NEWS',
        url: '#'
    },
    {
        id: 10,
        text: 'SHOP',
        url: '#'
    }
];


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
                {/* <li>
                    <a href="#">CHARACTERS</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">COMICS</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">MOVIES</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">TV</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">GAMES</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">COLLECTIBLES</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">VIDEOS</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">FANS</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">NEWS</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">SHOP</a>
                </li>
            </ul> */}
        </nav>
        </div>
        {/* <div className="selector"></div> */}
    </header>
    
    );
}