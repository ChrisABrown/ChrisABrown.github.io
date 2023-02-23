import React from "react";
import MenuItemService from "./utils.js";
import "../../Styling/Inventory.css";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

const InventoryCard = (data) => {
  const product = data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate;

  const onUpdate = (data) => {
    const productId = product.data.id;
    MenuItemService.updateMenuItem(productId, data).then(() =>
      navigate(`/${productId}`)
    );
    // isSuccessfullyUpdated
    //   ? window.alert("MenuItem: " + data.name + " has been updated")
    //   : console.error();
  };

  const deleteMenuItem = (id) => {
    window.alert("Are you sure you want to delete this Item?");
    MenuItemService.deleteMenuItem(id).then(() =>
      window.alert("MenuItem with id: " + id + " successfully deleted")
    );
  };

  return (
    <div id="item-card">
      <form onSubmit={handleSubmit(onUpdate)}>
        <div className="form-group">
          <label>
            <strong>ID: </strong>
            {product.data.id}
          </label>
          <div className="form-control">
            <input {...register("id", { required: true })}></input>
            <ErrorMessage errors={errors} name="id" />
          </div>
          <label>
            <strong>Name: </strong>
            {product.data.name}
          </label>
          <div className="form-control">
            <input {...register("name", { required: true })}></input>
            <ErrorMessage errors={errors} name="name" />
          </div>
          <figure>
            <img
              id="menuItem-img"
              alt="menuItem pic"
              src={product.data.image}
              height={150}
              width={150}
            />
            <figcaption>
              <input
                {...register("image", { required: true })}
                type="url"
                placeholder="image url"
              ></input>
              <ErrorMessage errors={errors} name="image" />
            </figcaption>
          </figure>
          <label>
            <strong>SKU: </strong>
            {product.data.sku}
          </label>
          <div className="form-control">
            <input {...register("SKU", { required: true })}></input>
            <ErrorMessage errors={errors} name="SKU" />
          </div>
          <label>
            <strong>Price: </strong>${product.data.price.toFixed(2)}
          </label>
          <div className="form-control">
            <input {...register("price", { required: true })}></input>
            <ErrorMessage errors={errors} name="price" />
          </div>
          <label>
            <strong>InStock: </strong>
            {product.data.inStock}
          </label>
          <div className="form-control">
            <input {...register("inStock", { required: true })}></input>
            <ErrorMessage errors={errors} name="inStock" />
          </div>
          <label>
            <strong>Description: </strong>
            {product.data.description}
          </label>
          <div className="form-control">
            <input {...register("description", { required: true })}></input>
            <ErrorMessage errors={errors} name="description" />
          </div>
          <div id="btn-console">
            <button id="btn-update">Update</button>
            <button id="btn-delete" onClick={deleteMenuItem}>
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InventoryCard;
