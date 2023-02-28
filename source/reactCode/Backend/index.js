import app from "./Server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import MenuItemsDAO from "./dao/MenuItemsDAO.js";
import EmployeesDAO from "./dao/EmployeesDAO.js";

async function main() {
  dotenv.config();

  const client = new mongodb.MongoClient(process.env.TEKTACO_DB_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  });

  const port = process.env.PORT || 5050;
  try {
    await client.connect();
    await MenuItemsDAO.injectDB(client);
    await EmployeesDAO.injectDB(client);

    app.listen(port, () => {
      console.log("server is running on port: " + port);
    });
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

main().catch(console.error);
