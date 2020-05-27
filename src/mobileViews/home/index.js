import React, { Component } from 'react'
import Base from '../../components/mobile/base';
import { Carousel } from 'antd-mobile'
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          image:"https://revcycleintelligence.com/images/site/article_headers/_normal/2019-05-10_healthcare_costs.jpg",
          link:"https://costappbd.herokuapp.com/mobile/cost"
        },
        {
          image:"https://www.techmuzeacademy.com/wp-content/uploads/2019/01/Income.jpg",
          link:"http://costappbd.herokuapp.com/mobile/income"
        },
        {
          image:"https://tbsnews.net/sites/default/files/styles/big_2/public/images/2019/06/23/loans.jpg?itok=FxEHIwAO&timestamp=1561292348",
          link:"http://costappbd.herokuapp.com/mobile/loan"
        },
        {
          image:"https://hamiltontaggart.com.au/wp-content/uploads/2017/04/download-4.jpg",
          link:"http://costappbd.herokuapp.com/mobile/asset"
        }
      ],
      imgHeight: 176,
    }
  }



  render() {
    return (
      <Base title="Cost App">
        <Carousel
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href={val.link}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.image}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </Base>
    )
  }
}
