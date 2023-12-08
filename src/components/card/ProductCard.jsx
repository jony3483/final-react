import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"


const ProductCard = ({item}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={item.img}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h4" component="div">
        {item.title}
      </Typography>
      <Typography variant="h6" color="text.secondary">
        {item.description}
      </Typography>
      <Typography variant="h6" color="text.secondary">
        {item.price}
      </Typography>
    </CardContent>
    <CardActions>
      {
        item.stock > 0 ? <Link to={`/item/${item.id}`}><Button size="small">ver mas</Button></Link> : <Button variant="container" disabled>sin stock</Button>
      }
      
    </CardActions>
  </Card>
  )
}

export default ProductCard