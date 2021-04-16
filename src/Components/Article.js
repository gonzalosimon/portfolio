import React, { Component } from 'react';
import '../App.css';
import '../Responsive.css';

class Article extends Component {
  render() {  
    return (
      <div data-aos={this.props.aos} className="article">
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <div className={this.props.class}>
            <div className="article-image">
              <img src={this.props.image} className="article-image-size" alt="Article Thumbnail"/>
            </div>
            <div className="article-contents">
              <div className="article-title">
                {this.props.title}
              </div>
              <div className="article-subtitle">
                {this.props.subtitle}
              </div>
              <div className={this.props.dateClass}>
                {this.props.date}
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Article;
