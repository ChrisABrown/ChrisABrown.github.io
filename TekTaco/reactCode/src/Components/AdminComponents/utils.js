const URL = "http://localhost:8080/";

class MenuItemService {
  getAllMenuItems() {
    return fetch(`${URL}menu`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  getAllMenuItemsByProductType(productType) {
    return fetch(`${URL}menu/menuItems/${productType}`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
  createNewMenuItem(newMenuItem) {
    return fetch(`${URL}add-new-menuItem`, {
      method: "POST",
      headers: {},
    });
  }

  getMenuItemById(id) {
    return fetch(`${URL}api-v1/menu${id}`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  updateMenuItem(id, updatedMenuItemDetails) {
    return fetch(`${URL}api-v1/menu/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMenuItemDetails),
    })
      .then((response) => response.json())
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

class EmployeeService {}
