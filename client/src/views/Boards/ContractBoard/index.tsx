import { Component, Vue } from 'vue-property-decorator';
import { BoardStep, StepStatus, UserSelectModal, ContractSubjectSelect } from '@/components';
import { Pagination } from 'ant-design-vue';

import styles from './contract-board.module.less';

@Component({
  components: { BoardStep, UserSelectModal, ContractSubjectSelect }
})
export default class ContractBoard extends Vue {
  userSelectModalVisible = false;
  selectUserId = '';
  number = '';
  name = '';
  level!: string[];
  department = '';
  main = '';
  adNumber = '';
  stepStatus!: StepStatus;

  stepAction!: number;
  business!: number;
  loading = false;
  data: any[] = [];
  sorter: any;
  // pagination = new Pagination();
  pagination: any = {
    total: 0,
    current: 1,
    pageSize: 10
  };

  columns = [
    { title: '序号', key: 'no', width: 80, scopedSlots: { customRender: 'no' } },
    {
      title: '员工工号',
      width: 120,
      sorter: true,
      dataIndex: 'number',
      scopedSlots: {
        customRender: 'row'
      }
    },
    {
      title: 'AD账号',
      width: 100,
      sorter: true,
      dataIndex: 'account',
      scopedSlots: {
        customRender: 'row'
      }
    },
    {
      title: '姓名',
      width: 80,
      sorter: true,
      dataIndex: 'name',
      scopedSlots: {
        customRender: 'row'
      }
    },
    {
      title: '级别',
      width: 80,
      sorter: true,
      dataIndex: 'level',
      scopedSlots: {
        customRender: 'row'
      }
    },
    {
      title: '区域',
      width: 100,
      sorter: true,
      dataIndex: 'region',
      scopedSlots: {
        customRender: 'row'
      }
    },
    {
      title: '部门',
      width: 150,
      sorter: true,
      dataIndex: 'division',
      scopedSlots: {
        customRender: 'row'
      }
    },
    {
      title: '合同主体单位',
      width: 200,
      sorter: true,
      dataIndex: 'subject',
      scopedSlots: {
        customRender: 'row'
      }
    },
    {
      title: '合同到期日期',
      width: 140,
      sorter: true,
      dataIndex: 'dueDate',
      scopedSlots: {
        customRender: 'row'
      }
    },
    {
      title: '用人部门意见征询',
      width: 150,
      dataIndex: 'divisionOpinion',
      scopedSlots: {
        customRender: 'status'
      }
    },
    {
      title: '员工意见征询',
      width: 150,
      dataIndex: 'employeeOpinion',
      scopedSlots: {
        customRender: 'status'
      }
    },
    {
      title: '人力资源部门确认',
      width: 150,
      dataIndex: 'hrOpinion',
      scopedSlots: {
        customRender: 'status'
      }
    },
    {
      title: '合同签订',
      width: 150,
      dataIndex: 'contractSigning',
      scopedSlots: {
        customRender: 'status'
      }
    }
  ];

