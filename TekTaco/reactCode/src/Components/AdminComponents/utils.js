
export function createMenuItem(newMenuItem){
    console.log(newMenuItem);

    return fetch("http://localhost:8080/api-v1/menu", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(newMenuItem)
    })
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export function getAllMenuItems(){
    return fetch("http://localhost:8080/api/menu")
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export function getMenuItemById(id){
    return fetch(`http://localhost:8080/api-v1/menu${id}`)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export function updateMenuItem(id, updatedMenuItemDetails) {
    return fetch(`http://localhost:8080/api-v1/menu/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedMenuItemDetails),
    })
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export function deleteMenuItem(id){
    return fetch(`http://localhost:8080/api-v1/menu/${id}`, {
        method: "DELETE",
    })
        .then((response) => response.json())
        .catch((error) => console.log(error));
}