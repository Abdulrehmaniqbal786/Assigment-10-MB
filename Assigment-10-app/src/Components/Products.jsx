import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { Card_data } from './Cards_data'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
// import { Details } from './Details';




 const Products = () => {

    // const navigate = useNavigate()
  
    const navigate_handle = (id) =>{

      console.log("Details")


    }
      
   
  return (
    <Grid container>
     
    { 
      Card_data.map((details, index)=>{
        const {image,id,title, price,category} = details
        
      
       return <div>
        
       
        <Grid key={index} item xs={12} sm={6} md={6} lg={2} xl={2}>

    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
{category}
        
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <div className='gap-8 flex'>
         <h5>${price}</h5>
         <Button size="small" onClick={()=>navigate_handle(params.id)} >Details</Button>
         </div>
      </CardActions>
    </Card>
    </Grid>
    
    <br />
    
         
        
        </div>
      })
    }
    </Grid>
  )
}
export {Products}