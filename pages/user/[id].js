
 import { Component } from "react";
 import { withRouter } from "next/router";
import Container from "../../components/container";
    //localhost:3000/user/id
    //Con withrouter puedo obtener el id del componente dinamico
    //[id].js   
    
 class UserProfile extends Component
      { 
        static getInitialProps=async (ctx)=>{
            const rest= await fetch(
                "https://reqres.in/api/users/"+ctx.query.id);
            const resjson =await rest.json();
            console.log(resjson.data)
            return { user: resjson.data }
            // console.log(ctx.query.id) 
            //retorna el id que me estan pasando en la url
            
           //El metodo getInitialProps si o si tengo retornar un objeto
           //para que no me de rror
           }
          render()
          {
        
              return(
                  <Container>
                 <div className="row">
                     <div className="col-md-6 offset-md-3">
                         <div className="card">
                             <div className="card-header text-center">
                                 <img src={this.props.user.avatar} alt=""
                                  style={{borderRadius:"50%"}}/>
                             </div>
                             <div className="card-body text-center">
                                <h2>
                                {this.props.user.id}.   {this.props.user.first_name} {this.props.user.last_name} 
                               
                                </h2>
                                <p>Email: {this.props.user.email} </p>
                             </div>
                         </div>
                     </div>
                 </div>
                 </Container>
              )
          }
      
      }
export default withRouter(UserProfile)
      
    //   const router=useRouter();
    //    const obj=router.query;
    //    console.log(obj);