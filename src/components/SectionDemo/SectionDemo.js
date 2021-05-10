import Button from '../../UI/Button/Button';
import GithubButton from '../../UI/GitHubButton/GithubButton';
import classes from './SectionDemo.module.css';


const SectionDemo = (props) =>   {

    return(
        <div className={classes.SectionDemo}
            style={{
            background: `${props.bgColor}`}}>

            <div className={classes.information}>
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

                <div >
                    {/* add something here like a pic */}
                </div>
            </div>


       
    )
}

export default SectionDemo;