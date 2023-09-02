import { useEffect } from "react"

export const useTitle = (title) => {
    
    useEffect(()=>{
        document.title =`${title} | Rent From Me`
    },[title])

  return title
}
