export default function ComicsCard({title, thumb}) {
    return ( 
        <div className="comics-card">
            <img src={thumb} alt={title}/>
            <h3>{title}</h3>
        </div>
    );
}