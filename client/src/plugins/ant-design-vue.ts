import Vue from 'vue';
import {
  LocaleProvider,
  Layout,
  Menu,
  Icon,
  Card,
  Breadcrumb,
  Avatar,
  Dropdown,
  Table,
  Divider,
  Tag,
  Pagination,
  Button,
  Row,
  Col,
  Input,
  Select,
  Radio,
  Modal,
  TreeSelect,
  Tooltip,
  message
} from 'ant-design-vue';
Vue.component(LocaleProvider.name, LocaleProvider);
Vue.component(Layout.name, Layout);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Layout.Footer.name, Layout.Footer);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Menu.ItemGroup.name, Menu.ItemGroup);
Vue.component(Menu.SubMenu.name, Menu.SubMenu);
Vue.component(Menu.Divider.name, Menu.Divider);
Vue.component(Icon.name, Icon);
Vue.component(Card.name, Card);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item);
Vue.component(Avatar.name, Avatar);
Vue.component(Dropdown.name, Dropdown);
Vue.component(Table.name, Table);
Vue.component(Divider.name, Divider);
Vue.component(Tag.name, Tag);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Input.name, Input);
Vue.component(Input.Search.name, Input.Search);
Vue.component(Select.name, Select);
Vue.component(Select.Option.name, Select.Option);
Vue.component(Radio.name, Radio);
Vue.component(Radio.Group.name, Radio.Group);
Vue.component(Modal.name, Modal);
Vue.component(TreeSelect.name, TreeSelect);
Vue.component(Tooltip.name, Tooltip);
Vue.prototype.$message = message;
