import ButtonUI from "@/components/dump/Button";
import ModalUI from "@/components/dump/Modal";
import React from "react";
import InputField from "@/components/dump/InputField";
import { useFormik } from "formik";
import {
  forgetPasswordInitialValues,
  forgetPasswordValidationSchema,
} from "@/lib/validation";
import { useAuth } from "@/context/AuthContext";
import { poppins } from "@/lib/font";



type ForgetPasswordModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

const ForgetPasswordModal: React.FC<ForgetPasswordModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const { requestPasswordReset } = useAuth();

  const formik = useFormik({
    initialValues: forgetPasswordInitialValues,
    validationSchema: forgetPasswordValidationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        await requestPasswordReset(values.email);

        resetForm();
        onClose();
        onSuccess();
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

  return (
    <ModalUI isOpen={isOpen} onClose={handleClose}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full sm:mt-8 mb-8 lg:mt-[89px] lg:mb-[116px]"
      >
        <div
          className={`${poppins.className} text-[#010B28] text-3xl sm:text-4xl md:text-[58px] tracking-[2%] font-semibold`}
        >
          Forgot Your Password?
        </div>
        <div className="mt-6 sm:mt-8 text-sm sm:text-base tracking-normal text-[#010B28]">
          Enter your email address and we&apos;ll send you a reset link.
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8">
          <InputField
            id="email"
            name="email"
            label="Email*"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />
        </div>

        {/* Send button */}
        <ButtonUI
          type="submit"
          variant="dark"
          size="sm"
          className="w-full mt-6 sm:mt-[60px]"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Send
        </ButtonUI>
      </form>
    </ModalUI>
  );
};

export default ForgetPasswordModal;
