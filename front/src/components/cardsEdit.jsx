import { useFormik } from "formik";
import Joi from "joi";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import Input from "./common/Input";
import { PageHeader } from "./common/PageHeader";
import cardsService from "../services/cardsService";
import { useCard } from "../hooks/useCard.jsx";
import { toast } from "react-toastify";

const CardsEdit = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  const card = useCard(id);

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    validate: formikValidateUsingJoi({
      bizName: Joi.string().min(2).max(255).required().label("Name"),
      bizDescription: Joi.string()
        .min(2)
        .max(1024)
        .required()
        .label("Description"),
      bizAddress: Joi.string().min(2).max(400).required().label("Address"),
      bizPhone: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/)
        .label("Phone"),

      bizImage: Joi.string().min(11).max(1024).allow("").label("Image"),
    }),
    async onSubmit(values) {
      try {
        const { bizImage, ...body } = values;
        if (bizImage) {
          body.bizImage = bizImage;
        }

        cardsService.updateCard(id, body);
        toast.success("Card Edited Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/my-cards");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  useEffect(() => {
    if (!card) return;

    const { bizName, bizDescription, bizAddress, bizPhone, bizImage } = card;

    form.setValues({
      bizName,
      bizDescription,
      bizAddress,
      bizPhone,
      bizImage,
    });
  }, [card]);

  return (
    <>
      <div className="row d-flex justify-content-center align-items-center h-100 my-4">
        <div className="col-12 col-md-6 col-lg-6 col-xl-4 border rounded px-3 pb-3">
          <PageHeader title="Edit Card" description="Edit Card" />

          <form onSubmit={form.handleSubmit} noValidate>
            {error && <div className="alert alert-danger">{error}</div>}

            <Input
              {...form.getFieldProps("bizName")}
              type="text"
              label="Name"
              required
              error={form.touched.bizName && form.errors.bizName}
            />
            <Input
              {...form.getFieldProps("bizDescription")}
              type="text"
              label="Description"
              required
              error={form.touched.bizDescription && form.errors.bizDescription}
            />
            <Input
              {...form.getFieldProps("bizAddress")}
              type="text"
              label="Address"
              required
              error={form.touched.bizAddress && form.errors.bizAddress}
            />
            <Input
              {...form.getFieldProps("bizPhone")}
              type="text"
              label="Phone"
              required
              error={form.touched.bizPhone && form.errors.bizPhone}
            />
            <Input
              {...form.getFieldProps("bizImage")}
              type="text"
              label="Image"
              error={form.touched.bizImage && form.errors.bizImage}
            />

            <div className="my-2">
              <button
                type="submit"
                disabled={!form.isValid}
                className="btn btn-primary"
              >
                Edit Card
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CardsEdit;
