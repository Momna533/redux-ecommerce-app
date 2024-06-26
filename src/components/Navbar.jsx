import { connect } from "react-redux";
import { useGlobalContext } from "../context/Context";

const Navbar = ({ amount }) => {
  const { state } = useGlobalContext();
  return (
    <div className="nav">
      <div className="nav__center">
        <h3>Redux</h3>
        <div className="nav__container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>
          <div className="amount__container">
            <p className="total__amount">{amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { amount: state.amount };
};

export default connect(mapStateToProps)(Navbar);

// import { useGlobalContext } from "../context/Context";

// const Navbar = () => {
//   const { state } = useGlobalContext();
//   return (
//     <div className="nav">
//       <div className="nav__center">
//         <h3>Redux</h3>
//         <div className="nav__container">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//             <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
//           </svg>
//           <div className="amount__container">
//             <p className="total__amount">{state.amount}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
