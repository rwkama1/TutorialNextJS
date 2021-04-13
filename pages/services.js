import Container from "../components/container";
import Head from "next/head"

const { Component } = require("react");

class Services extends Component
{
    render()
    {
        return(
            <div>
               <Container>
               <Head>
                    <title>NextJS Tutorial Services</title>
             </Head>
             {/* En ves de hacerlo en el CONTAINER,pongo HEAD en todos
             los componentes con un titulo diferente */}
               <h1>Services</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, tenetur veritatis voluptatem 
                  recusandae quae at adipisci ullam quaerat, 
                  reiciendis quam perferendis id repellendus vel,
                   assumenda et? 
                 Eligendi perspiciatis minus dignissimos.</p>
               </Container>
             
                
            </div>
        )
    }
}
export default Services