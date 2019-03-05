import React,{Fragment, Component} from 'react'
import { SearchInput, Notify } from 'zent'

export class Carrusel extends Component {
  state={
    value:''
  }
  onChange= evt=>{
    this.setState({
      value: evt.target.value
    })
  }
  onPressEnter=()=>{
    const {value}= this.state
    if (value) {
      Notify.success(`Your enter content: ${value}`);
    } else {
      Notify.error('Please input search content');
    }
  }
  render() {
    const { value }= this.state
    return (
      <div>
        <Fragment>
                <section className="hero is-medium has-carousel">
          <div className="hero-carousel carousel-animated carousel-animate-fade">
            <div className='carousel-container' style={{ height:500 }}>
              <div className='carousel-item has-background is-active'>
                <img className="is-background" src="https://wikiki.github.io/images/merry-christmas.jpg" alt="" />
              </div>
              <div className='carousel-item has-background'>
                <img className="is-background" src="https://wikiki.github.io/images/singer.jpg" alt="" />
              </div>
              <div className='carousel-item has-background'>
                <img className="is-background" src="https://wikiki.github.io/images/sushi.jpg" alt="" />
              </div>
              <div className='carousel-item has-background'>
                <img className="is-background" src="https://wikiki.github.io/images/life.jpg" alt="" />
              </div>
            </div>
            <div className="carousel-navigation is-overlay">
              <div className="carousel-nav-left">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </div>
              <div className="carousel-nav-right">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="hero-head">
            
          </div>
          <div className="hero-body has-text-centered">
            <div className="columns is-mobile is-centered">
              <div className="column is-half is-narrow">
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <SearchInput className="input" type="text" placeholder="Busqueda General"
                        value={value}
                        onChange={this.onChange}                        
                        onPressEnter={this.onPressEnter}/>
                  </div>
                  <div className="control">
                    <a className="button is-info" onClick={this.onPressEnter}>
                      Search
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
 
        </section>
            </Fragment>
      </div>
    )
  }
}

export default Carrusel
