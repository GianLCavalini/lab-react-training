import "./sytle.modules.css"

export function Random ({min, max}) {

        min = Math.ceil(min);
        max = Math.ceil(max);
        return (

            <div>
                <div className="random" ><p className="p" >Random value between 1 and 6 = {Math.floor(Math.random() * (max - min))+ min}</p></div>



            </div>
        )



    
    


};



