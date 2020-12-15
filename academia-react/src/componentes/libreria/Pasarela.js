import React from "react";
import { postLibrosPasarela } from "../../services/librosServices";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import imgs from "../imgs";

const stripePromise = loadStripe(
  "pk_test_51HwdbSIi6kh3acUzetlIwjHxgDY4VhfX0gHsSy8gIIZW9YchCSEC0hJTP5U9ljVle4N0Iqy2NHyxSS9MvL28HSM900NitFeb8Y"
);

const CheckoutForm = () => {
  const stripe = useStripe(); // Comexion Stripe
  const elements = useElements(); // accede a los elementos de stripe

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;
      const data = await postLibrosPasarela(id);
      console.log(data);
      console.log("ESTE ES EL ID: ");
      console.log(id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="pasarela__card">
        <h5>Pago Seguro con STRIPE:</h5>
        <p>Insertar datos de tarjeta de credito:</p>
        <CardElement />
      </div>
      <div className="pasarela__buy">
        <button>
          <i>
            <FontAwesomeIcon icon={faCreditCard} />
          </i>{" "}
          Registre Pago
        </button>
      </div>
    </form>
  );
};

const Pasarela = () => {
  return (
    <>
      <header>
        <div className="presentacion">
          <div className="presen__banner">
            <div className="presen__imagen">
              <img src={imgs[2].imagen} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="gris">
          <div className=" contenedor">
            <div className="carrito__pasos">
              <div className="pasouno pactivo">
                <div className="ptop">
                  <i>
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </i>{" "}
                  <span>
                    <b>Paso 1</b>
                  </span>
                </div>
                <div className="pbotton">
                  <small>Carrito de compras</small>
                </div>
              </div>
              <div className="pasodos pactivo">
                <div className="ptop">
                  <i>
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </i>{" "}
                  <span>
                    <b>Paso 2</b>
                  </span>
                </div>
                <div className="pbotton">
                  <small>Envio | Despacho</small>
                </div>
              </div>
              <div className="pasotres pactivo">
                <div className="ptop">
                  <i>
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </i>{" "}
                  <span>
                    <b>Paso 3</b>
                  </span>
                </div>
                <div className="pbotton">
                  <small>Pago seguro | Caja</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="seccion">
          <div className="contenedor">
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </section>
      </main>
    </>
  );
};

export default Pasarela;
