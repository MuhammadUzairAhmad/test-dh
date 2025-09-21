"use client";
import ButtonUI from "@/components/dump/Button";
import ModalUI from "@/components/dump/Modal";
import React from "react";
import InputField from "@/components/dump/InputField";
import { useFormik } from "formik";
import { loginInitialValues, loginValidationSchema } from "@/lib/validation";
import CheckboxField from "@/components/dump/CheckboxField";
import { useAuth } from "@/context/AuthContext";
import { LoginModalProps } from "@/types";
import { poppins } from "@/lib/font";




const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onForgot,
}) => {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        await login(values.email, values.password);
        resetForm();
        onClose();
      } catch (err) {
        console.error("❌ Login error:", err);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
  } = formik;

  const handleClose = () => {
    onClose();
    formik.resetForm();
  };

  const handleForgetPassword = () => {
    onForgot();
  };

  return (
    <ModalUI isOpen={isOpen} onClose={handleClose}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full sm:mt-8 mb-8 lg:mt-[65px] lg:mb-[95px]"
      >
        <div
          className={`${poppins.className} text-[#010B28] text-3xl sm:text-4xl md:text-[58px] tracking-[2%] font-semibold`}
        >
          Login
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8 mb-8 sm:mb-10">
          <InputField
            id="email"
            name="email"
            label="Username or email*"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />

          {/* Password */}
          <InputField
            id="password"
            name="password"
            label="Password*"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            touched={touched.password}
          />
        </div>

        {/* Remember me + Forgot password */}
        <div className="flex items-center justify-between">
          {/* Remember me */}
          <CheckboxField
            id="remember"
            name="remember"
            label="Remember me"
            checked={values.remember}
            onChange={handleChange}
          />

          {/* Forgot password */}
          <button
            type="button"
            onClick={handleForgetPassword}
            className={`${poppins.className} font-normal text-sm sm:text-base tracking-[0.1px] text-[#12BAB0] cursor-pointer`}
          >
            Forgot My Password
          </button>
        </div>
        {/* Login button */}
        <ButtonUI
          type="submit"
          variant="dark"
          size="sm"
          className="w-full mt-6 sm:mt-[60px]"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Login
        </ButtonUI>
      </form>
    </ModalUI>
  );
};

export default LoginModal;
