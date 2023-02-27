import React, { useState, useEffect } from "react";
import { db, collection, onSnapshot, query, orderBy } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import Order from "../../Components/Order/Order";
import "./Orders.css";

function Orders() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, `users/${user?.uid}/orders`),
        orderBy("created", "desc")
      );

      onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
