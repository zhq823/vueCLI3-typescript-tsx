import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { Pagination } from 'ant-design-vue';

import { ContractSubject } from './types';
import styles from './component.contract-subject-select.module.less';

@Component
export default class UserInput extends Vue {
  visible = false;
  inputValue = '';
  selectedRow!: ContractSubject | null;
  selectedRowKeys: string[] = [];
  company = '';
  description = '';
  loading = false;
  sorter: any;
  // pagination = new Pagination();
  pagination: any = {
    current: 1,
    total: 0,
    pageSize: 10
  };
  data: any[] = [];
  columns = [
    // {
    //   dataIndex: 'id',
    //   key: 'id',
    //   scopedSlots: { customRender: 'id' }
    // },
    {
      title: '法人公司',
      dataIndex: 'company',
      sorter: true,
      key: 'company'
    },
    {
      title: '描述',
      dataIndex: 'description',
      sorter: true,
      key: 'description'
    }
  ];

  @Prop({ default: '请选择合同主题单位' }) placeholder!: string;

  @Emit('input')
  idEmit(id: string) {}

  // created(): void {
  //   this.request();
  // }

  initData(): void {
    this.company = '';
    this.description = '';
    this.selectedRowKeys = [];
    this.selectedRow = null;
    this.sorter = undefined;
    this.pagination = {
      current: 1,
      total: 0,
      pageSize: 10
    };
  }

  showModal(): void {
    this.visible = true;
    this.request();
  }

  onClear(): void {
    this.inputValue = '';
    this.idEmit('');
  }

  onModalOk(): void {
    this.visible = false;
    if (this.selectedRow && this.selectedRow.id) {
      this.inputValue = this.selectedRow.company;
      this.idEmit(this.selectedRow.id);
    } else {
      this.$message.warning('请选择合同主题公司');
    }
    this.initData();
  }

  onModalCancel(): void {
    this.visible = false;
    this.initData();
  }

  onTableChange(pagination: any, filters: any, sorter: any): void {
    this.pagination = pagination;
    this.sorter = sorter;
    this.request();
  }

  // 选中的主题单位
  onSelectChange(selectedRowKeys: string[], selectedRows: ContractSubject[]): void {
    this.selectedRow = selectedRows[0];
    this.selectedRowKeys = selectedRowKeys;
  }

  request(): void {
    const params = {
      'page-size': this.pagination.pageSize,
      'page-index': this.pagination.current - 1,
      'company': this.company,
      'description': this.description
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
          id: '1',
          key: 1,
          company: 'company01',
          description: 'New York No. 1 Lake Park'
        },
        {
          id: '2',
          key: 2,
          company: 'company02',
          description: 'London No. 1 Lake Park'
        },
        {
          id: '3',
          key: 3,
          company: 'company03',
          description: 'Sidney No. 1 Lake Park'
        }
      ];
    }, 500);
  }

  render(): JSX.Element {
    return (
      <div class={styles.input}>
        <a-input placeholder={this.placeholder} type='text' value={this.inputValue} on-click={this.showModal}>
          {this.inputValue ? <a-icon class={styles.pointer} slot='addonAfter' on-click={this.onClear} type='close-circle' /> : ''}
        </a-input>
        <a-modal
          title='查询合同主题单位'
          width={700}
          visible={this.visible}
          maskClosable={false}
          okText='确认'
          cancelText='取消'
          on-ok={this.onModalOk}
          on-cancel={this.onModalCancel}
          destroyOnClose={true}
        >
          <a-row gutter={8} class={styles.search}>
            <a-col class={styles.col} span='6'>
              <a-input
                placeholder='法人公司'
                value={this.company}
                on-input={(e: { target: { value: string } }) => (this.company = e.target.value)}
              />
            </a-col>
            <a-col class={styles.col} span='6'>
              <a-input
                placeholder='描述'
                value={this.description}
                on-input={(e: { target: { value: string } }) => (this.description = e.target.value)}
              />
            </a-col>
            <a-col class={styles.col} span='4'>
              <a-button type='primary' icon='search' loading={this.loading} on-click={this.request}>
                Search
              </a-button>
            </a-col>
          </a-row>

          <a-table
            loading={this.loading}
            columns={this.columns}
            dataSource={this.data}
            pagination={this.pagination}
            on-change={this.onTableChange}
            rowSelection={{ selectedRowKeys: this.selectedRowKeys, type: 'radio', onChange: this.onSelectChange }}
          />
        </a-modal>
      </div>
    );
  }
}
