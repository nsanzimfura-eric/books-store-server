import { AppDataSource } from "../data-source";
import { Order } from "../entity/order.entity";
import { User } from "../entity/user.entity";

class OrderServices {
  private ordersRepository: any;
  private usersRepository: any;

  constructor() {
    this.ordersRepository = AppDataSource.getRepository(Order);
    this.usersRepository = AppDataSource.getRepository(User);
  }

  async createOrder(
    book_id: string,
    user_id: string,
    quantity: number,
    user: User,
    userPointsLeft: number
  ): Promise<Partial<Order>> {
    const newUser = (user.points = userPointsLeft);
    const order = {
      book_id,
      user_id,
      quantity,
    };

    try {
      await this.usersRepository.save(newUser);
      return await this.ordersRepository.insert(order);
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
