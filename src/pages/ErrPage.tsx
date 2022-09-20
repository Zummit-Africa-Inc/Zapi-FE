import React from 'react'

import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import HomeIcon from '@mui/icons-material/Home';
import { Code, Tree } from "../assets"

const ErrPage:React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.root}>
        <div >
          <img className={classes.page} src={Code} alt='code' />
          <div className={classes.txt}>
            <h1>Oops!</h1>
            <h2>404 - PAGE NOT FOUND</h2>
          </div>
        </div>
        <div className={classes.home}>
          <HomeIcon className={classes.icon}/>
          <Link to='/'>Back home</Link>
        </div>
        
      </section>
    </>
    
  )
}

const useStyles = makeStyles({
  root:{
    margin:'0',
    padding:'0',
    backgroundColor:'#ffff',
    textAlign:'center',
    fontFamily:'Century',
    height: '100vh',
  },
  page:{
      margin:'0',
      padding:'0',
      width:'350px',
  },
  txt:{
    textAlign:'center',
    backgroundClip:'text',
    WebkitBackgroundClip:'text',
    color:'transparent',
    backgroundImage:`url(${Tree})`,
    '& > h1':{
      marginTop:'-6rem',
      padding:'0',
      fontSize:'200px',
      "@media screen and (max-width: 900px)": {
        fontSize: "150px",
      },
    },
      '& > h2':{
        fontSize:'42px',
        marginBottom:'10px'
      }
  },
  home:{
    height:'48px',
    width:'150px',
    textAlign:'center',
    borderRadius:'30px',
    background: '#ffdd5a',
    padding:'13px 10px',
    paddingLeft:'10px',
    cursor: 'pointer',
    margin:'auto',
    display:'flex',
    justifyContent:'space-evenly',
    '& > a':{
      color:'black'
    }
  },
    
  icon:{
    fontSize:'30px',
    cursor:'pointer',
    marginTop:'-2px'
  }
})

export default ErrPage