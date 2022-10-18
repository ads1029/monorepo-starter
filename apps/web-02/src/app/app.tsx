// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CommonUi } from '@monorepo-starter/common-ui';

export function App() {
  return (
    <>
      <div>
        <h1>Common UI should not be displayed with style here.</h1>
        <CommonUi />
      </div>
      <div />
    </>
  );
}

export default App;
