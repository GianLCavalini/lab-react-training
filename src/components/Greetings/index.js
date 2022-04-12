import "./style.modules.css"

export function Greetings(props) {

  if(props.lang === "de"){
    return (

      <div className="greetings-container">
       <p className="p" >Hallo Ludwing</p>
       </div>
       
  
    )}  else if(props.lang === "fr"){
      return (
        <div className="greetings-container" >
          <p className="p" >Bonjour François</p>
        </div>
      )
    }
  }

    

      



        
    


export default Greetings;