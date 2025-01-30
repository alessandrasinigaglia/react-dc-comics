import ComicsCard from "./ComicsCard";
import comics from "../data/comics";

export default function ComicsList() {
    return (
    <section className="comics">
        <div className="container">
            <div className="comics-grid">
                {comics.map((elm) => {
                    return  ( 
                    <div className="comics.col" key={elm.id}>
                    <ComicsCard thumb={elm.thumb} title={elm.title}
                    />
                </div>
                    );
                })}
            </div>
            <button className="load-more">LOAD MORE</button>
        </div>
    </section>
    )
}