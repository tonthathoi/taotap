"use client";

import { useForm } from "react-hook-form";

import { MailIcon } from "@/assets/icons";
import { Container } from "@/containers/Auth";
import { FormInput } from "@/components/Forms";

const ResetPassword = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      username: "",
    },
  });

  return (
    <Container heading="Quên mật khẩu">
      <div className="mb-4">
        <div className="mb-6 md:w-full">
          <FormInput
            control={control}
            name="email"
            placeholder="Nhập email"
            label="Email"
            labelClassName="block mb-1 text-sm font-normal"
            inputClassName="placeholder:text-sm"
            icon={<MailIcon className="text-gray-400" />}
          />
        </div>
        <button className="px-4 py-2 text-xs font-semibold text-white uppercase bg-green-500 rounded btn hover:bg-green-700 max-sm:text-[10px]">
          Gửi yêu cầu
        </button>
      </div>
    </Container>
  );
};

export default ResetPassword;
