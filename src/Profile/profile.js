import React from 'react';
import PropTypes from 'prop-types';

const Profile =(props) => {

    const styleObject = { color: "#2d00f7", textAlign: "center" };
    return (
      <div>
        <div className="upper-container">
          <div className="image-container">{props.children}</div>
        </div>
        <div className="lower-container">
          <h3> FullName: {props.fullName} </h3>
          <h4> Profession: {props.profession}</h4>
          <p style={styleObject}> Bio: {props.bio} </p>
          <button onClick={() => props.handleName()}>Click here</button>
        </div>
      </div>
    );
};

Profile.defaultProps = {
    fullName: " put you name here",
    profession: "put you profession here",
    bio: "put you bio here",
  };
  
  Profile.propTypes  = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
  };
  export default Profile;