import React, { useState } from 'react'; 
import axios from 'axios';
import {TextField, Typography,Button, CircularProgress,useTheme,useMediaQuery    } from '@material-ui/core';
import Table from '../components/Table';
function Home(){
    const [domain,setDomain]= useState('');
    const [table,setTable] = useState([]);
    const [loading,setLoading]= useState(false);
    const theme=useTheme();
    const isMobile=useMediaQuery(theme.breakpoints.down("xs"));
    
    async function handleSubmit(){
        try{
            // console.log(domain);
            setLoading(true);
            const {data} = await axios.get("https://subbuster.cyberxplore.com/api/find?domain="+domain);
            // console.log(data.data);
            if(data.data !== undefined){
                setLoading(false);
                setTable(data.data);
            }else{
                setLoading(false);
                setTable([]);
                alert("No results found!");
            }
        }catch(err){
            console.log(err.message);
        }
    }
    
    return (
        <div>
            <div style={{marginTop:"20px"}}>
                <Typography variant={!isMobile?"h4":"h5"}>Enter Domain</Typography>
                <div style={{display:"flex",margin:"auto",justifyContent:"center",width:"90%",marginTop:"15px",marginBottom:"30px"}}>
                    <TextField 
                        variant="filled"
                        placeholder="e.g. lpu.in"
                        value={domain}
                        onChange={(event)=>setDomain(event.target.value.trim())}
                        style={{width:"80%",marginRight:"10px"}}

                    />
                    <Button variant="contained" color="secondary" size="large" onClick={handleSubmit}>Bust  </Button>
                </div>
            </div>
            {loading && <CircularProgress />}
            <Table data={table}/>
        </div>
    )
}
export default Home;