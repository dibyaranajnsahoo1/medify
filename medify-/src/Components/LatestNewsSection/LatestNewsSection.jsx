import React from "react";
import "./LatestNewsSection.css";
import latestNewsImg from "../../assets/latest-news-img.png";
import author from "../../assets/latest-news-author.png";

const LatestNewsSection = () => {
  return (
    <div className="latest-news-section">
      <div className="latest-news-container">
       
        <h1 className="latest-news-heading">Blog & News</h1>
        <h2 className="latest-news-subheading">Read Our Latest News</h2>
      
        <div className="latest-news-cards">
      
            <div className="latest-news-card">
              <img src={latestNewsImg} alt="stock" />
              <div className="latest-news-card-details">
                <div className="category-and-date">
                  <p>Medical</p>
                  <div className="vertical-dash"></div>
                  <p>March 31, 2022</p>
                </div>
                <h1>6 Tips To Protect Your Mental Health When You’re Sick</h1>
                <div className="author">
                  <img src={author} alt="author" />
                  <p>Rebecca Lee</p>
                </div>
              </div>
            </div>

            <div className="latest-news-card">
              <img src={latestNewsImg} alt="stock" />
              <div className="latest-news-card-details">
                <div className="category-and-date">
                  <p>Medical</p>
                  <div className="vertical-dash"></div>
                  <p>March 31, 2022</p>
                </div>
                <h1>6 Tips To Protect Your Mental Health When You’re Sick</h1>
                <div className="author">
                  <img src={author} alt="author" />
                  <p>Rebecca Lee</p>
                </div>
              </div>
            </div>

            <div className="latest-news-card">
              <img src={latestNewsImg} alt="stock" />
              <div className="latest-news-card-details">
                <div className="category-and-date">
                  <p>Medical</p>
                  <div className="vertical-dash"></div>
                  <p>March 31, 2022</p>
                </div>
                <h1>6 Tips To Protect Your Mental Health When You’re Sick</h1>
                <div className="author">
                  <img src={author} alt="author" />
                  <p>Rebecca Lee</p>
                </div>
              </div>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default LatestNewsSection;
