import Button from '../../UI/Button/Button';
import GithubButton from '../../UI/GitHubButton/GithubButton';
import classes from './Section.module.css';


const Section = (props) =>   {

    return(
        <div className={classes.Section}
            style={{
            background: `${props.bgColor}`}}>

            <div className={classes.information} 
                style={{
                textShadow: props.shadow ? '0 3px 8px #7f8c8d' : 'none'
                }}>
            <div className={classes.title}>
                {props.title}
            </div>
                <div className={classes.description}>
                    {props.description}
                </div>

                <div className={classes.buttonWrapper}> 
                    {
                        props.link && (                        
                        <Button 
                            buttonValue={props.buttonValue} 
                            link={props.link}
                            />)
                    }

                        <GithubButton 
                            githubButtonValue={props.githubButtonValue} 
                            githubLink={props.githubLink}
                            />
                    </div>

                </div>
            </div>


       
    )
}

export default Section;