"use client"

import { Button, HeadLine } from "@/components";
import {
  PhoneIcon,
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
  TiktokIcon,
  WebsiteIcon,
  MoneyIcon,
  EditIcon,
  InstagramIcon,
} from "@/assets/icons";

const Profile = () => {
  return (
    <div className="flex-col gap-5 pt-16 text-white flex-center">
      <div className="bg-[var(--purple-primary)] rounded-full w-52 h-52 uppercase flex-center text-4xl font-bold">
        H
      </div>

      <div className="w-full max-w-[475px] flex-center flex-col text-[var(--text-color)]">
        <h1 className="text-xl font-bold">Tôn Thất Hội</h1>
        <h2 className="mt-1 text-sm text-center line-clamp-4">
          Tôi là 1 FrontEnd Developer với nhiều năm kinh nghiệm, đã làm qua
          nhiều dự án
        </h2>
      </div>

      <div className="flex flex-col w-full gap-5 mb-[90px]">
        <HeadLine
          title="Mạng xã hội"
          component="h5"
          containerClassName="text-center text-sm font-bold mt-5"
        />
        <Button
          title="Facebook"
          containerClassName="border-[1px] border-[var(--text-color)] w-full justify-between text-[var(--text-color)]"
          iconStart={FacebookIcon}
          iconStartClassName="text-[var(--text-color)]"
          iconEnd={EditIcon}
        />

        <Button
          title="Twitter"
          containerClassName="border-[1px] border-[var(--text-color)] w-full justify-between text-[var(--text-color)]"
          iconStart={TwitterIcon}
          iconEnd={EditIcon}
          iconStartClassName="text-[var(--text-color)]"
        />

        <Button
          title="Tiktok"
          containerClassName="border-[1px] border-[var(--text-color)] w-full justify-between text-[var(--text-color)]"
          iconStart={TiktokIcon}
          iconEnd={EditIcon}
          iconStartClassName="text-[var(--text-color)]"
        />

        <Button
          title="Youtube"
          containerClassName="border-[1px] border-[var(--text-color)] w-full justify-between text-[var(--text-color)]"
          iconStart={YoutubeIcon}
          iconEnd={EditIcon}
          iconStartClassName="text-[var(--text-color)]"
        />

        <Button
          title="Instagram"
          containerClassName="border-[1px] border-[var(--text-color)] w-full justify-between text-[var(--text-color)]"
          iconStart={InstagramIcon}
          iconEnd={EditIcon}
          iconStartClassName="text-[var(--text-color)]"
        />

        <HeadLine
          title="Liên hệ"
          component="h5"
          containerClassName="text-center text-sm font-bold mt-5"
        />

        <Button
          title="Số điện thoại"
          containerClassName="border-[1px] border-[var(--text-color)] w-full justify-between text-[var(--text-color)]"
          iconStart={PhoneIcon}
          iconEnd={EditIcon}
          iconStartClassName="text-[var(--text-color)]"
        />

        <HeadLine
          title="Khác"
          component="h5"
          containerClassName="text-center text-sm font-bold mt-5"
        />

        <Button
          title="Website"
          containerClassName="border-[1px] border-[var(--text-color)] w-full justify-between text-[var(--text-color)]"
          iconStart={WebsiteIcon}
          iconEnd={EditIcon}
          iconStartClassName="text-[var(--text-color)]"
        />
        <Button
          title="Ngân hàng"
          containerClassName="border-[1px] border-[var(--text-color)] w-full justify-between text-[var(--text-color)]"
          iconStart={MoneyIcon}
          iconEnd={EditIcon}
          iconStartClassName="text-[var(--text-color)]"
        />
      </div>
    </div>
  );
};

export default Profile;
