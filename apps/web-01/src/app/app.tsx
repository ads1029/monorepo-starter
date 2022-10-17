import CommonUi from 'libs/common-ui/src/lib/common-ui';
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <CommonUi></CommonUi>
      <NxWelcome title="web-01" />
      <div />
    </>
  );
}

export default App;
