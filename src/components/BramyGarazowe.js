import React, { Fragment } from "react";
import {MDBCol, MDBContainer, MDBRow, MDBIcon, MDBFormInline, MDBBtn} from 'mdbreact';
import List from './List'
import ListPhoto from './ListPhoto'
import PaginationPage from './PaginationPage'
import ListArchive from './ListArchive'

import cardsData from './CardsData'
import tagsData from './tagsData'
import Card from './Card'

const BramyGarazowe = () => {
  const cardComponents = cardsData.map(card => <Card key={card.id} imgSrc={card.imgSrc} title={card.title} text={card.tekst} />)
  const tagComponents = tagsData.map(tag => <MDBBtn className="btn-sm">{tag.tag}</MDBBtn>)

    return(
      <MDBContainer style={{paddingTop:"70px"}}>
        <MDBRow>
          <MDBCol lg="9" md="12">
            <MDBRow>
              <MDBCol lg="12" md="12">
                <div className="title">
                  <h5>BRAMY GARAŻOWE</h5>
                </div>
              </MDBCol>
                {cardComponents}
              <MDBCol md="12" right>
                <PaginationPage />
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="3" md="12">
          <div className="title">
              <h5>WYSZUKIWARKA</h5>
            </div>
            <MDBFormInline className="md-form mt-0 search">
            <p className="search-p">Wpisz to, czego szukasz i uruchom wyszukiwanie naciskając ENTER na klawiaturze.</p>
              <MDBIcon icon="search" />
              <input className="form-control form-control-sm ml-3 w-75" id="wyszukiwarka" type="text" placeholder="Wyszukaj" aria-label="Wyszukaj" />
              
            </MDBFormInline>
            <div className="title">
              <h5>WNĘTRZA</h5>
            </div>
            <ul className="elementList">
              <ListPhoto/>
              <ListPhoto/>
              <ListPhoto/>
              <ListPhoto/>
              <ListPhoto/>
            </ul>

            <div className="title">
              <h5>MEDIA SPOŁECZNOŚCIOWE</h5>
            </div>
            <div>
            <a href="#!" className="reddit-ic mr-3">
              <MDBIcon fab icon="facebook" size="lg"/>
            </a>
            <a href="#!" className="reddit-ic mr-3">
              <MDBIcon fab icon="instagram" size="lg"/>
            </a>
            <a href="#!" className="reddit-ic mr-3">
              <MDBIcon fab icon="linkedin-in" size="lg"/>
            </a>
            </div>

            <div className="title">
              <h5>KATEGORIE</h5>
            </div>

            <div className="title">
              <h5>POPULARNE WPISY</h5>
            </div>
            <ul className="elementList">
              <List title = "Pierwszy tekst długo jakiś jakiś jakiś jakiś jakiś"/>
              <List title = "Pierwszy tekst długo jakiś"/>
              <List title = "Pierwszy tekst długo jakiś"/>
              <List title = "Pierwszy tekst długo jakiś"/>
              <List title = "Pierwszy tekst długo jakiś"/>
              <List title = "Pierwszy tekst długo jakiś"/>
              <List title = "Pierwszy tekst długo jakiś"/>
              <List title = "Pierwszy tekst długo jakiś"/>
              <List title = "Pierwszy tekst długo jakiś"/>
              <List title = "Pierwszy tekst długo jakiś"/>
            </ul>

            <div className="title">
              <h5>ARCHIWUM</h5>
            </div>
            <Fragment>
              <ListArchive title = "Maj 2019"/>
              <ListArchive title = "Czerwiec 2019"/>
              <ListArchive title = "Lipiec 2019"/>
            </Fragment>
            <div className="title">
              <h5>TAGI</h5>
            </div>
            <div className="tag-div">
              {tagComponents}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
}
export default BramyGarazowe