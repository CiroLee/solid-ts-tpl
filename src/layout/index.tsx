import { type Component } from 'solid-js';
import { A, useRoutes } from '@solidjs/router';
import routes from '@/routes';
import style from './layout.module.scss';

const Layout: Component = () => {
  const Route = useRoutes(routes);
  return (
    <div class={style.layout}>
      <div class={style.nav}>
        <A href="/" end activeClass={style['link-active']} inactiveClass={style['link-inactive']}>
          <span>Home</span>
        </A>
        <span>|</span>
        <A href="/about" end activeClass={style['link-active']} inactiveClass={style['link-inactive']}>
          <span>About</span>
        </A>
      </div>
      <Route />
    </div>
  );
};

export default Layout;
