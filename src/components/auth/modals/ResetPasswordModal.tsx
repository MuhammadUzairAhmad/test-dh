import ModalUI from "@/components/dump/Modal";
import ButtonUI from "@/components/dump/Button";
import InputField from "@/components/dump/InputField";
import { useFormik } from "formik";
import React from "react";
import {
  resetPasswordInitialValues,
  resetPasswordValidationSchema,
} from "@/lib/validation";
import { useAuth } from "@/context/AuthContext";
import { poppins } from "@/lib/font";
import { ResetPasswordModalProps } from "@/types";

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const { resetPassword } = useAuth();

  const formik = useFormik({
    initialValues: resetPasswordInitialValues,
    validationSchema: resetPasswordValidationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const token = localStorage.getItem("mock_reset_token") || "";

        await resetPassword(token, values.password);

        resetForm();
        onClose();
        onSuccess(); // go back to login
      } catch (err) {
        console.error("❌ Reset password error:", err);
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

  return (
    <ModalUI isOpen={isOpen} onClose={handleClose}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full sm:mt-8 mb-8 lg:mt-[26px] lg:mb-[58px]"
      >
        <div
          className={`${poppins.className} text-[#010B28] text-3xl sm:text-4xl md:text-[58px] tracking-[2%] font-semibold`}
        >
          Reset Your Password
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8">
          <InputField
            id="password"
            name="password"
            label="New Password*"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            touched={touched.password}
          />

          <InputField
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm New Password*"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
          />
        </div>
        <p className=" mt-2 font-poppins font-normal text-sm tracking-[0] text-[#010B28]">
          Your password must:
          <br />
          <span className=" mt-1 pl-2 text-[12px] text-gray-600 opacity-80 block list-none">
            <li>Be minimum of 8 characters</li>
            <li>Include at least one uppercase letter</li>
            <li>Include at least one number</li>
            <li>Include at least one symbol</li>
            <li>Cannot match your email address</li>
          </span>
        </p>

        {/* Reset button */}
        <ButtonUI
          type="submit"
          variant="dark"
          size="sm"
          className="w-full mt-6 sm:mt-[60px]"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Reset Password
        </ButtonUI>
      </form>
    </ModalUI>
  );
};

export default ResetPasswordModal;
