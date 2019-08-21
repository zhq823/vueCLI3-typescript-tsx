/**
 * 操作列状态
 */
export enum StepStatus {
  /**
   * 已终止
   */
  canceled = -1,
  /**
   * 未开启
   */
  future = 0,
  /**
   * 处理中
   */
  processing = 1,
  /**
   * 已完成
   */
  done = 2
}
