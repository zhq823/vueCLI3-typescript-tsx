import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
import { Pagination } from 'ant-design-vue';

import { User } from './types';
import styles from './component.user-select-modal.module.less';

@Component
export default class UserInput extends Vue {
  selectedRow!: User | null;
  selectedRowKeys: string[] = [];
  visible: boolean = false;
  keyword = '';
  loading = false;
  data: User[] = [];
  sorter: any;
  pagination: any = {
    total: 0,
    current: 1,
    pageSize: 10
  };
  columns = [
    {
      title: '员工工号',
      dataIndex: 'userNumber',
      key: 'userNumber',
      sorter: true
    },
    {
      title: 'AD账号',
      dataIndex: 'adNumber',
      sorter: true,
      key: 'adNumber'
    },
    {
      title: '姓名',
      dataIndex: 'name',
      sorter: true,
      key: 'name'
    },
    {
      title: '级别',
      dataIndex: 'level',
      sorter: true,
      key: 'level'
    },
    {
      title: '区域',
      dataIndex: 'region',
      sorter: true,
      key: 'region'
    },
    {
      title: '部门',
      dataIndex: 'department',
      sorter: true,
      key: 'department'
    },
    {
      title: '合同预计到期事件',
      dataIndex: 'expiration',
      sorter: true,
      key: 'expiration'
    }
  ];

  // get _visible(): boolean {
  //   if (this.value) {
  //     console.log('value', this.value);
  //     this.request();
  //   }
  //   return this.value;
  // }
  // set _visible(value: boolean) {
  //   this.visibleChange(value);
  // }

  @Watch('value') onChange(value: boolean, oldValue: boolean) {
    console.log('value', this.value);
    this.request();
    this.visible = value;
  }

  @Prop({ default: false }) value!: boolean;

  @Emit('input')
  visibleChange(n: boolean) {}

  @Emit('selected')
  idEmit(id: string) {}

  // created(): void {
  //   this.request();
  // }

  initData(): void {
    this.keyword = '';
    this.selectedRowKeys = [];
    this.selectedRow = null;
    this.sorter = null;
    this.pagination = {
      current: 1,
      total: 0,
      pageSize: 10
    };
  }

  onModalOk(): void {
    if (this.selectedRow && this.selectedRow.id) {
      this.idEmit(this.selectedRow.id);
      this.visible = false;
      this.visibleChange(false);
      this.initData();
    } else {
      this.$message.warning('请选择员工');
    }
  }

  onModalCancel(): void {
    this.visible = false;
    this.visibleChange(false);
    this.initData();
  }

  onTableChange(pagination: any, filters: any, sorter: any): void {
    this.pagination = pagination;
    this.sorter = sorter;
    this.request();
  }

  // 选中的员工
  onSelectChange(selectedRowKeys: string[], selectedRows: User[]): void {
    this.selectedRow = selectedRows[0];
    this.selectedRowKeys = selectedRowKeys;
  }

  request(): void {
    const params = {
      'page-size': this.pagination.pageSize,
      'page-index': this.pagination.current - 1,
      keyword: this.keyword
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
      this.data = [
        {
          userNumber: 1,
          adNumber: 1,
          id: '1',
          key: 1,
          name: 'John Brown',
          level: 32,
          region: 'New York No. 1 Lake Park',
          department: 'New York No. 1 Lake Park',
          expiration: '2019-05-28'
        },
        {
          userNumber: 2,
          adNumber: 2,
          id: '2',
          key: 2,
          name: 'Jim Green',
          level: 42,
          region: 'London No. 1 Lake Park',
          department: 'London No. 1 Lake Park',
          expiration: '2019-05-28'
        },
        {
          userNumber: 3,
          adNumber: 3,
          id: '3',
          key: 3,
          name: 'Joe Black',
          level: 32,
          region: 'Sidney No. 1 Lake Park',
          department: 'Sidney No. 1 Lake Park',
          expiration: '2019-05-28'
        }
      ];
    }, 500);
  }

  render(): JSX.Element {
    return (
      <div>
        <a-modal
          title="选择员工"
          width={1080}
          visible={this.visible}
          maskClosable={false}
          on-ok={this.onModalOk}
          on-cancel={this.onModalCancel}
          okText="确认"
          cancelText="取消"
        >
          <div class={styles.container}>
            <a-input-search
              class={styles.search}
              value={this.keyword}
              on-input={(e: { target: { value: string } }) => (this.keyword = e.target.value)}
              placeholder="请输入姓名/AD账号/员工工号"
              on-search={this.request}
              enterButton="Search"
              size="default"
            />
            <a-table
              loading={this.loading}
              columns={this.columns}
              dataSource={this.data}
              pagination={this.pagination}
              on-change={this.onTableChange}
              rowSelection={{ selectedRowKeys: this.selectedRowKeys, type: 'radio', onChange: this.onSelectChange }}
            />
          </div>
        </a-modal>
      </div>
    );
  }
}
