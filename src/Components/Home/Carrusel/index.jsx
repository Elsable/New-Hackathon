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
                <section class="hero is-medium has-carousel">
          <div class="hero-carousel carousel-animated carousel-animate-fade">
            <div class='carousel-container' style={{ height:500 }}>
              <div class='carousel-item has-background is-active'>
                <img class="is-background" src="https://wikiki.github.io/images/merry-christmas.jpg" alt="" />
              </div>
              <div class='carousel-item has-background'>
                <img class="is-background" src="https://wikiki.github.io/images/singer.jpg" alt="" />
              </div>
              <div class='carousel-item has-background'>
                <img class="is-background" src="https://wikiki.github.io/images/sushi.jpg" alt="" />
              </div>
              <div class='carousel-item has-background'>
                <img class="is-background" src="https://wikiki.github.io/images/life.jpg" alt="" />
              </div>
            </div>
            <div class="carousel-navigation is-overlay">
              <div class="carousel-nav-left">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
              </div>
              <div class="carousel-nav-right">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="hero-head">
            
          </div>
          <div class="hero-body has-text-centered">
            <div class="columns is-mobile is-centered">
              <div class="column is-half is-narrow">
                <div class="field has-addons">
                  <div class="control is-expanded">
                    <SearchInput class="input" type="text" placeholder="Busqueda General"
                        value={value}
                        onChange={this.onChange}                        
                        onPressEnter={this.onPressEnter}/>
                  </div>
                  <div class="control">
                    <a class="button is-info" onClick={this.onPressEnter}>
                      Search
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
              <div class="container">
                <ul>
                  <li class="is-active"><a>Overview</a></li>
                  <li><a class="has-text-white">Modifiers</a></li>
                  <li><a class="has-text-white">Grid</a></li>
                  <li><a class="has-text-white">Elements</a></li>
                  <li><a class="has-text-white">Components</a></li>
                  <li><a class="has-text-white">Layout</a></li>
                </ul>
              </div>
            </nav>
          </div> */}
        </section>
            </Fragment>
      </div>
    )
  }
}

export default Carrusel
