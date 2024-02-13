import { HeadLine, Modal } from "@/components";
import { LinkItem } from "@/containers/Admin";
import { FacebookIconV2, InstagramIconV2, PhoneIconV2, TelegramIcon, TiktokIconV2, YoutubeIconV2, ZaloIcon } from "@/assets/icons";

import card from "@/assets/images/card.png"
import website from "@/assets/images/website.png"

const AddLinkModal = () => {
  return (
    <Modal type="add_link">
      <HeadLine title="Mạng xã hội" containerClassName="text-black text-base font-bold mb-1" component="h5" />
      <HeadLine title="Chia sẻ mạng xã hội đến bạn bè của bạn" containerClassName="text-black text-sm text-gray-500 mb-10" component="h5" />
      <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
        <LinkItem name="Youtube" icon={<YoutubeIconV2 />} origin_name="Chia sẻ Youtube của bạn với bạn bè" />
        <LinkItem name="Facebook" icon={<FacebookIconV2 />} origin_name="Chia sẻ Facebook của bạn với bạn bè" />
        <LinkItem name="Zalo" icon={<ZaloIcon />} origin_name="Chia sẻ Zalo của bạn với bạn bè" />
        <LinkItem name="Tiktok" icon={<TiktokIconV2 />} origin_name="Chia sẻ Tiktok của bạn với bạn bè" />
        <LinkItem name="Telegram" icon={<TelegramIcon />} origin_name="Chia sẻ Telegram của bạn với bạn bè" />
        <LinkItem name="Instagram" icon={<InstagramIconV2 />} origin_name="Chia sẻ Instagram của bạn với bạn bè" />
      </div>

      <HeadLine title="Thanh toán" containerClassName="text-black text-base font-bold mb-1 mt-16" component="h5" />
      <HeadLine title="Chia sẻ các phương thức thanh toán của bạn" containerClassName="text-black text-sm text-gray-500 mb-10" component="h5" />
      <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
        <LinkItem name="Ngân hàng" src={card} origin_name="Thanh toán nhanh hơn" />
      </div>

      <HeadLine title="Cá nhân" containerClassName="text-black text-base font-bold mb-1 mt-16" component="h5" />
      <HeadLine title="Chia sẻ các thông tin cá nhân của bạn với bạn bè" containerClassName="text-black text-sm text-gray-500 mb-10" component="h5" />
      <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
        <LinkItem name="Số điện thoại" icon={<PhoneIconV2 />} origin_name="Liên lạc nhanh và dễ dàng hơn" />
        <LinkItem name="Website" src={website} origin_name="Flexing website của bạn với bạn bè" />
      </div>
    </Modal>
  );
};

export default AddLinkModal;
