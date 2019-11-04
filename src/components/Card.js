import React from "react";
import {MDBCard, MDBCol, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText} from 'mdbreact';

function Card(props){
    return(
      <MDBCol lg={props.size} md="12" className="mb-4">
      <MDBCard style={{ width: "auto" }}>
        <MDBCardImage className="img-fluid" src={props.imgSrc} waves />
        <p className="cardViews"><i className="far fa-eye"></i> 1600</p>
        <MDBCardBody className={'card-body ' + props.color} style={{fontSize: props.fontSize}}>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText style= {{display: props.text ? "block" : "none"}} >{props.text}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
    )
}
export default Card