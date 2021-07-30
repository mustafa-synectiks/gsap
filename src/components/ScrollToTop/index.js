// This is ScrollToTop component, To scroll from anywhere to top
import styled from 'styled-components'
import Arrow from '../../assets/arrow-up.svg'
const Up = styled.div`
  img{
    width: 3rem;
    height: 3rem;
  }
`;
const ScrollToTop = () => {
  const ScrollUp = () => {
    const element = document.getElementById("home");
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      })
  }
  return (
    <Up onClick={() => {
      ScrollUp()
    }}>
      <img src={Arrow} alt='top top'  />
    </Up>
  )
};

export default ScrollToTop;
