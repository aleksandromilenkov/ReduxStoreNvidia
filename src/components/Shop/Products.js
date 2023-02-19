import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite graphics cards</h2>
      <ul>
        <ProductItem
          title="NVIDIA GeForce RTX 4090"
          price={1599}
          description="Cooling system: Fan, Boost Clock Speed: 2.52 GHz, GPU Memory Size: 24 GB"
          id={0}
        />
        <ProductItem
          title="
NVIDIA GeForce RTX 3080"
          price={699}
          description="Cooling System: Fan, Boost Clock Speed: 1.71 GHz,  GPU Memory Size: 10 GB"
          id={1}
        />
        <ProductItem
          title="
          NVIDIA GeForce RTX 3070"
          price={499}
          description="Cooling System: Fan, Boost Clock Speed: 1.73 GHz, GPU Memory Size: 8 GB"
          id={2}
        />
      </ul>
    </section>
  );
};

export default Products;
