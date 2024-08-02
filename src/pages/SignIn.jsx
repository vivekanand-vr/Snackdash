import simile from "../Assets/smiling.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
          "Password must contain at least one number, one uppercase and one lowercase letter, also no symbols"
        ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="bg-gray-200 h-[130vh] bg-fixed flex justify-center">
      <div className="w-[35%]  bg-white  rounded-xl py-6 px-9 absolute mt-12 ">
        <div className="flex justify-center items-center flex-col space-y-6">
          <p className="text-[#FAB005] font-bold uppercase tracking-[0.3rem] text-base font-[Poppins]">
            WELCOME BACK
          </p>

          <img src={simile} className="w-16" />
        </div>
        <div className="flex justify-center flex-col items-center space-y-4">
          <p className="font-semibold text-3xl mt-4  text-[#272c32] font-[Poppins]">
            Sign In to Your Account
          </p>
          <p className="font-normal font-[Poppins]">
            Order your favorite meals right away.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="mt-12">
          <div className="space-y-8">
            <div className="space-y-2 font-[poppins] text-base font-semibold relative">
              <label htmlFor="email" className="text-[#183153]">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...formik.getFieldProps("email")}
                className="border-2 border-gray-500 py-3  w-full rounded-xl pl-14"
                placeholder="yourName@gmail.com"
              />
              <i className="fa-regular  text-lg font-bold fa-envelope absolute left-3 top-10 px-4"></i>
              {formik.errors.email && formik.touched.email ? (
                <div className="text-red-500 ml-2">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="space-y-2 relative">
              <label
                htmlFor="password"
                className="font-[poppins] text-base font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...formik.getFieldProps("password")}
                className="border-2 border-gray-500 py-3  w-full rounded-xl pl-14"
                placeholder="password"
              />
              <i className="fa-solid fa-lock absolute top-10 left-3 px-4 text-lg font-bold"></i>
              {formik.errors.password && formik.touched.password ? (
                <div className="ml-2 text-red-500">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-2 bg-[#FAB005] mt-10 font-[poppins] text-base font-semibold rounded-xl border-2 border-black border-b-8"
          >
            Sign In
            <i className="fa-solid fa-arrow-right-to-bracket ml-2 "></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
