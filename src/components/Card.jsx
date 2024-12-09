import Button from './Button.jsx';

export default function Card(props) {

    return (
        <div className="card">
            <img src={props.src} className="icon"  alt="car icon" />

            <h1 className="title">
                {props.title}
            </h1>

            <p className="paragraph">
                {props.paragraph}
            </p>

            <Button />
        </div>
    )
}

