import ProductCard from "../card/ProductCard"
import "./ItemList.css"

const ItemList = ({items}) => {
  return (
    <section>
        {
            items.map ( (item) => {
                return <ProductCard key={item.id} item={item} />
            })
        }
    </section>
        
  )
}

export default ItemList