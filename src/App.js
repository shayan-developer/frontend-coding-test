import Main from "Components/Main";
import Layout from "Layout";
import { useCallback, useState } from "react";

function App() {
  const [timer, setTimer] = useState(60);
  const [disabled, setDisabled] = useState(false);

  const changeTimer = useCallback(() => {
    setDisabled(true);
    const interval = setInterval(() => {
      setTimer((t) => {
        if (t === 0) {
          clearInterval(interval);
          setDisabled(false);
          return 60;
        }
        return t - 1;
      });
    }, 1000);
  }, []);
  return (
    <Layout timer={timer}>
      <Main timer={timer} changeTimer={changeTimer} disabled={disabled} />
    </Layout>
  );
}

export default App;
