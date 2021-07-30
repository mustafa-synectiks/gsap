// This is Testimonials component
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../../components/Card';
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;
const Title = styled.h4`
  display: inline-block;
  font-size: 2rem;
  margin-top: 1rem;
  position: relative;

  &::before{
    content: '';
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    border-bottom: 2px solid var(--purple);
    transform: translate(-50%);
  }
`;
const Carousel = styled.div`
width: 50VW;
display: flex;
flex-direction: column;
justify-content: center;

  @media only Screen and (max-width: 40em) {
     width: 90vw;
     .slick-slider .slick-arrow {
        display: none;
     }
  }

.slick-slider .slick-arrow:before {
  color: var(--black);
  font-size: 1.5rem;
  @media only Screen and (max-width: 40em) {
        display: none;
  }
}
.slick-slider .slick-dots button:before {
  color: var(--black);
  font-size: 1.5rem;
}
.slick-slide.slick-active {
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 margin: 0;
 padding: 0;
 margin-bottom: 3rem;
}

`;
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return <Section>
    <Title>Few Words About Us</Title>
    <Carousel>
    <Slider {...settings}>
          <Card
            text='Esse excepteur veniam nostrud culpa ex magna duis et minim do ea. Occaecat sunt laborum do id sunt sint eu in ipsum nisi sint incididunt enim deserunt. In consequat nisi mollit consectetur sunt. Nostrud eiusmod culpa dolor incididunt quis enim in ex duis nisi elit minim mollit dolor.'
            name='Jenny'
            image='avatar-1'
          /><Card
          text='Esse excepteur veniam nostrud culpa ex magna duis et minim do ea. Occaecat sunt laborum do id sunt sint eu in ipsum nisi sint incididunt enim deserunt. In consequat nisi mollit consectetur sunt. Nostrud eiusmod culpa dolor incididunt quis enim in ex duis nisi elit minim mollit dolor.'
          name='Wilson '
            image='avatar-2'
          /><Card
          text='Esse excepteur veniam nostrud culpa ex magna duis et minim do ea. Occaecat sunt laborum do id sunt sint eu in ipsum nisi sint incididunt enim deserunt. In consequat nisi mollit consectetur sunt. Nostrud eiusmod culpa dolor incididunt quis enim in ex duis nisi elit minim mollit dolor.'
          name='David'
            image='avatar-3'
          /><Card
          text='Esse excepteur veniam nostrud culpa ex magna duis et minim do ea. Occaecat sunt laborum do id sunt sint eu in ipsum nisi sint incididunt enim deserunt. In consequat nisi mollit consectetur sunt. Nostrud eiusmod culpa dolor incididunt quis enim in ex duis nisi elit minim mollit dolor.'
          name='Elixir'
            image='avatar-4'
          />
        </Slider>
    </Carousel>
  </Section>
};

export default Testimonials;
