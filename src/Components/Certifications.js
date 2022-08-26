import Steve from '../Steve1080.png'
import classes from './styles.module.css'

function Certifications() {
    return(
        <div>
            <div class="container-fluid" style={{backgroundColor:"#1e1d24"}}>
                <div class= "row align-items-center "  >
                    <div class="col-md-2"></div>
                    <div class="col-md-2" >
                                    <h1 class="text-start" >
                                        Steven
                                    </h1>
                                
                                    <h1 class="text-start" >
                                        Hunal.
                                    </h1>

                                    <h5 class="text-start" >
                                        LinkedIn
                                    </h5>
                                    <div class="text-start">
                                        <button class="btn ">Contact Me</button>
                                    </div>
                    </div>
                    <div class="col-md-4">
                        <img src={Steve} class="img-fluid" style={{maxWidth:'60%', }} alt="me"/>
                    </div>
    
                    
                    <div class="col-md-4"  >
                        <div class="">
                            <h4 class="text-start" style={{color: "#f58b0a"}}>Introduction</h4>

                            <h2 class="text-start">Software Engineer</h2>
                            <h2 class="text-start">Web Developer</h2>
                            <p class="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        </div>
                    </div>
                </div>
                <div class= "row" style={{backgroundColor:"#25242d",border: "1px solid orange", alignContent:"center"}}>
                    <h2>What I am Great at</h2>
                    <p>Lorem ipsum</p>
                </div>
                <div class="row" style={{border: "1px solid orange"}}>
                    <div class="col-md-4" style={{border: "1px solid orange"}}>
                        <h3>Web Design</h3>
                    </div>
                    <div class="col-md-4" style={{border: "1px solid orange"}}>
                        <h3>Web Development</h3>
                    </div>
                    <div class="col-md-4" style={{border: "1px solid orange"}}>
                        <h3>Client Interaction</h3>
                    </div>
                </div>
                <div class="row" style={{backgroundColor:"#25242d", border: "1px solid orange"}}>
                    <div class="col">
                        <h2>Ways To Contact Me</h2>
                        <div class="row">
                            <div class="col-3" style={{border: "1px solid orange"}}>

                            </div>
                            <div class="col-3 float-end" style={{border: "1px solid orange"}}>
                                <h3>Email</h3>
                            </div>
                            <div class="col-3" style={{border: "1px solid orange"}}>
                                <h3 >Phone</h3>
                            </div>
                            <div class="col-3" style={{border: "1px solid orange"}}>

                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
        
        
        // <div class='container-fluid' style={{backgroundColor:'beige'}}>
        //         <div class="row">
                    
        //             <div class="col-4" style={{backgroundColor:"black"}}>
        //                 <img src={Steve} class="img-fluid float-end" style={{maxWidth:'50%', }} alt="me"/>
        //             </div>
        //             <div class="col-4" style={{}}>
        //             <span >SOFTWARE ENGINEER</span>
        //             </div>
        //             <div class="col-4">
        //                 <ul>
        //                     <ul>Javascript ES6</ul>
        //                     <ul>ReactJS</ul>
        //                     <ul>Redux</ul>
        //                     <ul>Bootstrap CSS</ul>
        //                     <ul>HTML5</ul>
        //                     <ul>Ruby</ul>
        //                     <ul>Ruby on Rails</ul>
        //                     <ul>Python</ul>
        //                     <ul>Flutter</ul>
        //                     <ul>C#</ul>
        //                     <ul>ASP.NET Core MVC</ul>
        //                     <ul>Salesforce Development</ul>
        //                     <ul>Git</ul>
        //                     <ul>Docker</ul>
        //                     <ul>Kubernetes</ul>
        //                     <ul>Jira</ul>
        //                     <ul>Agile</ul>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
    )
}

export default Certifications