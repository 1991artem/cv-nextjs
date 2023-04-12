import Contacts from '../contacts/Contacts';
function Footer() {
  return ( 
<footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
                <Contacts />
    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="https://github.com/1991artem"> Artem Puzik</a>
    </div>
    </div>
</footer>
  );
}

export default Footer;