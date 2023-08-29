import { useEffect, useState } from "react";
import {
  Container,
  Advice,
  DividerDesktop,
  Header,
  DiceIcon,
  Circle,
} from "./styled";

const URL = "https://api.adviceslip.com/advice";

export const AdviceGenerator = () => {
  const [advice, setAdvice] = useState(null);
  const [id, setId] = useState(null);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        setAdvice(json.slip.advice);
        setId(json.slip.id);
        setIsLoading(false);
      });
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [reload]);

  const handleReload = () => {
    setIsLoading(true);
    setReload(!reload);
  };

  return (
    <Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header>ADVICE #{id}</Header>
          <Advice>&ldquo;{advice}&rdquo;</Advice>
          <DividerDesktop />
          <Circle onClick={handleReload}>
            <DiceIcon />
          </Circle>
        </>
      )}
    </Container>
  );
};
