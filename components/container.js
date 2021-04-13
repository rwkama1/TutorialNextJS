import { Component } from "react";
import Navigation from "./navigation";
import Head from "next/head"

export default class Container extends Component
{
    render()
    {
        return (
            <div>
                <Head>
                    {/* El HEAD es un componente que nos da Next    
                    para representar los elementos de un head   
                    que contiene un HTML */}
                    <title>NextJS Tutorial</title>
                    <link rel="stylesheet"
                     href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css"/>
                     {/* Sacado de Bootswatch CDN */}
                </Head>
                <Navigation></Navigation>
                <div className="container p-4">
                    {this.props.children}
                    {/* En este props children iria lo q va adentro 
                    del Container 
                    de cada componente que se encuentra en PAGES,
                    En este caso lo que estamos pasando es una Navegacion */}
                </div>
            </div>
       )
    }
    
}