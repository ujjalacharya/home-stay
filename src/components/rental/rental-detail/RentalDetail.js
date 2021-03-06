import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../../../actions";
import RentalDetailInfo from "./RentalDetailInfo";

import MapWithAMarker from "../../map";

class RentalDetail extends Component {
  state = {
    mapcity: "kathmandu"
  }
  componentDidMount() {
    const rentalId = this.props.match.params.id;
    this.props.dispatch(actions.getRentalById(rentalId));

    //Making city name locatable on map
    setTimeout(()=>{this.setState({mapcity: this.props.rental.city.replace(" ", "%20")}) }, 3000)
  }

  render() {
    const { rental } = this.props;
    return rental._id ? (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt="" />
            </div>
            <div className="col-md-6">
              {/* { !this.state.mapcity && <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD3akhMLW7iOdP1oBwRCS3aJ592nSe5HYk&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `350px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              /> } */}
               <div className="mapouter"><div className="gmap_canvas"><iframe width="600" height="350" id="gmap_canvas" src={`https://maps.google.com/maps?q=${this.state.mapcity}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div> </div>
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <RentalDetailInfo rental={rental} />
            </div>
            <div className="col-md-4"> BOOKING</div>
          </div>
        </div>
      </section>
    ) : (
      <h2>Loading...</h2>
    );
  }
}

const mapStateToProps = state => {
  return {
    rental: state.rental.data
  };
};

export default connect(mapStateToProps)(RentalDetail);
