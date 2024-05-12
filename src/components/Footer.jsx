import { Box, Typography } from '@mui/material'
import React from 'react'
import { MdCopyright } from "react-icons/md";

export default function Footer() {
  return (
    <Box sx={{padding:{sm:'25px 70px',xs:'10px'},border:'1px solid #000000',margin:'0 5px',display:'flex',flexDirection:'row',gap:'10px',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',marginBottom:'10px'}}>
       <Box>
          <Typography sx={{fontSize:'25px',fontWeight:'400'}}>Zentry</Typography>
       </Box>
       <Box>
          <Typography sx={{fontSize:'15px',fontWeight:'400'}}>Version 2.3.01</Typography>
          <Typography sx={{fontSize:'12px',fontWeight:'400'}}><MdCopyright /> Copyright@ SSIColloab 2023</Typography>
       </Box>
    </Box>
  )
}
