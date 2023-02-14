import {createMenuItem, getAllMenuItems, updateMenuItem, deleteMenuItem} from "./utils";

export function createMenuItemHandler(newMenuItem) {
    createMenuItem(newMenuItem)
        .then(r => r.data);
}

export function updateMenuItemHandler(id, updatedMenuItem){
    updateMenuItem(id, updatedMenuItem)
        .then(r => r.data)
}

export function deleteMenuItemHandler(id){
    deleteMenuItem(id);

}