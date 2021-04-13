import Container from "../components/container";
import Head from "next/head"
const { Component } = require("react");

class About extends Component
{
    render()
    {
        return(
            <div>
          
            <Container>
            <Head>
             <title>NextJS Tutorial About</title>
            </Head>
      {/* Este container es como crear mi propia etiqueta  */}
               <h1>About</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, tenetur veritatis voluptatem 
                  recusandae quae at adipisci ullam quaerat, 
                  reiciendis quam perferendis id repellendus vel,
                   assumenda et? 
                 Eligendi perspiciatis minus dignissimos.
                 </p>
              
 
            </Container>
             </div>
          
         )
        
    }
}
export default About