import React from 'react'
import loading from './Images/Loading-bar.gif'

const Spinner = (props)=> {
        return (
            <div className="text-center">
                <img className="my-3" src={loading} alt="loading" style={{
                backgroundColor: props.Mode === "light" ? "#5c5353" : "white",
              }}/>
            </div>
        )
}

export default Spinner