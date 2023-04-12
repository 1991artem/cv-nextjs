import Image from "next/image";
import Contacts from "../contacts/Contacts";
import Skills from "../skils/Skills";

function AboutLeftSide() {
  return (
    <div className="about-page_info">
      <div className="about-page_info_foto">
        <Image
          src={"/avatar.png"}
          alt="avatar"
          width={250}
          height={250} />
      </div>
      <Contacts />
      <Skills />
    </div>
  );
}

export default AboutLeftSide;