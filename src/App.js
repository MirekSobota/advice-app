import { GlobalStyle } from "./GlobalStyled";

import { AdviceGenerator } from "./Features/index";
import { Wrapper } from "./styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <AdviceGenerator />
      </Wrapper>
    </>
  );
}

export default App;
