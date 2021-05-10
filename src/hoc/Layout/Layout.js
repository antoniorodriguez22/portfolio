import classes from "./Layout.module.css";
import Section from "../../components/Section/Section";


const Layout = () =>{


    return(
        <div className={classes.Layout}>
            <Section 
                title="I am Antonio Rodriguez" 
                description="Exploring the field of Computer Science at the University of Central Florida. I am passionate about web 
                development in MERN stack and willing to explore other exciting and cutting-edge 
                technologies. Keep scrolling to learn more about my projects!"
                githubLink="https://github.com/antoniorodriguez22"
                githubButtonValue="Github"
                bgColor="radial-gradient(circle at bottom, navy 0, black 100%)"/>


            <Section 
                title="Humanos Venezuela" 
                description="Online humanitarian help platform developed to help Venezuelans donate medicines and promote GoFundMe Campaigns. 
                Built with React.js, AWS Amplify, Cognito and Lambda."
                githubLink="https://github.com/antoniorodriguez22/humanos-venezuela"
                buttonValue="humanosvenezuela.com"
                link="https://humanosvenezuela.com"
                githubButtonValue="Github upon request"
                bgColor="#34ebbd"
                shadow="true"
                />   

            <Section 
                title="SURFLIX" 
                description="Netflix UI clone inspired in surfing. Built with React.js and Redux. Simply click login 
                in the Auth screen to start browsing."
                githubLink="https://github.com/antoniorodriguez22/surflix"
                buttonValue="Surflix"
                link="https://admiring-aryabhata-423363.netlify.app/"
                githubButtonValue="View on Github"
                bgColor="#130f40"
                />   

            <Section
                title="Coronavirus Tracker Bot" 
                description="Worldwide COVID-19 statistics every 4-hours. Twitter bot built using Cheerio for web-scraping and the Twitter API."
                buttonValue="View Twitter Profile"
                link="https://twitter.com/COVID19TRACKES"
                githubButtonValue="View on Github"
                githubLink="https://github.com/antoniorodriguez22/covid-bot"
                bgColor="rgba(29,161,242,1.00)"
            />       

            <Section
                title="More Projects Under Construction..." 
                description="Feel free to contact me via LinkedIn"
                buttonValue="LinkedIn"
                link="https://www.linkedin.com/in/antonio-rodriguez-a5686a105/"
                githubLink="https://github.com/antoniorodriguez22"
                githubButtonValue="Github"
                bgColor="#f53b57"
            />       


         </div>
    )


}

export default Layout;