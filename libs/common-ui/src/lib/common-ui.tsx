import styles from './common-ui.module.css';

/* eslint-disable-next-line */
export interface CommonUiProps {}

export function CommonUi(props: CommonUiProps) {
  return (
    <div className={styles['container']}>
      <h1 className="text-5xl">Welcome to CommonUi!</h1>
      {/* <h1>here is a newly added line</h1> */}
      <div className="text-5xl bg-indigo-500 p-2 font-mono">Hello!</div>
    </div>
  );
}

export default CommonUi;
