import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../../../Styling/Inventory.css";
import * as API from "../apiFunctions.js";

const InventoryCard = (data) => {
  const product = data;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate;

  const onUpdate = (data) => {
    const productId = product.data._id;
    API.updateMenuItem(productId, data);
  };

  const deleteMenuItem = (id) => {
    id = product.data._id;
    window.alert("Are you sure you want to delete this Item?");
    API.deleteMenuItem(id);
  };

  return (
    <div id="item-card">
      <form onSubmit={handleSubmit(onUpdate)}>
        <div className="form-group-inventory-form">
          <label>
            <strong>ID: </strong>
            {product.data._id}
          </label>
          <div className="form-control">
            <input
              {...register("_id", { required: true, disabled: true })}
            ></input>
            <ErrorMessage errors={errors} name="_id" />
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
            <input {...register("sku", { required: true })}></input>
            <ErrorMessage errors={errors} name="sku" />
          </div>
          <label>
            <strong>Product Type: </strong>
            {product.data.productType}
          </label>
          <div className="form-control">
            <input {...register("productType", { required: true })}></input>
            <ErrorMessage errors={errors} name="productType" />
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
            <button id="btn-update" onClick={onUpdate}>
              Update
            </button>

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
