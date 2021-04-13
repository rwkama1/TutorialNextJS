import Container from "../components/container";
import Head from "next/head"
import Users from "../components/users";

const { Component } = require("react");

class Index extends Component
{
    
    static getInitialProps=async (ctx)=>{
       const rest= await fetch("https://reqres.in/api/users");
       const resjson =await rest.json();
       return { users: resjson.data }
      }
    //   getInitialProps
    //   habilita  la representación del lado del servidor en una página y
    //le permite hacer un listado de los datos inicialmente , 
    //significa enviar la página con los datos ya llenados desde el servidor.
    //    Esto es especialmente útil para SEO ..
    
    render()
    {
        
        return <div>
          
           <Container>
           <Head>
            <title>NextJS Tutorial Home</title>
             </Head>
             <Users users={this.props.users}></Users>
           </Container>
            </div>
         
        
    }
}

export default Index