import React from "react";
import {MDBCol, MDBContainer, MDBRow} from 'mdbreact';
import PaginationPage from './PaginationPage'

import cardsData from './CardsData'
import Card from './Card'
import CardBig from './CardBig'

const Okna = () => {
  const cardComponents = cardsData.map(card => <Card size="6" fontSize="90%" key={card.id} imgSrc={card.imgSrc} title={card.title} text={card.tekst}/>)

    return(
      <MDBContainer style={{paddingTop:"70px"}}>
        <MDBRow>
          <MDBCol lg="10" md="12">
            <MDBRow>
              <MDBCol lg="12" md="12">
              <div className="title">
                <h5>OKNA</h5>
              </div>
              </MDBCol>
                <CardBig />
                {cardComponents}
              <MDBCol md="12" right>
                <PaginationPage />
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="2" md="12">
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
}
export default Okna