  departmentTreeData = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-1',
          key: '0-0-1'
        },
        {
          title: 'Child Node2',
          value: '0-0-2',
          key: '0-0-2'
        }
      ]
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1'
    }
  ];

  stepStatusOption = [
    { value: -1, label: '已终止' },
    { value: 0, label: '未开启' },
    { value: 1, label: '处理中' },
    { value: 2, label: '已完成' }
  ];

  get scroll() {
    let x = 0;
    this.columns.forEach(i => {
      x = x + i.width;
    });
    return { x };
  }
  // get stepStatusOption() {
  //   // 已完成、处理中、待开启、已终止
  //   let map: { value: number; label: string }[] = [];
  //   for (const n in StepStatus) {
  //     if (typeof StepStatus[n] === 'number') {
  //       map.push({ value: StepStatus[n] as number, label: n });
  //     }
  //   }
  //   return map;
  // }

  created(): void {
    this.request();
  }

  addOeration(): void {
    if (!this.columns.some(e => e.key === 'operation')) {
      this.columns.push({
        title: '操作',
        key: 'operation',
        width: 60,
        scopedSlots: { customRender: 'action' }
      });
    }
  }

  onTableChange(pagination: any, filters: any, sorter: any): void {
    this.pagination = pagination;
    this.sorter = sorter;
    this.request();
  }

  onUserSelect(id: string): void {
    this.selectUserId = id;
    // 请求新增
    console.log('TCL: ContractBoard -> onUserSelectModal -> this.selectUserId', this.selectUserId);
    this.selectUserId = '';
    this.request();
  }

  request(): void {
    const params = {
      'page-size': this.pagination.pageSize,
      'page-index': this.pagination.current - 1,
      'number': this.number,
      'name': this.name,
      'level': this.level,
      'department': this.department,
      'main': this.main,
      'adNumber': this.adNumber,
      'stepStatus': this.stepStatus,
      'stepAction': this.stepAction,
      'business': this.business
    };
    if (this.sorter && this.sorter.field) {
      const sorterParams = {
        sorterField: this.sorter.field,
        sorterOrder: this.sorter.order
      };
      Object.assign(params, sorterParams);
    }
    console.log(params);
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.pagination.total = 80;
      // this.addOeration();
      this.data = [
        {
          key: '1',
          number: 'XC0088948',
          account: 'yinguiyang',
          name: '张艺兴',
          level: 'B2',
          region: '总部',
          division: '人力资源中心',
          subject: '杭州万悦服务中心杭州万悦服务中心杭州万悦服务中心',
          dueDate: '2019-08-30',
          divisionOpinion: 0,
          employeeOpinion: 1,
          hrOpinion: 2,
          contractSigning: -1
        },
        {
          key: '2',
          number: 'XC0088948',
          account: 'yinguiyang',
          name: '张艺兴',
          level: 'B2',
          region: '总部',
          division: '人力资源中心',
          subject: '杭州万悦服务中心',
          dueDate: '2019-08-30',
          divisionOpinion: '',
          employeeOpinion: '',
          hrOpinion: '',
          contractSigning: ''
        },
        {
          key: '3',
          number: 'XC0088948',
          account: 'yinguiyang',
          name: '张艺兴',
          level: 'B2',
          region: '总部',
          division: '人力资源中心',
          subject: '杭州万悦服务中心',
          dueDate: '2019-08-30',
          divisionOpinion: '',
          employeeOpinion: '',
          hrOpinion: '',
          contractSigning: ''
        }
      ];
    }, 500);
  }

  render(): JSX.Element {
    return (
      <div class={styles.container}>
        <a-card title='劳动合同续签'>
          <div>
            <a-row gutter={8}>
              <a-col class={styles.col} span='4'>
                <a-input
                  placeholder='员工工号'
                  value={this.number}
                  on-input={(e: { target: { value: string } }) => (this.number = e.target.value)}
                />
              </a-col>
              <a-col class={styles.col} span='4'>
                <a-input
                  placeholder='姓名'
                  value={this.name}
                  on-input={(e: { target: { value: string } }) => (this.name = e.target.value)}
                />
              </a-col>
              <a-col class={styles.col} span='4'>
                <a-select
                  mode='multiple'
                  placeholder='职级'
                  style='width: 100%'
                  allowClear={true}
                  defaultValue={this.level}
                  on-change={(value: string[]) => (this.level = value)}
                  maxTagCount={1}
                >
                  <a-select-option value={0}>Jack</a-select-option>
                  <a-select-option value={1}>Lucy</a-select-option>
                  <a-select-option value={2}>yiminghe</a-select-option>
                </a-select>
              </a-col>
              <a-col class={styles.col} span='4'>
                <a-tree-select
                  style='width: 100%'
                  placeholder='部门'
                  treeData={this.departmentTreeData}
                  on-change={(value: string) => (this.department = value)}
                  treeDefaultExpandAll
                  allowClear={true}
                />
              </a-col>
              <a-col class={styles.col} span='4'>
                <contract-subject-select
                  key='contract-subject-select'
                  value={this.main}
                  on-input={(value: string) => (this.main = value)}
                />
              </a-col>
              <a-col class={styles.col} span='4'>
                <a-input
                  value={this.adNumber}
                  on-input={(e: { target: { value: string } }) => (this.adNumber = e.target.value)}
                  placeholder='AD账号'
                />
              </a-col>
            </a-row>
            <a-row gutter={8}>
              <a-col class={styles.col} span='4'>
                <a-select
                  placeholder='步骤操作'
                  style='width: 100%'
                  allowClear={true}
                  defaultValue={this.stepAction}
                  on-change={(value: number) => (this.stepAction = value)}
                >
                  <a-select-option value={0}>Jack</a-select-option>
                  <a-select-option value={1}>Lucy</a-select-option>
                  <a-select-option value={2}>yiminghe</a-select-option>
                </a-select>
              </a-col>
              <a-col class={styles.col} span='4'>
                <a-select
                  placeholder='步骤状态'
                  style='width: 100%'
                  allowClear={true}
                  defaultValue={this.stepStatus}
                  on-change={(value: number) => (this.stepStatus = value)}
                  options={this.stepStatusOption}
                />
              </a-col>
              <a-col class={styles.col} span='4'>
                <a-select
                  placeholder='业务状态'
                  style='width: 100%'
                  allowClear={true}
                  defaultValue={this.business}
                  on-change={(value: number) => (this.business = value)}
                >
                  <a-select-option value={0}>Jack</a-select-option>
                  <a-select-option value={1}>Lucy</a-select-option>
                  <a-select-option value={2}>yiminghe</a-select-option>
                </a-select>
              </a-col>
              <a-col class={styles.col} span='4'>
                <a-button type='primary' icon='search' loading={this.loading} on-click={this.request}>
                  Search
                </a-button>
              </a-col>
            </a-row>
          </div>
          <a-button class={styles.addButton} icon='plus' on-click={() => (this.userSelectModalVisible = true)}>
            新增
          </a-button>
          <a-button type='primary' icon='download'>
            导出
          </a-button>
          <a-table
            class={styles.table}
            columns={this.columns}
            dataSource={this.data}
            pagination={this.pagination}
            on-change={this.onTableChange}
            scroll={this.scroll}
            loading={this.loading}
            scopedSlots={{
              no: (cell: any, record: any, index: number) => {
                return [index + 1];
              },
              status: (status: StepStatus) => {
                return [<board-step status={status} />];
              },
              action: () => {
                return [<a href='javascript:;'>终止</a>];
              },
              row: (cell: any, record: any, index: number) => {
                return [
                  <div class={styles.ellipsis}>
                    <a-tooltip placement='topLeft' title={cell}>
                      <span>{cell}</span>
                    </a-tooltip>
                  </div>
                ];
              }
            }}
          />
        </a-card>
        <user-select-modal
          value={this.userSelectModalVisible}
          on-input={(val: boolean) => (this.userSelectModalVisible = val)}
          on-selected={this.onUserSelect}
        />
      </div>
    );
  }
}
