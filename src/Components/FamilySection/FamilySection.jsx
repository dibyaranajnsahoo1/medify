import React from "react";
import familyCards from "../../assets/stat-section-img.png";
import "./FamilySection.css";

const FamilySection = () => {
  return (
    <div className="family-section">
      <div className="family-section-container">
        <div className="family-section-content">
          <h3 className="family-section-subheading">
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </h3>
          <h2 className="family-section-heading">Our Families</h2>
          <p className="family-section-para">
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </p>
        </div>
        <div className="family-section-images">
          <img src={familyCards} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FamilySection;
