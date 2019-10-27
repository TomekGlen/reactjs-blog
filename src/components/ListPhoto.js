import React from "react";
import {MDBCardImage} from 'mdbreact';

function ListPhoto(props){
    return(
        <li className="list-photo mb-2 pb-2">
        <div className="card">
            <div className="row no-gutters">
                <div className="list-photo-div col-4">
                    <MDBCardImage className="img-photo img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg" waves />
                </div>
                <div className="col-8">
                    <div className="card-block px-2">
                        <h4 className="list-photo-kategoria card-title">OKNA</h4>
                        <p className="list-photo-naglowek">Okna do domu. Jakie wybrać?</p>
                    </div>
                </div>
            </div>
        </div>
        </li>
    )
}
export default ListPhoto