import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';




const CardItem = ({title,cases,update,color,type}) => {
    
    return (


        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 50,fontWeight:500,mb:0 }} color={{color}} gutterBottom>
                    {title}
                </Typography>
                <Typography sx={{fontSize: 20,fontWeight:500 , color:color}}>
                    {cases}
                </Typography>
                <Typography  sx={{fontSize: 15,fontWeight:900   ,mb:0.5 , color:color}}>
                    + {update} {type}
                </Typography>
                
            </CardContent>

        </Card>


    )
}

export default CardItem