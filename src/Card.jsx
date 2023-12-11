import { Typography } from '@mui/material'
import Grid  from '@mui/material/Grid'
// import Paper from '@mui/material/Paper'
import Paper from '@mui/material/Paper'
import { AccessTime } from '@mui/icons-material'
const Card = () => {
  return (
      
          <Grid item xs={3} className='mt-8 bg-slate-300'>
          <Paper elevation={3} className='rounded-lg '>
              
              <img src="https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
              <Typography padding={2} variant='subtitle1' component='h4'>
                  Hello world
                  <AccessTime/>
              </Typography>


              </Paper>
          </Grid>
    
  )
}

export default Card
