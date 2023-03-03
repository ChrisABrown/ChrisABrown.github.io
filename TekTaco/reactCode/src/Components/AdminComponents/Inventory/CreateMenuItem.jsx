import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../../../Styling/CreateNewMenuItem.css";
import * as API from "../apiFunctions.js";

export default function CreateNewMenuItem() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSave = (data) => {
    API.createNewMenuItem(data);
  };

  return (
    <form id="create-New-Menu-Item" onSubmit={handleSubmit(onSave)}>
      <h1>Create New Menu Item</h1>
      <div id="item-card" className="form-group-inventory-form">
        <div className="form-control">
          <label>Name: </label>
          <input {...register("name", { required: "Name is required." })} />
          <ErrorMessage errors={errors} name="name" />
        </div>
        {/* <div className="form-control">
            <label>Id: </label>
            <input
              {...register("id", { required: "Id is required." })}
              type="number"
            />
            <ErrorMessage errors={errors} name="id" />
          </div> */}
        <div className="form-control">
          <label>Image URL: </label>
          <input type="url" {...register("image")} />
        </div>
        <div className="form-control">
          <label>SKU: </label>
          <input
            type="number"
            {...register("SKU", { required: "SKU is required." })}
          />
          <ErrorMessage errors={errors} name="SKU" />
        </div>
        <div className="form-control">
          <label>Price: </label>
          <input
            type="number"
            {...register("price", { required: "Price is required." })}
          />
          <ErrorMessage errors={errors} name="price" />
        </div>
        <div className="form-control">
          <label># In Stock: </label>
          <input
            type="number"
            {...register("inStock", { required: "inStock is required." })}
          />
          <ErrorMessage errors={errors} name="inStock" />
        </div>
        <div className="form-control">
          <label>Product Type: </label>
          <input
            {...register("productType", {
              required: "Product Type is required.",
            })}
          />
          <ErrorMessage errors={errors} name="productType" />
        </div>
        <div className="form-control">
          <label>Description: </label>
          <input
            {...register("description", {
              required: "Description is required.",
            })}
          />
          <ErrorMessage errors={errors} name="description" />
        </div>
      </div>
      <div className="btn-console">
        <button
          form="create-New-Menu-Item"
          onClick={onSave}
          onClickCapture={() => navigate("/inventory")}
        >
          Save
        </button>
      </div>
    </form>
  );
}
