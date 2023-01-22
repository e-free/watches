import React from "react"
import PropTypes from "prop-types"

function WatchesList(props) {
  const {progress, handleDelete} = props 
  
  return (
    <div className="container">             
      <div className="row">
        {progress.map(elem =>          
          <div className="col-md-3" key={elem.id}>
            <div className="card position-relative text-center bg-light">
              <h2 className=" py-2 h4">{elem.town}</h2>
              <div className = "watch" style={{backgroundImage: "url(/clock.svg)"}}>            
                <div className = "hour" style = {{transform: `rotate(${elem.hour}deg)`}}></div>
                <div className = "min" style = {{transform: `rotate(${elem.min}deg)`}}></div>
                <div className = "sec" style = {{transform: `rotate(${elem.sec}deg)`}}></div>
              </div> 
              <div className="digit-watch fs-2 mt-2 "><span>{elem.digitHour}</span>:<span>{elem.digitMin}</span>:<span>{elem.digitSec}</span></div>
              <button onClick={() => handleDelete(elem.id)} className=  "del position-absolute rounded-circle border-0">X</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
WatchesList.propTypes = {
  progress: PropTypes.instanceOf(Array).isRequired  
}

export default WatchesList;

