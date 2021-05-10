import classes from './Button.module.css'

const Button = (props) => {

    return(
        <a href={props.link} target="_blank" rel="noreferrer">
            <button className={classes.Button} >
                    {props.buttonValue}
            </button>
        </a>
    )

}

export default Button;