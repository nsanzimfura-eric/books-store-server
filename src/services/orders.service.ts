import { AppDataSource } from "../data-source";
import { Order } from "../entity/order.entity";
import { User } from "../entity/user.entity";

export interface OrderInterface {
  book_id: string;
  quantity: number;
}
class OrderServices {
  private ordersRepository: any;
  private usersRepository: any;

  constructor() {
    this.ordersRepository = AppDataSource.getRepository(Order);
    this.usersRepository = AppDataSource.getRepository(User);
  }

  async createOrder(
    order: OrderInterface[],
    user: User,
    userPointsLeft: number
  ): Promise<Partial<Order>> {
    user.points = userPointsLeft;

    try {
      await this.usersRepository.save(user);

      const orders = order.map((item) => {
        const newOrder = new Order();
        newOrder.book_id = item.book_id;
        newOrder.user_id = user.id;
        newOrder.quantity = item.quantity;
        return newOrder;
      });
      const savedOrders = await this.ordersRepository.save(orders);
      return savedOrders;
    } catch (error) {
      throw error;
    }
  }

  async updateOrderQuantity(
    quantity: number,
    order: Order
  ): Promise<Partial<Order>> {
    order.quantity = quantity;
    try {
      return await this.ordersRepository.save(order);
    } catch (error) {
      throw error;
    }
  }

  async cancelOrder(user_id: string): Promise<Partial<Order>> {
    try {
      return await this.ordersRepository.delete({ user_id });
    } catch (error) {
      throw error;
    }
  }

  async orderById(id: string): Promise<Order | null> {
    try {
      const order = await this.ordersRepository.findOne({ where: { id } });
      return order;
    } catch (error) {
      console.log(error);
    }
  }

  async allOrdersByUserId(user_id: string): Promise<Order[] | []> {
    try {
      const ordersByUser = await this.ordersRepository.find({
        where: { user_id },
      });
      return ordersByUser;
    } catch (error) {
      console.log(error);
    }
  }
}

export default OrderServices;
