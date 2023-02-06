import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cartImg from "../assets/checkout.png";

function Checkout({ cart, userInfo, setUserInfo }) {
  const [firstName, setFirstName] = useState(userInfo.firstName);
  const [lastName, setLastName] = useState(userInfo.lastName);
  const [email, setEmail] = useState(userInfo.email);
  const [phone, setPhone] = useState(userInfo.phone);

  function isValid(value) {
    if (!value || value.trim().length === 0) {
      return false;
    }
    return true;
  }

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid(firstName) || !isValid(lastName) || !isValid(email) || !isValid(phone)) {
      alert("All fields are required");
      return;
    }
    setUserInfo({ firstName, lastName, email, phone });
    return navigate("/review-order");
  };

  return (
    <div className="container m-4">
      <h3>Checkout:</h3>
      <table className="table mb-4 border bg-light">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th className="text-center">Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 ? (
            cart.map((product) => (
              <tr key={product.title}>
                <td>{product.title}</td>
                <td className="text-center">{product.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2} className="text-center h6 p-2">
                No Item Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="row" style={{ minHeight: "28em" }}>
        <div className="col-md-6">
          <h4>Enter Your Details:</h4>
          <form className="form-group border p-3 my-2" onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="firstName">First Name:</label>
              <input
                className={!isValid(firstName) ? "form-control border-danger" : "form-control"}
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="lastName">Last Name:</label>
              <input
                className={!isValid(lastName) ? "form-control border-danger" : "form-control"}
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="email">Email:</label>
              <input className={!isValid(email) ? "form-control border-danger" : "form-control"} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="phone">Phone:</label>
              <input
                className={!isValid(phone) ? "form-control border-danger" : "form-control"}
                type="number"
                id="phone"
                value={phone}
                onChange={(e) => e.target.value.length < 14 && setPhone(e.target.value)}
              />
            </div>
            <div className="text-center pt-2">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img src={cartImg} alt="cart-img" style={{ height: "24em" }} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
