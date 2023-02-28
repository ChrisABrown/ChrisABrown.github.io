import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let menuItems;

export default class MenuItemDAO {
  static async injectDB(conn) {
    if (menuItems) {
      return;
    }
    try {
      menuItems = await conn.db(process.env.T);
    } catch (error) {}
  }
}
