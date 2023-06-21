import React from 'react'
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

 export function App () {

    return (
    <section className="FollowCardContainer"> 
        {/* IMPORTANTE!! el userName es lo que se pasa como props */}
        <TwitterFollowCard   userName="midudev">
            Miguel Angel duran
        </TwitterFollowCard>        
        <TwitterFollowCard  userName="pheralb">
            Pablo hernandez
        </TwitterFollowCard>        
        <TwitterFollowCard  userName="j10928">
            Carlos del Prado    
        </TwitterFollowCard>        
    </section>  
    )
 }
