import { Component, Vue, Prop } from 'vue-property-decorator';
import { StepStatus } from './types';

import styles from './component.board-step.module.less';

@Component
export default class BoardTable extends Vue {
  @Prop() status!: StepStatus;

  get statusDisplay(): string {
    const display = this.status === -1 ? '已终止' : this.status === 0 ? '待开启' : this.status === 1 ? '处理中' : '已完成';
    return display;
  }

  render(): JSX.Element {
    let className;
    switch (this.status) {
      case StepStatus.canceled:
        className = styles.canceled;
        break;
      case StepStatus.processing:
        className = styles.processing;
        break;
      case StepStatus.done:
        className = styles.done;
        break;
      default:
        className = styles.future;
        break;
    }

    return <div class={className + ' ' + styles.container}>{this.statusDisplay}</div>;
  }
}
