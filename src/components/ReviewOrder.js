function ReviewOrder({ cart, userInfo }) {
  const onClickHandler = () => {
    for (let key in userInfo) {
      if (!userInfo[key] || userInfo[key].trim() === "") {
        const alertEl = document.createElement("div");
        alertEl.innerHTML = `
          <div class="alert alert-danger text-center" role="alert">
            Sorry, your order could not be placed as some required information is missing. Please complete the necessary fields and try again.
          </div>
        `;
        alertEl.style.position = "absolute";
        alertEl.style.top = "3.5em";
        alertEl.style.right = "0";
        document.body.appendChild(alertEl);
        setTimeout(() => {
          alertEl.remove();
        }, 3000);
      } else {
        const alertEl = document.createElement("div");
        alertEl.innerHTML = `
          <div class="alert alert-success text-center" role="alert">
            Congratulations! Your order has been successfully placed. Thank you for choosing us.
          </div>
        `;
        alertEl.style.position = "absolute";
        alertEl.style.top = "3.5em";
        alertEl.style.right = "0";
        document.body.appendChild(alertEl);
        setTimeout(() => {
          alertEl.remove();
        }, 3000);
      }
    }
  };

  return (
    <div className="container">
      <h1 className="mb-3 mt-5">Review & Place Order</h1>
      <h2 className="my-3">Cart:</h2>
      <div className="row">
        <div className="col-md-6 offset-md-1">
          <table className="table table-bordered border">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th className="texr-center">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ? (
                cart.map((product) => (
                  <tr key={product.title}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
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
        </div>
      </div>
      <h3 className="mt-3">User Details:</h3>
      <div className="row">
        <div className="col-md-6 offset-md-1">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>First Name:</td>
                <td width={400}>{userInfo.firstName}</td>
              </tr>
              <tr>
                <td>Last Name:</td>
                <td width={400}>{userInfo.lastName}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td width={400}>{userInfo.email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td width={400}>{userInfo.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button className="btn btn-primary" onClick={onClickHandler}>
        Place Order
      </button>
    </div>
  );
}

export default ReviewOrder;
