import Navigation from './components/Navigation';
import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayCart, setDisplayCart] = useState(false);

  const addToCart = (productData) => {
    console.log(productData);
    setCart((prev) => {
      const product = prev.find((item) => item.id === productData.id);
      if (product) {
        product.quantity++;
        return [...prev];
      }
      return [
        ...prev,
        {
          id: productData.id,
          price: productData.price,
          name: productData.name,
          image: productData.image,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (productId, amount) => {
    setCart((prev) => {
      const product = prev.find((item) => item.id === productId);
      if (product) {
        if (!amount) {
          return prev.filter((item) => item.id !== productId);
        }
        product.quantity -= amount;
        if (product.quantity === 0) {
          return prev.filter((item) => item.id !== productId);
        }
        return [...prev];
      }
      return [...prev];
    });
  };

  useEffect(() => {
    const sampleProducts = [
      {
        id: 1,
        name: 'Sản phẩm 1',
        price: 10000,
        image:
          'data:image/webp;base64,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',
      },
      {
        id: 2,
        name: 'Sản phẩm 2',
        price: 20000,
        image:
          'data:image/webp;base64,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',
      },
      {
        id: 3,
        name: 'Sản phẩm 3',
        price: 30000,
        image:
          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRx593zXtSX54f7Y6pX3zqI-B363r7KRME-Ub5BuM5ZRwH4C3zZkZJEohk6YvQGKIfEtiAhiHRhoGuCNXcxpRgFouz1pwGTgimsVHXNGuTfEnohANazT_YHZCH3ldKdAMER0qLw6SY&usqp=CAc',
      },
      {
        id: 4,
        name: 'Sản phẩm 4',
        price: 40000,
        image:
          'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQLexwQzVDsfhik4Z34iNpuJnGgvRLZsrF5prfo0PqJIFv0WDYVmCnUbutc4loijBLpz_K6lv4n54f5NufFjXF5W1PuiXlfpeFa5b4Z1fWieRXyQxpX1av49wpGzKqo354Rew-C2A8oFA&usqp=CAc',
      },
    ];
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(sampleProducts));
    }
    setProducts(JSON.parse(localStorage.getItem('products')));

    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }

    setCart(JSON.parse(localStorage.getItem('cart')));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Navigation cart={cart} onOpenCart={() => setDisplayCart(true)} />
      {displayCart && (
        <Cart
          cart={cart}
          onAdd={addToCart}
          onRemove={removeFromCart}
          onClose={() => setDisplayCart(false)}
        />
      )}
      <h1>DANH SÁCH CÁC SẢN PHẨM</h1>
      <div className="card-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={addToCart}
            onRemove={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
