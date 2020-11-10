import React from "react";
import imgs from "../imgs";

const Card = () => {
  return (
    <>
      <div class="carousel__lista-act">
        <div class="carousel__elemento-act">
          <div class="card-act">
            <div class="card__imagen-act">
              <img src={imgs[20].imagen} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
