import React from 'react'
import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

// import './Sidebar.css'




const Sidebar = ({ resetNote }) => {
  return (
    <nav className="Sidebar">
      <div className="logo">
        <img src={quill} alt="Noteherder" />
      </div>
      <a onClick={(ev) => {
        ev.preventDefault()
        resetNote()
      }}
        className="new-note"
        href="/notes">
        <img src={newHover} alt="New note" />
        <img className="outline" src={newIcon} alt="New note" />
      </a>
      <div className="SignOut">
        <button>
          <i className="fa fa-sign-out"></i>
        </button>
      </div>
    </nav>
  )
}

// const styles = {
//     sidebar:{
//         width:'6rem',
//         backgroundColor:'#f3f3f3',
//         padding:'0.5rem 0',
//         display:'flex',
//         flexDirection:'column',
//         alignItems:'center'
//     },
//     logo:{

//     }

// }

export default Sidebar