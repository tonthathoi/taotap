import avatar from "@/assets/images/avatar.png";
import { ImageWithFallback } from "@/components";

const Feedback = () => {
  return (
    <div
      className="rounded-[20px] p-6 bg-white"
      style={{
        boxShadow: "0 0 24px 0 rgba(51,51,51,.11)",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <ImageWithFallback
          src={avatar.src}
          alt="avatar"
          width={60}
          height={60}
          className="flex-shrink-0 object-cover rounded-full"
        />

        <div className="flex flex-col flex-1">
          <span className="text-base font-medium max-md:text-sm">Hội</span>
          <span className="text-sm text-gray-500 max-md:text-xs">
            Tôn Thất Hội
          </span>
        </div>
      </div>

      <p className="text-sm line-clamp-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolorum
        atque obcaecati ea alias iusto nesciunt fugiat totam ullam excepturi
        doloremque cum, ipsa dolorem omnis? Cumque quia esse facilis optio.
      </p>
    </div>
  );
};

export default Feedback;
