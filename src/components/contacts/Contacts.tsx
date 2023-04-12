import LinkedInfo from "./contacts-items/LinkedInfo";
import SkypeInfo from "./contacts-items/SkypeInfo";
import GitHub from './contacts-items/GitHub';
import City from "./contacts-items/City";
import Mail from "./contacts-items/Mail";
import Tel from "./contacts-items/Tel";

function Contacts() {
  return ( 
    <div className="contacts">
      <Tel />
      <LinkedInfo/>
      <Mail />
      <SkypeInfo/>
      <GitHub />
      <City />
    </div>
    );
}

export default Contacts;