import { Fragment, memo } from "react";

const Accordion = () => {
  return (
    <Fragment>
      <div
        className="collapse collapse-plus bg-white py-1.5 px-4"
        style={{
          boxShadow: "0 6px 12px 0 rgba(170,170,170,.2)",
        }}
      >
        <input type="radio" name="my-accordion-3" />
        <div className="max-md:text-sm text-xl font-medium collapse-title after:!text-3xl after:!top-2 max-md:after:!top-3 max-md:after:!text-xl">
          Taotap là gì?
        </div>
        <div className="collapse-content">
          <p className="text-sm max-md:text-xs">
            Taotap là công cụ liên kết cho phép bạn hiển thị mọi thứ bạn muốn
            chia sẻ ở một nơi. Bạn có thể thêm liên kết Taotap vào tiểu sử mạng
            xã hội của mình và bạn bè có thể truy cập trang liên kết của bạn để
            tìm hiểu mọi thứ về bạn. Giải pháp tiếp thị liên kết tất cả trong
            một để thu hút nhiều người hơn, tăng lượt phát trực tiếp và tăng
            doanh số bán hàng của bạn.
          </p>
        </div>
      </div>

      <div
        className="my-5 collapse collapse-plus bg-white py-1.5 px-4"
        style={{
          boxShadow: "0 6px 12px 0 rgba(170,170,170,.2)",
        }}
      >
        <input type="radio" name="my-accordion-3" />
        <div className="max-md:text-sm text-xl font-medium collapse-title after:!text-3xl after:!top-2 max-md:after:!top-3 max-md:after:!text-xl">
          Tại sao tôi nên sử dụng Taotap?
        </div>
        <div className="collapse-content">
          <p className="text-sm max-md:text-xs">
            Taotap phù hợp với tất cả các ngành. Người bán có thể quảng bá sản
            phẩm, trang web của mình; Nhạc sĩ có thể chia sẻ âm nhạc, sự kiện,
            vé để tiếp cận nhiều người nghe hơn; Người sáng tạo có thể chia sẻ
            tác phẩm mới nhất của họ để thu hút bạn bè ủng hộ tác phẩm của bạn.
            Nó giúp bạn có được nhiều người xem, người đăng ký, người theo dõi
            và mức độ tương tác trên tất cả các nền tảng xã hội của bạn.
          </p>
        </div>
      </div>

      <div
        className="collapse collapse-plus bg-white py-1.5 px-4"
        style={{
          boxShadow: "0 6px 12px 0 rgba(170,170,170,.2)",
        }}
      >
        <input type="radio" name="my-accordion-3" />
        <div className="max-md:text-sm text-xl font-medium collapse-title after:!text-3xl after:!top-2 max-md:after:!top-3 max-md:after:!text-xl">
          Tôi có thể thêm nhiều liên kết vào Taotap của mình không?
        </div>
        <div className="collapse-content">
          <p className="text-sm max-md:text-xs">
            Câu trả lời là có. Bạn có thể thêm bất kì liên kết nào bạn muốn,
            chúng tôi sẽ không lấy bất cứ chi phí nào từ bạn, tất cả đều là miễn
            phí
          </p>
        </div>
      </div>

      <div
        className="collapse collapse-plus bg-white py-1.5 px-4 my-5"
        style={{
          boxShadow: "0 6px 12px 0 rgba(170,170,170,.2)",
        }}
      >
        <input type="radio" name="my-accordion-3" />
        <div className="max-md:text-sm text-xl font-medium collapse-title after:!text-3xl after:!top-2 max-md:after:!top-3 max-md:after:!text-xl">
          Thông tin của tôi có được bảo mật không?
        </div>
        <div className="collapse-content">
          <p className="text-sm max-md:text-xs">
            Thông tin của bạn được chung tôi bảo mật hoàn toàn, chúng tôi chỉ
            cung cấp thông tin khi có sự đồng ý của bạn
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default memo(Accordion);
