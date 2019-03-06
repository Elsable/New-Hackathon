import React, { Component } from 'react'
import {  Row, Col } from 'reactstrap';

import { previewImage } from 'zent'



export class Cardimage extends Component {
    imgArr= this.props.PasImagen2
    

    handlePreview = (e) => {
        
        previewImage({
          images: this.imgArr,
          index: this.imgArr.indexOf(e.target.src),
          parentComponent: this,
          scaleRatio: 3
        });
      }

    render() {
        

        return (
          <div className="row">
          {
            this.imgArr.map((image, index) => {
              
              return (   <Col xs={6} sm={6}><img src={image} key={index} onClick={this.handlePreview} alt="" width="250" /></Col>);
            })
          }
          <br/><br/>
          </div>
        
        )
    }
}

export default Cardimage
