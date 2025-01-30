import ComicsCard from "./ComicsCard";
import ComicsList from "./ComicsList";

export default function Main() {
    return (
    <main>
        <div className="banner"></div>
        <div className="content">
            <div className="container">
                <button className="btn-curr-series">CURRENT SERIES</button>
                <div className="row">
                <ComicsList />
                </div>
            </div>
        </div>
    </main>
    );
}

