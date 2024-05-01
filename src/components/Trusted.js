import styled, { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    bg: "#ffffff", // Define your background color here
    text: "#000000", // Define your text color here
    // Add more colors as needed
  },
  media: {
    mobile: "768px", // Define your mobile breakpoint here
    // Add more breakpoints as needed
  },
};

const Trusted = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper className="brand-section">
        <div className="container">
          <h3>Trusted By 1000+ Companies</h3>
          <div className="brand-section-slider">
            {/* my 1st img  */}
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
                alt="trusted-brands"
              />
            </div>
            <div className="slide">
              <img
                src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
                alt="trusted-brands"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
