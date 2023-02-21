const URL = "http://localhost:8080/";

class MenuItemService {
  getAllMenuItems() {
    return fetch(`${URL}menu`, {
      cache: "default",
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  getAllMenuItemsByProductType(productType) {
    return fetch(`${URL}menu/get/${productType}`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  createNewMenuItem(newMenuItem) {
    return fetch(`${URL}menu/add-new-menuItem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMenuItem),
    })
      .then((response) => response.json())
      .then((newMenuItem) => {
        console.log("Success:", newMenuItem);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  getMenuItemById(id) {
    return fetch(`${URL}menuItems/${id}`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  updateMenuItem(id, updatedMenuItemDetails) {
    return fetch(`${URL}${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMenuItemDetails),
    })
      .then((response) => response.json(updatedMenuItemDetails))
      .catch((error) => console.log(error));
  }

  deleteMenuItem(id) {
    return fetch(`${URL}api-v1/menu/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
}
export default new MenuItemService();

class EmployeeService {
  getAllEmployees() {
    return fetch(`${URL}admin`, {
      cache: "default",
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  getEmployeesByAccessLevel(accessLevel) {
    return fetch(`${URL}admin/staff-list/${accessLevel}`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  getEmployeeById(id) {
    return fetch(`${URL}admin/staff-list/${id}`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
}
