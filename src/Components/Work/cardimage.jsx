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
          <div className="container">
          <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <center>
          ** Imagenes referentes al trabajo a buscar **
          </center>
          </div>
            {
              this.imgArr.map((image, index) => {
                return (
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <br/>
                <img src={image} key={index} onClick={this.handlePreview} width={500}alt={2050} class="img-thumbnail"/>
                </div>
                
                );
              })
            }
            
            </div>
            <br/><br/>
            
            
        
        </div>
        
        )
    }
}

export default Cardimage
