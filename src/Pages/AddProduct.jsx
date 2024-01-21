import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddProduct =event=>{
      event.preventDefault();
  
      const form =event.target;
  
      const image = form.Image.value;
      const name = form.name.value;
      const brand = form.brand.value;
      const product = form.product.value;
      const price = form.price.value;
      const short = form.short.value;
      const rating = form.Image.value;
  
      const newAddProduct ={
        image,name,brand,product,price,short,rating
      }
      console.log(newAddProduct);
  
      // send data to server side
  
      fetch('http://localhost:5000/products',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(newAddProduct)
      })
      .then(res =>res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Success',
            text: 'User added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
  
  
    }
      return (
          <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Add Product</h1>
        <p className="py-6">Choice Your Best Product</p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleAddProduct} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input type="text" name="Image" placeholder="Image URL" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input type="text" name="brand" placeholder="brand name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Type</span>
            </label>
            <input type="text" name="product" placeholder="product type" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" name="price" placeholder="price" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input type="text" name="short" placeholder="short description" className="input input-bordered" required />
            
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input type="text" name="rating" placeholder="rating" className="input input-bordered" required />
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  </div>
      );
  };
  
  export default AddProduct;