import s from './Loading.module.scss';

const Loading = () => (
  <div className={s.container}>
    <div className={s.loadingBar} />
    <div className={s.loadingBar} />
    <div className={s.loadingBar} />
    <div className={s.loadingBar} />
    <div className={s.loadingBar} />
    <div className={s.loadingBar} />
    <div className={s.loadingBar} />
  </div>
);

export default Loading;
