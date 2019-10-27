import React from "react";
import {MDBCol} from 'mdbreact'; 

function CardBig(props){
    return(
      <MDBCol lg="12" md="12" className="mb-4">
        <div className="view overlay">
      <div className="card card-image card-1" style={{background: "url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)"}}>
        <div className="card-content-1 text-white text-center d-flex align-items-center rgba-black-light py-5 px-4">
          <div className="card-title-1">
            <h3 className="pt-2"><strong>This is the card title</strong></h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
          </div>
        </div>
      </div>
      </div>
      </MDBCol>
    )
}
export default CardBig