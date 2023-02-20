import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../Styling/CreateNewMenuItem.css";
import MenuItemService from "./utils.js";

export default function CreateNewMenuItem() {
  let navigate = useNavigate();
  const { register, handleSubmit, errors } = useForm();

  const onSave = (data) => {
    MenuItemService.createNewMenuItem(data).then((res) => {
      window.alert(res.data.message);
    });
  };
  return (
    <div id="cards-container2">
      <h1>Create New Menu Item</h1>
      <div id="item-card2">
        <div className="form-group"></div>
        <form onSubmit={handleSubmit(onSave)}>
          <div className="form-control">
            <label>Name: </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
            />
            {errors.name && errors.name.type === "required" && (
              <p className="errorMsg">Name is required.</p>
            )}
          </div>
          <div className="form-control">
            <label>Id: </label>
            <input
              type="number"
              name="id"
              {...register("id", { required: true })}
            />
            {errors.id && errors.id.type === "required" && (
              <p className="errorMsg">Id is required.</p>
            )}
          </div>
          <div className="form-control">
            <label>Image URL: </label>
            <input type="url" name="image" {...register("image")} />
          </div>
          <div className="form-control">
            <label>SKU: </label>
            <input
              type="text"
              name="SKU"
              {...register("SKU", { required: true, minLength: 3 })}
            />
            {errors.SKU && errors.SKU.type === "required" && (
              <p className="errorMsg">SKU is required.</p>
            )}
            {errors.SKU && errors.SKU.type === "minLength" && (
              <p className="errorMsg">
                SKU must be at least 3 characters long.{" "}
              </p>
            )}
          </div>
          <div className="form-control">
            <label>Price: </label>
            <input
              type="number"
              name="price"
              {...register("price", { required: true })}
            />
            {errors.price && errors.price.type === "required" && (
              <p className="errorMsg">Price is required.</p>
            )}
          </div>
          <div className="form-control">
            <label># In Stock: </label>
            <input
              type="number"
              name="inStock"
              {...register("inStock", { required: true })}
            />
            {errors.inStock && errors.inStock.type === "required" && (
              <p className="errorMsg">inStock is required.</p>
            )}
          </div>
          <div className="form-control">
            <label>Description: </label>
            <input
              type="text"
              name="description"
              {...register("description", { required: true })}
            />
            {errors.description && errors.description.type === "required" && (
              <p className="errorMsg">Description is required.</p>
            )}
          </div>
          <div className="form-control">
            <label></label>
            <button type="submit" onClickCapture={() => navigate("/inventory")}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
