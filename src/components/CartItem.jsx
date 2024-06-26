import { connect } from "react-redux";
import { useGlobalContext } from "../context/Context";

const CartItem = ({
  id,
  img,
  title,
  price,
  amount,
  increase,
  decrease,
  removeItem,
}) => {
  return (
    <div className="cart__item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item__price">${price}</h4>
        <button className="remove__btn" onClick={removeItem}>
          remove
        </button>
      </div>
      <div>
        <button className="amount__btn" onClick={increase}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        <p className="amount">{amount}</p>
        <button className="amount__btn" onClick={decrease}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, amount } = ownProps;
  return {
    increase: () => dispatch({ type: "INCREASE", payload: id }),
    decrease: () => dispatch({ type: "DECREASE", payload: id }),
    removeItem: () => {
      dispatch({ type: "REMOVE", payload: { id } });
    },
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

// import { useGlobalContext } from "../context/Context";

// const CartItem = ({ id, img, title, price, amount }) => {
//   const { dispatch } = useGlobalContext();

//   return (
//     <div className="cart__item">
//       <img src={img} alt={title} />
//       <div>
//         <h4>{title}</h4>
//         <h4 className="item__price">${price}</h4>
//         <button
//           className="remove__btn"
//           onClick={() => dispatch({ type: "REMOVE", payload: id })}
//         >
//           remove
//         </button>
//       </div>
//       <div>
//         <button
//           className="amount__btn"
//           onClick={() => dispatch({ type: "INCREASE", payload: id })}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//             <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
//           </svg>
//         </button>
//         <p className="amount">{amount}</p>
//         <button
//           className="amount__btn"
//           onClick={() => dispatch({ type: "DECREASE", payload: id })}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//             <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartItem;
