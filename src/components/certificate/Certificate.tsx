import NavigateHeader from "../nav/Nav";

function Certificate() {
    return ( 
        <div className="certificate">
        <NavigateHeader />
        <img src={require("../../img/rs_certificate.png")} className="certificate_img" alt="rs_certificate" />
        <img src={require("../../img/pixel.png")} className="certificate_img" alt="rs_certificate" />
      </div>
     );
}

export default Certificate;