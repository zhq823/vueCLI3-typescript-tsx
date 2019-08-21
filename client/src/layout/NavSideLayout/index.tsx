import { Component, Vue } from 'vue-property-decorator';
import { Navbar, Sidebar, Breadcrumb } from '../components';

import styles from './nav-side-layout.module.less';

@Component({
  components: {
    Navbar,
    Sidebar,
    Breadcrumb
  }
})
export default class NavSideLayout extends Vue {
  render() {
    return (
      <a-layout class={styles.layout}>
        <a-layout-header class={styles.header}>
          <navbar />
        </a-layout-header>
        <a-layout>
          <a-layout-sider collapsible>
            <sidebar />
          </a-layout-sider>
          <a-layout-content>
            <a-layout class={styles.main}>
              <a-layout-header class={styles.breadcrumb}>
                <breadcrumb />
              </a-layout-header>
              <a-layout-content class={styles.content}>
                <router-view />
              </a-layout-content>
            </a-layout>
          </a-layout-content>
        </a-layout>
      </a-layout>
    );
  }
}
