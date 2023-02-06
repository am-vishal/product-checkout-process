function ProductListing({ cart, products, addToCart }) {
  return (
    <div className="m-2 border border-bottom-0">
      <h3 className="m-0 p-2 bg-light">Products:</h3>
      <table className="table table-responsive table-bordered table-hover">
        <thead className="bg-info">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.title}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td className="text-center">
                <button className="btn btn-primary" disabled={cart.some((c) => c.title === product.title)} onClick={() => addToCart(product)}>
                  Buy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="bg-transparent text-info m-0 pt-2 fixed-bottom">
        <div className="container">
          <p className="text-center">I will use Redux to improve how we handle state and data in the project.</p>
        </div>
      </footer>
    </div>
  );
}

export default ProductListing;
