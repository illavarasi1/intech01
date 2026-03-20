
import "./producttable.css";
const products = [
  {
    id: "PRD-X9201",
    name: "Chronos Smartwatch v2",
    description: "Limited Edition Silver",
    category: "Electronics",
    price: "$299.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7TyKpJJ4cstJopmFW2Tg1ZBfe5dTfLbDkmLWZaZiKHae00zwX3JKMKUumVXFO40ZUCpdS-g6_0w1j4UHoaVGWtatjT5k_uRcEZkandvI_QAX9ovOu9rOQmF9HKUfnkCMzz4TcJnDDWNWxsunBDXUXr4o4yPiK4Xh_O6pCCCiyae10gCiY44MTfsKrFz-UBWqf255KWG_a33KVO0Ub7hzjYxpquF2RQy6o7NZvB13DVLL2IHLTjK4H-P63WgprB0rtnNdx7HhZeEU",
  },
  {
    id: "PRD-A4482",
    name: "Acoustic Pro Wireless",
    description: "Noise Cancelling Series",
    category: "Audio",
    price: "$189.50",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCI32gxUNji0Nq0sKjwuTq8gpjrXUzFoHV0TPxn3EVyqUL1ipY9Tl63YOUgHRvT3oiKSpTudEAwvU0VqZKGyR1oxVcyroKvdGVLTCppn5-qiwO14pkr48ae9K072juMfyEP4zxf_dnGEGFBOPgZsSmrKAG7iOBIwzjPI8jnjDyqRiewkcUQ7dos02nKFnGudybWjfM65D56rIoCzZPmuUTTuFuWZzVdhtYEsHWIExbLl8eDjC5YedfJK_SWopastsX3ag2BdkhZSIk",
  },
  {
    id: "PRD-F1109",
    name: "Velocity Speed Runners",
    description: "Carbon Fiber Insole",
    category: "Footwear",
    price: "$145.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVJynZZsQRv60VccOeWFF6PlcKAsMJEAwTvXNUYTgwBvJi9XUYVj5fds0xk39zwwQFuntp5g9Jdr0vUefVTAyezQ4LWTVFzgjEN5ZJgySXyODGpS3Q10-94xbnU9U9y7GJWWIuab1_avDBhPvqxjn5hxqFkssyQg4B8J68mnGh1FhoVKXPVt8lMATQ2LRH6NXUvY-yAuaeLQFfG_pV5m0OpoZeFThPAc4oCVSGuIzLeQi1c-zj-kODdnREdHNOTHiWcEmdxXCxxtI",
  },
  {
    id: "PRD-C7721",
    name: "Vintage Snap Cam",
    description: "Instant Print Technology",
    category: "Photography",
    price: "$89.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaBTvePaTdunfyqUZEyJ2lJTZ2kbdH22kmixLz1nlQDcTKFFsAdphOyKNHXEaz-ellzX4TXGuRm_hHJqykoCYOh3j6z36EPg8Y8jBngpxU95PdZuc5jsbFDllchJ0bh-iJkZj0Sd4aCaT5KXq9h6C5Mw8kFjU8VQVAYPwRAXhgfv0_m1q_0TJzzL771IqoKw6Rbtwa3t6z3rLnFol58OcTPaMvbtIgMyxAgbxBvqjM-3IWc_iS4et9RKkpwlZYtBT5XzY9nxKuGiU",
  },
  {
    id: "PRD-T3302",
    name: "Zenith Tablet Pro",
    description: '12.9" Retina Display',
    category: "Computing",
    price: "$849.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeLThAcoDcjrFbeFMAGIzqI6Tzad3O2HJmBHza8J94PxH4c1f8pqgxOi-pRXjxP5Cs7slkW6ebXWNQjnmT3QA0rjH7jDWTzHKLJPLX7FpNpjXJgDWo2mQUePtUDdVPTY1jf_tEcQ5T5c3mSx_YUPuIdOLVtGPJOlDt6u2o1kLcfHYGu4k42p6HZQ9kz4AOdNuclGXVAT6Xh5aiDMGvRWaRvnyoE-_Tzwmb7k-rLdNaDiOqJi9x0AVQnGusrdhK25djDfYDN38wPv4",
  },
];





const ProductTable = () => {
  return (
    <div className="product-table-container">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Product ID</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td>
                <img
                  src={p.img}
                  alt={p.name}
                  style={{ width: "48px", height: "48px", borderRadius: "8px" }}
                />
              </td>
              <td>
                {p.name}
                <br />
                <small>{p.desc}</small>
              </td>
              <td>
                <span className="category-label">{p.category}</span>
              </td>
              <td>{p.price}</td>
              <td>{p.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;