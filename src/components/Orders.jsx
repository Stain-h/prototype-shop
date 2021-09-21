import useOrders from '../hooks/useOrders'
import usePrototypes from '../hooks/usePrototypes'
import useActions from '../hooks/useActions'

export default function Orders() {
  const orders = useOrders();
  const prototypes = usePrototypes();
  const { remove } = useActions();
  
  if(orders.length === 0){
    return (
      <aside>
        <div className="empty">
          <div className="title">You don't have any orders</div>
          <div className="subtitle">click on a + to add an order</div>
        </div>
      </aside>
    )
  }

  return (
    <aside>
      <div className="order">
        <div className="body">
          {orders.map((order) => {
            const { id } = order;
            const click = () => {
              remove(id);
            }
            // order.id === prototypes.id  
            const prototype  = prototypes.find((p) => id === p.id)
  
            return (
              <div className="item" key={id}>
                <div className="img">
                  <video src={prototype.thumbnail}></video>
                </div>
                <div className="content">
                  <p className="title">
                    {prototype.title} x {order.quantity}
                  </p>
                </div>
                <div className="action">
                  <p className="price">$ {prototype.price * order.quantity}</p>
                  <button className="btn btn--link" onClick={click}>
                    <i className="icon icon--plus"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}