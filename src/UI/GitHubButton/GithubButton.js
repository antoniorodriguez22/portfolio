import classes from './GithubButton.module.css'

const GithubButton = (props) => {

    return(
        <a href={props.githubLink} target="_blank" rel="noreferrer">
            <button className={classes.Button}>
                    {props.githubButtonValue}
            </button>
        </a>
    )

}

export default GithubButton;