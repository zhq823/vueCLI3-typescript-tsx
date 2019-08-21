import { Component, Vue } from 'vue-property-decorator';

import styles from './login.module.less';

@Component
export default class Home extends Vue {
  login() {
    this.$router.push('/');
  }

  render() {
    return (
      <div class={styles.frame}>
        <a-card title='Seanzen' class={styles.form}>
          <a-button type='primary' onClick={this.login}>
            登录
          </a-button>
        </a-card>
      </div>
    );
  }
}
