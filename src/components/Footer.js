import React from 'react'
// import { Link } from "react-router-dom";
export default function Footer(props) {
  return (
<div>

    <footer style={{backgroundColor: props.mode==='light'?'#caced1':'#212529' ,marginTop:'20px'}}>
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <h5 className="mb-3" style={{letterSpacing: '2px', color:props.mode==='light'?'black':'white'}}>Footer Content</h5>
          <p style={{letterSpacing: '2px', color:props.mode==='light'?'black':'white'}}>
          The main use of News API is to search through every article published by over 80,000 news
          sources and blogs in the last 5 years. Think of us as Google News that you can interact with
          programmatically!
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h5 className="mb-3" style={{letterSpacing: '2px', color:props.mode==='light'?'black':'white'}}>Links</h5>
          <ul className="list-unstyled mb-0">
          <ul className="list-unstyled mb-0">
            <li className="mb-1">
              <a href="/business" style={{color:props.mode==='light'?'black':'white',textDecoration: 'none'}}>Business</a>
            </li>
            <li className="mb-1">
              <a href="/entertainment" style={{color:props.mode==='light'?'black':'white',textDecoration: 'none'}}>Entertainment</a>
            </li>
            <li className="mb-1">
              <a href="/general" style={{color:props.mode==='light'?'black':'white',textDecoration: 'none'}}>General</a>
            </li>
            <li>
              <a href="/health" style={{color:props.mode==='light'?'black':'white',textDecoration: 'none'}}>Health</a>
            </li>
          </ul>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <h5 className="mb-1" style={{letterSpacing: '2px', color:props.mode==='light'?'black':'white'}}>Opening Hours</h5>
          <table className="table" style={{color:props.mode==='light'?'black':'white', borderColor: '#666'}}>
            <tbody>
              <tr>
                <td>Mon - Fri:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Sat - Sun:</td>
                <td>8am - 1am</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)',color:props.mode==='light'?'black':'white'}}>
       © 2023 Copyright: 
      <a className={`text-${props.mode==='light'?'dark':'light'}`} style={{textDecoration: 'none'}} href="https://google.com/"> NewsMonkey.com </a>
    </div>
  </footer>
  
</div>
  )
}


