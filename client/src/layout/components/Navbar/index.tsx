import { Component, Vue } from 'vue-property-decorator';

import styles from './navbar.module.less';

@Component
export default class Navbar extends Vue {
  logout() {
    this.$router.push('/login');
  }

  render() {
    return (
      <div class={styles.container}>
        <div class={styles.menus} />
        <a-dropdown>
          <a-avatar icon='user' />
          <a-menu slot='overlay' class={styles.overlay}>
            <a-menu-item>
              <a-icon type='user' />
              用户名
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item onClick={this.logout}>
              <a-icon type='logout' />
              退出
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    );
  }
}
