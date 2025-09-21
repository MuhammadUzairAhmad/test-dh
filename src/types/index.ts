import { HTMLInputTypeAttribute } from "react";

export type Question = {
  id: number;
  text: string;
  options: string[];
  source: string;
  activeTill: string;
};

export type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onForgot: () => void;
};

export type ResetPasswordModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export type ResetSuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onReset: () => void;
};

export type CardDataProps = {
  card: {
    id: number;
    title: string;
    subTitle?: string;
    description: string;
  };
};

export type TopbarProps = {
  onMenuClick: () => void;
};

export type VariantType =
  | "primary"
  | "outline"
  | "dark"
  | "dashboard"
  | "textUnderline";
export type SizeType = "sm" | "md" | "lg" | "mdx";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: VariantType;
  size?: SizeType;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export type HeadingProps = {
  title?: string;
  buttonLabel?: string;
  buttonLeftIcon?: React.ReactNode;
  buttonRightIcon?: React.ReactNode;
  onButtonClick?: () => void;
  align?: "left" | "right" | "center";
  className?: string;
};

export type CalendarInputProps = {
  id: string;
  name?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: string;
  touched?: boolean;
  className?: string;
};

export type CheckboxFieldProps = {
  id: string;
  name: string;
  label: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type Variant = "input" | "textarea" | "select" | "text";

export type InputFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  onBlur?: React.FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  error?: string;
  touched?: boolean;
  className?: string;
  variant?: Variant;
  options?: { value: string; label: string }[];
  inputClass?: string;
  labelClass?: string;
};

export type PaginationProps = {
  total: number;
  current: number;
  onPageChange: (page: number) => void;
};

export type RadioButtonProps = {
  label: string;
  name?: string;
  value?: string;
  interactive?: boolean;
  checked?: boolean;
  onChange?: (value: string) => void;
};

export type TabItem = {
  id: string;
  label: string;
};

export type TabsProps = {
  tabs: TabItem[];
  initialTab?: string;
  onTabChange?: (tabId: string) => void;
};

export type TimeInputProps = {
  id: string;
  name?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: string;
  touched?: boolean;
  className?: string;
};
