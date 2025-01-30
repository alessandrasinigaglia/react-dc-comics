import ComicsCard from "./ComicsCard";
import comics from "../data/comics";

export default function ComicsList() {
    return (
    <section className="comics">
        <div className="container">
            <div className="row">
                {comics.map((elm) => {
                    return  ( 
                    <div className="comics.col" key={elm.id}>
                    <ComicsCard thumb={elm.src} title={elm.title}
                    />
                </div>
                    );
                })}
            </div>
        </div>
    </section>
    )
}