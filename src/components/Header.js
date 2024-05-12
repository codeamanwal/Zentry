import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import zentry from '../images/zentry_logo.webp';

export default function Header() {
  return (
    <Box sx={{padding:'0 10px'}}>
          <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'5px'}}>
              <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <img src={zentry} alt="Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                    <Typography sx={{fontSize:'20px',fontWeight:'700'}}>Zentry</Typography>
              </Box>
              <Box >
                <Button startIcon={<FaUser />} sx={{color:'gold',textTransform:'none',backgroundColor:'transparent'}} >test1@test.com</Button>
              </Box>
          </Box>
          <Box sx={{backgroundColor:'skyblue',padding:'5px',display:'flex',flexDirection:'row',gap:'5px',border:'1px solid #000000',flexWrap:'wrap'}}>
               <Link to="/" style={{padding:'10px 25px',border:'1px solid #000000',backgroundColor:'#fff',textDecoration:'none',color:'#000000'}}>Nav 1</Link>
               <Link to="/" style={{padding:'10px 25px',border:'1px solid #000000',backgroundColor:'#fff',textDecoration:'none',color:'#000000'}}>Nav 2</Link>
               <Link to="/" style={{padding:'10px 25px',border:'1px solid #000000',backgroundColor:'#fff',textDecoration:'none',color:'#000000'}}>Nav 3</Link>
          </Box>
    </Box>
  )
}
