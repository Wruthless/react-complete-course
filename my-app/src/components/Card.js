import './Card.css';

function Card(props) {
    // This enables the use of css styles on your custom component
    // when it is implemented.

    /*
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__descripton">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
        </Card>
    */

    // Notice above "className" is assigned to the component.
    const classes = 'card ' + props.className;

    // The children prop is a React reserved name, its value is
    // the content between the openign and closing tag of your
    // custom component. This is used for wrapper components.
    return <div className={classes}>{props.children}</div>;
}

export default Card;