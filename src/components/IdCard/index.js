import "../IdCard/style.modules.css"

export function IdCard({firstName, lastName, gender, height, birth, picture}) {

    return(

        <div className="container">

                <div>
                    <img className="img"src={picture} alt="imagem"/>

                 </div>
            <div>
                <strong className="strong">First Name:</strong> <span>{firstName}</span><br></br>
                <strong className="strong" >Last Name:</strong> <span>{lastName}</span><br></br>
                <strong className="strong" >Gender:</strong> <span>{gender}</span><br></br>
                <strong className="strong" >Heigth:</strong>   <span>{height}</span><br></br> 
                <strong className="strong" >Birth:</strong> <span className="span">{birth.toDateString()}</span>
            </div>
                

        </div>



    );

}