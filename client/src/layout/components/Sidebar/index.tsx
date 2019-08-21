import { Component, Vue } from 'vue-property-decorator';

import styles from './sidebar.module.less';

@Component
export default class Sidebar extends Vue {
  render() {
    return (
      <div class={styles.container}>
        <a-menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode='inline' theme='dark'>
          <a-sub-menu key='sub1'>
            <span slot='title'>
              <a-icon type='user' />
              <span>人事服务</span>
            </span>
            <a-menu-item key='1'>劳动合同续签流程</a-menu-item>
            <a-menu-item key='2'>猎头费（待定）</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
    );
  }
}
