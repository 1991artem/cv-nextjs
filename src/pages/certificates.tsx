import Image from "next/image";
import NavigateHeader from "@/components/nav/Nav";

function Certificate() {
  return (
    <div className="certificate">
      <NavigateHeader />
      <div className="certificate-img_container">
      <Image
        src={"/rs_certificate.png"}
        className="certificate_img"
        alt="rs_certificate"
        width={500}
        height={500}
      />
      <Image
        src={"/pixel.png"}
        className="certificate_img"
        alt="rs_certificate"
        width={500}
        height={500}
      />
      </div>
    </div>
  );
}

export default Certificate;