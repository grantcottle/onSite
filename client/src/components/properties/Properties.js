import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";

class Properties extends Component {
  componentDidMount() {
    this.props.getProperties();
  }

  render() {
    const { profiles, loading } = this.props.property;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(property => (
          <ProfileItem key={property._id} property={property} />
        ));
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Developer Properties</h1>
              <p className="lead text-center">
                Browse and connect with developers
              </p>
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Properties.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  property: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  property: state.property
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Properties);
