import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn} from "mdbreact";

const FooterPage = () => {
  return (
    <div>
      <div className="text-center logo-footer">
            <img src="http://dwdomel.pl/logo-blog.png" alt="asd" className="navbar-logo img-fluid"/>
          </div>
    
    <MDBFooter className="font-small pt-4 mt-4 light">
      <MDBContainer className="text-center text-md-left pb-5">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title f-title">BLOG Piękne wnętrza</h5>
            <p className="footer-desc">
            Blog prezentujący porady i ciekawostki dla każdego, kto buduje dom, wymienia okna lub podąża za najnowszymi trendami w aranżacji wnętrz. Znajdziesz tu inspiracje remontowe, testy i recenzje okien, nowoczesne rozwiązania w budownictwie okiennym i architekturze mieszkalnej, a także rzetelne informacje i ciekawostki poświęcone oknom, roletom i drzwiom do domu. Blog Oknoplast to sprawdzone źródło wiedzy oraz pomocnik w wyborze idealnych okien, rolet i drzwi dla Ciebie.
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title f-title">Najnowsze wpisy</h5>
            <ul className="footer-links">
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title f-title">Wnętrza</h5>
            <ul className="footer-links">
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer>
          <MDBRow>
            <MDBCol lg="5" className="left">
              <MDBBtn color="white" className="btn-sm">WWW.DWDOMEL.PL</MDBBtn>
              <MDBBtn outline color="white" className="btn-sm">POLITYKA PRYWATNOŚCI</MDBBtn>
              <MDBBtn outline color="white" className="btn-sm">KONTAKT</MDBBtn>
            </MDBCol>
            <MDBCol lg="7" className="right">
              <p className="m-0">&copy; {new Date().getFullYear()} Copyright: <a href="mailto:glen.tomek@gmail.com"><strong> Tomasz Gleń Usługi Programistyczne </strong></a></p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;