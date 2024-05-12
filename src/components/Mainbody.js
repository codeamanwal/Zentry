import { Box, Button, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import { RiArrowDropRightFill } from "react-icons/ri";
import { MdOutlineAccessTime } from "react-icons/md";

export default function Mainbody() {
    const [selectedopt,setSelectedopt]=useState('Pending');
    const [inputs, setInputs] = useState({
        input1: 'CGCTUS66',
        input2: '1234',
        input3: 'B0FCU533LAX',
        input4: 'ABCD',
        input5: 'IRVTUS3NXXXX',
        input6: 'XYZ',
        input7: 'EGSP',
        input8: '',
        input9: '00987',
        input10: '',
        input11: 'SICVFRPPXXXX',
        input12: '',
        input13: 'MSNYUS33XXXX',
        input14: '9876',
        input15: '',
        input16: '',
        input17: '',
        input18: '',
        input19: 'EGSP',
        input20: '',
        input21: '05678',
        input22: '',
        input23: 'SICVFRPPXXXX',
        input24: '',
    });
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };
    
  return (
    <Box sx={{display:{md:'grid',xs:'flex'},flexDirection:'column',gridTemplateColumns:'250px auto',gap:'10px',padding:'5px',minHeight:'600px'}}>

        <Box sx={{border:'1px solid #000',padding:'5px 7px',display:'flex',flexDirection:{xs:'row',md:'column'},justifyContent:{xs:'space-between',md:'flex-start'},alignItems:'center'}}>
             <Box sx={{padding:{md:'30px 0px 0',xs:'30px 0px'}}}>
                 <ul style={{display:'flex',flexDirection:'column',gap:'10px',textDecoration:'none',listStyle:'none',padding:'0 10px'}}>
                    <li>
                       <Link href="#" sx={{textDecoration:'none',color:selectedopt==='Pending'?'#000000':'#9e74ad',display:'flex',alignItems:'center'}} onClick={()=>{setSelectedopt('Pending')}}><RiArrowDropRightFill /> Pending SSI</Link>
                    </li>
                    <li>
                       <Link href="#" sx={{textDecoration:'none',color:selectedopt==='Completed'?'#000000':'#9e74ad',display:'flex',alignItems:'center'}} onClick={()=>{setSelectedopt('Completed')}}><RiArrowDropRightFill /> Completed SSI</Link>
                    </li>
                    <li>
                       <Link href="#" sx={{textDecoration:'none',color:selectedopt==='Admin'?'#000000':'#9e74ad',display:'flex',alignItems:'center'}} onClick={()=>{setSelectedopt('Admin')}}><RiArrowDropRightFill /> Admin</Link>
                    </li>
                 </ul>
             </Box>
             <Box sx={{marginTop:{md:'200px',xs:'0'}}}>
                 <Button sx={{backgroundColor:'transparent',border:'1px solid #000000', color:'#000000',borderRadius:'0',padding:'5px 18px'}}>Admin</Button>
             </Box>
        </Box>

        <Box sx={{border:'1px solid #000',padding:'15px'}}>
              { selectedopt==='Pending' && 
              <>
                  <Box>
                       <Typography sx={{fontSize:'22px',fontWeight:'400',color:'#8ab4e8',alignItems:'center',display:'flex'}}><MdOutlineAccessTime style={{marginRight:'5px'}}/>Pending SSI Confirmation: UREF_1</Typography>
                  </Box>

                  <Box sx={{ display: 'grid', gridTemplateColumns: {sm:'repeat(2, 1fr)',xs:'repeat(1,1fr)'}, marginTop: '20px', gap: '10px' }}>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                            <Typography>Unique Reference</Typography>
                            <Typography>UREF_1</Typography>
                        </Box>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                            <Typography>Currency</Typography>
                            <Typography>CHF</Typography>
                        </Box>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                            <Typography>ISIN</Typography>
                            <Typography>ISIN_1</Typography>
                        </Box>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                            <Typography>Quantity</Typography>
                            <Typography>10</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column', justifyContent: 'center', border: '1px solid lightgrey', padding: '15px', marginTop: '6px' }}>
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                                <Typography>Account</Typography>
                                <Typography>Account_1</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column', justifyContent: 'center',  border: '1px solid lightgrey', padding: '15px', marginTop: '6px' }}>
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                                <Typography>Counter Party</Typography>
                                <Typography>test.com</Typography>
                            </Box>
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                                <Typography>CounterParty Account</Typography>
                                <Typography>Account_CP_1</Typography>
                            </Box>
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                                <Typography>CounterParty Contact</Typography>
                                <Typography>test1@test.com</Typography>
                            </Box>
                        </Box>
                  </Box>
                
                  <Box sx={{display:'flex',gap:'30px',margin:'50px 5px',alignItems:'center'}}>
                      <Typography>SSI Details</Typography>
                      <select id="cars" name="cars" style={{padding:'10px',width:'50%',cursor:'pointer'}}>
                        <option value="0">Select SSi from pre-configured list</option>
                        <option value="1">SSI 1</option>
                        <option value="2">SSI 2</option>
                        <option value="3">SSI 3</option>
                      </select>
                  </Box>

                  <Box sx={{ display: 'flex', gap: '30px', flexDirection: {sm:'row',xs:'column'} }}>
                        <Box sx={{ flex: '1', minWidth: '0',display: 'flex', gap: '14px', flexDirection: 'column',}}>
                            <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column',  border: '1px solid lightgrey', padding: '15px',position:'relative'}}>
                                <Typography sx={{position:'absolute',backgroundColor:'#fff',fontSize:'11px',top:'-9px',padding:'0 5px'}}>BUYR</Typography>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>96Q</label>
                                    <input onChange={handleInputChange} type="text" name="input1" value={inputs.input1} style={{padding:'5px',backgroundColor:'#e4efb6',outline:'none',border:'none'}}/>
                                </Box>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>Account</label>
                                    <input onChange={handleInputChange} type="text" name="input2" value={inputs.input2} style={{padding:'5px',backgroundColor:'#e4efb6',outline:'none',border:'none'}}/>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column',  border: '1px solid lightgrey', padding: '15px',position:'relative'}}>
                                <Typography sx={{position:'absolute',backgroundColor:'#fff',fontSize:'11px',top:'-9px',padding:'0 5px'}}>BUYR</Typography>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>95P</label>
                                    <input onChange={handleInputChange} type="text" name="input3" value={inputs.input3} style={{padding:'5px',backgroundColor:'#e4efb6',outline:'none',border:'none'}}/>
                                </Box>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>Account</label>
                                    <input onChange={handleInputChange} type="text" name="input4" value={inputs.input4} style={{padding:'5px',backgroundColor:'#e4efb6',outline:'none',border:'none'}}/>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column',  border: '1px solid lightgrey', padding: '15px',position:'relative'}}>
                                <Typography sx={{position:'absolute',backgroundColor:'#fff',fontSize:'11px',top:'-9px',padding:'0 5px'}}>BUYR</Typography>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>95P</label>
                                    <input onChange={handleInputChange} type="text" name="input5" value={inputs.input5} style={{padding:'5px',backgroundColor:'#e4efb6',outline:'none',border:'none'}}/>
                                </Box>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>Account</label>
                                    <input onChange={handleInputChange} type="text" name="input6" value={inputs.input6} style={{padding:'5px',backgroundColor:'#e4efb6',outline:'none',border:'none'}}/>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column',  border: '1px solid lightgrey', padding: '15px',position:'relative'}}>
                                <Typography sx={{position:'absolute',backgroundColor:'#fff',fontSize:'11px',top:'-9px',padding:'0 5px'}}>BUYR</Typography>
                                <Box sx={{ display: 'flex',flexDirection:'row',gap:'5px',flexWrap:'wrap' }}>
                                    <label style={{width:'100px'}}>95R</label>
                                    <input onChange={handleInputChange} type="text" name="input7" value={inputs.input7} style={{padding:'5px',backgroundColor:'#e4efb6',outline:'none',border:'none',width:'100px'}}/>
                                    <input onChange={handleInputChange} type="text" name="input8" value={inputs.input8} style={{padding:'5px',backgroundColor:'#e4efb6',outline:'none',border:'none',width:'100px'}}/>
                                    <input onChange={handleInputChange} type="text" name="input9" value={inputs.input9} style={{padding:'5px',backgroundColor:'#e4efb6',outline:'none',border:'none',width:'100px'}}/>
                                </Box>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>Account</label>
                                    <input onChange={handleInputChange} type="text" name="input10" value={inputs.input10} style={{padding:'5px',outline:'none',}}/>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column',  border: '1px solid lightgrey', padding: '15px',position:'relative'}}>
                                <Typography sx={{position:'absolute',backgroundColor:'#fff',fontSize:'11px',top:'-9px',padding:'0 5px'}}>BUYR</Typography>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>95P</label>
                                    <input onChange={handleInputChange} type="text" name="input11" value={inputs.input11} style={{padding:'5px',backgroundColor:'#e4efb6',outline:'none',border:'none'}}/>
                                </Box>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>Account</label>
                                    <input onChange={handleInputChange} type="text" name="input12" value={inputs.input12} style={{padding:'5px',outline:'none',}}/>
                                </Box>
                            </Box>
                            <Box sx={{padding:'5px 20px',display:'flex',alignItems:'center'}}>
                                    <label>Confirm SSI</label>
                                    <input onChange={handleInputChange} type="checkbox" name="confirm" value="" />
                            </Box>
                        </Box>
                        <Box sx={{ flex: '1', minWidth: '0',display: 'flex', gap: '10px', flexDirection: 'column', }}>
                        <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column',  border: '1px solid lightgrey', padding: '15px',position:'relative'}}>
                                <Typography sx={{position:'absolute',backgroundColor:'#fff',fontSize:'11px',top:'-9px',padding:'0 5px'}}>BUYR</Typography>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>95P</label>
                                    <input onChange={handleInputChange} type="text" name="input13" value={inputs.input13} style={{padding:'5px',backgroundColor:'#f4dcde',outline:'none',border:'none'}}/>
                                </Box>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>Account</label>
                                    <input onChange={handleInputChange} type="text" name="input14" value={inputs.input14} style={{padding:'5px',backgroundColor:'#f4dcde',outline:'none',border:'none'}}/>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column',  border: '1px solid lightgrey', padding: '15px',position:'relative'}}>
                                <Typography sx={{position:'absolute',backgroundColor:'#fff',fontSize:'11px',top:'-9px',padding:'0 5px'}}>BUYR</Typography>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>95P</label>
                                    <input onChange={handleInputChange} type="text" name="input15" value={inputs.input15} style={{padding:'5px',outline:'none',}}/>
                                </Box>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>Account</label>
                                    <input onChange={handleInputChange} type="text" name="input16" value={inputs.input16} style={{padding:'5px',outline:'none',}}/>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column',  border: '1px solid lightgrey', padding: '15px',position:'relative'}}>
                                <Typography sx={{position:'absolute',backgroundColor:'#fff',fontSize:'11px',top:'-9px',padding:'0 5px'}}>BUYR</Typography>
                            <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>95P</label>
                                    <input onChange={handleInputChange} type="text" name="input17"value={inputs.input17} style={{padding:'5px',outline:'none',}}/>
                                </Box>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>Account</label>
                                    <input onChange={handleInputChange} type="text" name="input18" value={inputs.input18} style={{padding:'5px',outline:'none',}}/>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column',  border: '1px solid lightgrey', padding: '15px',position:'relative'}}>
                                <Typography sx={{position:'absolute',backgroundColor:'#fff',fontSize:'11px',top:'-9px',padding:'0 5px'}}>BUYR</Typography>
                                <Box sx={{ display: 'flex',flexDirection:'row',gap:'5px',flexWrap:'wrap' }}>
                                    <label style={{width:'100px'}}>95R</label>
                                    <input onChange={handleInputChange} type="text" name="input19" value={inputs.input19} style={{padding:'5px',backgroundColor:'#f4dcde',outline:'none',border:'none',width:'100px'}}/>
                                    <input onChange={handleInputChange} type="text" name="input20" value={inputs.input20} style={{padding:'5px',outline:'none',width:'100px'}}/>
                                    <input onChange={handleInputChange} type="text" name="input21" value={inputs.input21} style={{padding:'5px',backgroundColor:'#f4dcde',outline:'none',border:'none',width:'100px'}}/>
                                </Box>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>Account</label>
                                    <input onChange={handleInputChange} type="text" name="input22" value={inputs.input22} style={{padding:'5px',outline:'none',}}/>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column',  border: '1px solid lightgrey', padding: '15px',position:'relative'}}>
                                <Typography sx={{position:'absolute',backgroundColor:'#fff',fontSize:'11px',top:'-9px',padding:'0 5px'}}>BUYR</Typography>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>95P</label>
                                    <input onChange={handleInputChange} type="text" name="input23" value={inputs.input23} style={{padding:'5px',backgroundColor:'#f4dcde',outline:'none',border:'none'}}/>
                                </Box>
                                <Box sx={{ display: 'grid',gridTemplateColumns:{md:'100px 200px',sm:'80px 160px'} }}>
                                    <label>Account</label>
                                    <input onChange={handleInputChange} type="text" name="input24" value={inputs.input24} style={{padding:'5px',outline:'none',}}/>
                                </Box>
                            </Box>
                            <Box sx={{padding:'5px 20px',display:'flex',alignItems:'center'}}>
                                    <label>Confirm SSI</label>
                                    <input type="checkbox" name="confirm" value="" />
                            </Box>
                        </Box>
                  </Box>

                  <Box sx={{display:'flex',justifyContent:{sm:'flex-end'},gap:'10px',marginTop:'40px',flexWrap:'wrap'}}>
                  <Button sx={{backgroundColor:'transparent',border:'1px solid #000000', color:'#000000',borderRadius:'500px',padding:'5px 18px',textTransform:'none'}}>Reset</Button>
                  <Button sx={{backgroundColor:'transparent',border:'1px solid #000000', color:'#000000',borderRadius:'500px',padding:'5px 18px',textTransform:'none'}}>Propose New C/P SSI</Button>
                  <Button sx={{backgroundColor:'#74564c', color:'#fff',borderRadius:'500px',padding:'5px 18px',textTransform:'none',':hover':{backgroundColor:'#74564c', color:'#fff'}}}>Confirm</Button>
                  </Box>

              </>
              }
        </Box>
    </Box>
  )
}
