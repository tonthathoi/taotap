"use client";

import { useForm } from "react-hook-form";

import { FormInput } from "@/components/Forms";
import { Container } from "@/containers/Auth";
import { LockIcon, PersonIcon } from "@/assets/icons";

const Login = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      username: "",
    },
  });

  return (
    <Container heading="Đăng nhập">
      <div className="mb-4">
        <div className="mb-4 md:w-full">
          <FormInput
            control={control}
            name="username"
            placeholder="Tên tài khoản"
            label="Tên tài khoản"
            labelClassName="block mb-1 text-sm font-normal"
            inputClassName="placeholder:text-sm"
            icon={<PersonIcon className="text-gray-400" />}
            />
        </div>
        <div className="mb-6 md:w-full">
          <FormInput
            control={control}
            name="password"
            placeholder="Nhập mật khẩu"
            label="Mật khẩu"
            labelClassName="block mb-1 text-sm font-normal"
            inputClassName="placeholder:text-sm"
            icon={<LockIcon className="text-gray-400" />}
          />
        </div>
        <button className="px-4 py-2 text-xs font-semibold text-white uppercase bg-green-500 rounded btn hover:bg-green-700 max-sm:text-[10px]">
          Đăng nhập
        </button>
      </div>
    </Container>
  );
};

export default Login;
