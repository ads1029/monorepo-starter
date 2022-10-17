// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CommonUi } from '@monorepo-starter/common-ui';

import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <div>
        <h1>Common UI should not be displayed with style here.</h1>
      </div>
      <CommonUi></CommonUi>
      <NxWelcome title="web-02" />
      <div />
    </>
  );
}

export default App;
