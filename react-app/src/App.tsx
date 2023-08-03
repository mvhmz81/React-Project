import Message from "./message";
import ListGroup from "./components/ListGroup";
import { Alert } from "./components/alert";
import { Button } from "./components/button";
import { Alert2 } from "./components/alert2";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];
  //return <div><Message></Message></div>;
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  const [alert2, setAlert2] = useState(false);
  return (
    <div>
      <Message />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
      <Alert>
        Hello<span>World</span>
      </Alert>
      {alert2 && <Alert2 onClose={() => setAlert2(false)} />}
      <Button color="dark" onClick={() => setAlert2(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
