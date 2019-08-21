import { Component, Vue } from 'vue-property-decorator';

import styles from './breadcrumb.module.less';

@Component
export default class Breadcrumb extends Vue {
  render() {
    return (
      <div class={styles.bordered}>
        <a-breadcrumb>
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
    );
  }
}
