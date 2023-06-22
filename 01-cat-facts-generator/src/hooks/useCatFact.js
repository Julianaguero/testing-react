import { useState, useEffect } from "react"
import { getRandomFact } from '../services/facts'


export function useCatFact() {
    const [fact, setFact] = useState("this is a random fact")
    
    const refreshFact  = () => {
      getRandomFact().then(newFact => setFact(newFact))
    }
  
    useEffect(() => {
      refreshFact()
    }, [])
  
    return {fact, refreshFact}
  }
  