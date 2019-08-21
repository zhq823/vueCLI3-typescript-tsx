import { Component, Vue } from 'vue-property-decorator';
import { BoardStep } from '@/components';

import styles from './home.module.less';

@Component({
  components: { BoardStep }
})
export default class Home extends Vue {
  render() {
    return <div class='home'>hello world</div>;
  }
}
