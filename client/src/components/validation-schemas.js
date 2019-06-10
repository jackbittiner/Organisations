import * as yup from "yup";

const createValidator = () => {
  const validationObjectShape = {
    companyName: yup.string().required(),
    yearFounded: yup.number().required(),
    revenue: yup.number().required()
  };

  const validationSchema = yup.object().shape(validationObjectShape);

  return validationSchema;
};

const updateValidator = () => {
  return yup.object().shape(
    {
      companyName: yup.string().when(["yearFounded", "revenue"], {
        is: (yearFounded, revenue) => !yearFounded && !revenue,
        then: yup.string().required()
      }),
      yearFounded: yup.number().when(["companyName", "c"], {
        is: (companyName, revenue) => !companyName && !revenue,
        then: yup.number().required()
      }),
      revenue: yup.number().when(["companyName", "yearFounded"], {
        is: (companyName, yearFounded) => !companyName && !yearFounded,
        then: yup.number().required()
      })
    },
    [
      ["companyName", "yearFounded"],
      ["companyName", "revenue"],
      ["yearFounded", "revenue"]
    ]
  );
};

export { createValidator, updateValidator };
