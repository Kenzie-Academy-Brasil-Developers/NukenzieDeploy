import React from 'react'
import nuKenzieLogo from "/src/assets/NukenzieLogo.png"
import ilustration from "/src/assets/ilustrationPagIni.png"
export default function InitialPage() {
  return(
               <div className="pagStart">
          <div className="leftPagStart">
            <img
              className="imgLogo"
              src={nuKenzieLogo}
              alt="Logo"
            />
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
  
            
          </div>
          <div className="imgDiv">
            <img src={ilustration} alt="" />
          </div>
        </div>
  
  )
    
    
 
     
}
