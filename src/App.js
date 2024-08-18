import React, { useState, lazy,useCallback,Suspense ,useEffect ,useRef , useMemo} from "react";
import Button from "./Button.jsx";
//import Text from "./Text.jsx";
import Timer from "./Timer.jsx";
import ButtonWithTooltip from './ButtonWithTooltip.jsx'
import Input from './Input.jsx'
import SecondParent from './SecondParent.jsx'

import PrintTable from './PrintTable.jsx'

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

const Text = lazy(() => delayForDemo(import('./Text.jsx')));
const App = () => {

  const [show,setShow] = useState(false);
  return (
    <>

    <button onClick={() => setShow(!show)}>Show</button>

    {show && <Suspense fallback={<div>Loading...</div>}>
      <Text children="Hello World"/>
    </Suspense>
    }
    </>

    
    
  );
};

export default App;


