const URL = "http://localhost:8080/";

class MenuItemService {
  async getAllMenuItems() {
    try {
      const response = await fetch(`${URL}menu`, {
        cache: "default",
      });
      return await response.json();
    } catch (error) {
      return console.log(error);
    }
  }
  async getAllMenuItemsByProductType(productType) {
    try {
      const response = await fetch(`${URL}menu/get/${productType}`);
      return await response.json();
    } catch (error) {
      return console.log(error);
    }
  }
  async createNewMenuItem(newMenuItem) {
    try {
      const response = await fetch(`${URL}menu/add-new-menuItem`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMenuItem),
      });
      const newMenuItem_1 = await response.json();
      console.log("Success:", newMenuItem_1);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async getMenuItemById(id) {
    try {
      const response = await fetch(`${URL}menu/getOne/${id}`, {
        cache: "force-cache",
      });
      return await response.json();
    } catch (error) {
      return console.log(error);
    }
  }

  async updateMenuItem(id, data = {}) {
    try {
      const response = await fetch(`${URL}menu/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const updatedMenuItemDetails = await response.json();

      console.log(updatedMenuItemDetails);
    } catch (error) {
      return console.log(error);
    }
  }

  async deleteMenuItem(id) {
    try {
      const response = await fetch(`${URL}menu/delete/${id}`, {
        method: "DELETE",
        cache: "force-cache",
      });
      return await response.json();
    } catch (error) {
      return console.log(error);
    }
  }
}

export default new MenuItemService();
class EmployeeService {
  async getAllEmployees() {
    try {
      const response = await fetch(`${URL}admin`, {
        cache: "default",
      });
      return await response.json();
    } catch (error) {
      return console.log(error);
    }
  }
  async getEmployeesByAccessLevel(accessLevel) {
    try {
      const response = await fetch(`${URL}admin/staff-list/${accessLevel}`);
      return await response.json();
    } catch (error) {
      return console.log(error);
    }
  }
  async getEmployeeById(id) {
    try {
      const response = await fetch(`${URL}admin/staff-list/${id}`);
      return await response.json();
    } catch (error) {
      return console.log(error);
    }
  }
}
