import { useEffect, useState } from "react";

// creo const con las direcciones de acceso, ya que podemos tener diferentes variables de entorno y facilita su modificacion
const CAT_PREFIX_URL = 'https://cataas.com/'

export function useCatImage({ fact }) {
    //estado interno
    const [imageUrl, setImageUrl] = useState()
    // Usamos para recuperar una img cada vez que tenemos una cita nueva
    useEffect(() => {
      // el condicional "si no hay un fact" return es para prevenir un error, porque la primera vez que
      // se renderiza el primer fact es "undefined"  
      if (!fact) return
      const firstThreeWords = fact.split(' ', 3).join(' ')
  
      fetch(`https://cataas.com/cat/says/${firstThreeWords}?json=true`)
        .then(res => res.json())
        .then(response => {
          const { url } = response
          //dejo el prefijo del sitio web por fuera del useEffect para tener la minima informacion en el hook
          return setImageUrl(url)
        })
    }, [fact])
  
    return { imageUrl: `${CAT_PREFIX_URL}${imageUrl}` }
  
  }