import "./menu.css";
import { UseStateContext } from "./menu 1";
const Menu = () => {
    const {menu} = UseStateContext();
    console.log(menu);
  return (
    
    <div class="food-area">
      <div class="container">
        <div class="title">
          <h4>Our menu</h4>
          <div class="foods">
            {menu.map((men, id) => {
              return (
                <div key={id} class="singlefood">
                  <div class="food-img">
                    <img
                      src={men.img}
                      alt="food"
                      height="230px"
                      width="350px"
                    />
                    <h4>{men.name}</h4>
                  </div>

                  <ul class="food-list">
                    <li>{men.name}</li>
                    <li>{men.price}</li>
                  </ul>
                  <a href="">Add to Cart</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
