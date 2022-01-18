import React, { Fragment} from 'react';

const NavBar = (props) => {
  return (
    <nav style={{
      display:'flex',
      backgroundColor: "#545c78",
      position: "absolute",
      width: "100%",
      zIndex: 9999,
      top: 0,
      left: 0,
      flexDirection:'row',
      height: '75px'
    }}>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0em 1.2em'
      }}>
        <h1 style={{color: '#cfd4e2'}}>nasa astronomy picture of the day </h1>
      </div>
        <div style={{
          flex: 1,
          marginTop: "0em",
          display: "flex",
          flexDirection: "row",
          borderRadius: "70px 0px 0px 70px",
          background: "transparent",
          userSelect: "none",
          alignItems: 'center',
          padding: '0em 1.2em',
          justifyContent: 'flex-end'
        }}>
          {/* <NavButton to="/" label="home" />
          <NavButton to="/news" label="news" />
         : (
            <Fragment>
              <NavButton to="/login" label="login" />
              <NavButton to="/register" label="Sign up" />
            </Fragment>
          ) 
           */}
        </div>
    </nav> 
  )
}

export default NavBar;;