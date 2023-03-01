const URL = "http://localhost:8080/";

export async function getAllMenuItems() {
  try {
    const response = await fetch(`${URL}menu`, {
      cache: "default",
    });
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
}
export async function getAllMenuItemsByProductType(productType) {
  try {
    const response = await fetch(`${URL}menu/get/${productType}`);
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
}
export async function createNewMenuItem(newMenuItem) {
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

export async function getMenuItemById(id) {
  try {
    const response = await fetch(`${URL}menu/getOne/${id}`, {
      cache: "force-cache",
    });
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
}

export async function updateMenuItem(id, data) {
  try {
    const response = await fetch(`${URL}menu/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const menuItem = await response.json();

    console.log(menuItem);
  } catch (error) {
    return console.log(error);
  }
}

export async function deleteMenuItem(id) {
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

export async function getAllEmployees() {
  try {
    const response = await fetch(`${URL}admin`, {
      cache: "default",
    });
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
}
export async function getEmployeesByAccessLevel(accessLevel) {
  try {
    const response = await fetch(`${URL}admin/staff-list/${accessLevel}`);
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
}
export async function getEmployeeById(id) {
  try {
    const response = await fetch(`${URL}admin/staff-list/${id}`);
    return await response.json();
  } catch (error) {
    return console.log(error);
  }
}
