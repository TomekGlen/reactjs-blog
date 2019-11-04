import React from "react";
import {MDBCol, MDBBtn} from 'mdbreact'; 

function CardBig(props){
    return(
      <MDBCol lg="12" md="12" className="mb-5">
        <div className="view overlay">
      <div className="card card-image card-1" style={{background: "url('https://mdbootstrap.com/img/Photos/Slides/img%20(123).jpg')"}}>
      <p className="cardViews"><i className="far fa-eye"></i> 1600</p>
        <div className="card-content-1 text-white text-left d-flex align-items-center rgba-black-light py-5 px-4">
          <div className="card-title-1">
            <MDBBtn className="btn-sm kategoria">KATEGORIA</MDBBtn>
            <h3 className="pt-2"><strong>Okna do domu - jakie wybrać i dlaczego?</strong></h3>
            <p className="CardBig-desc">Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker</p>
          </div>
        </div>
      </div>
      </div>
      </MDBCol>
    )
}
export default CardBig