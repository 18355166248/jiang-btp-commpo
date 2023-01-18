import Caigouguanli from '../assets/icons/Caigouguanli';
import Churukuguanli from '../assets/icons/Churukuguanli';
import Daorudaochuguanli from '../assets/icons/Daorudaochuguanli';
import DingdanMoren from '../assets/icons/DingdanMoren';
import DingdanXuanzhong from '../assets/icons/DingdanXuanzhong';
import Gongyinglianfatuihuoguanli from '../assets/icons/Gongyinglianfatuihuoguanli';
import GuanliMoren from '../assets/icons/GuanliMoren';
import GuanliXuanzhong from '../assets/icons/GuanliXuanzhong';
import Jichuxinxiguanli from '../assets/icons/Jichuxinxiguanli';
import Keyongliangguanli from '../assets/icons/Keyongliangguanli';
import KucunMoren from '../assets/icons/KucunMoren';
import Kucunshezhi from '../assets/icons/Kucunshezhi';
import Kucuntiaozheng from '../assets/icons/Kucuntiaozheng';
import KucunXuanzhong from '../assets/icons/KucunXuanzhong';
import Qudaodingdanguanli from '../assets/icons/Qudaodingdanguanli';
import Qudaoshangpinguanli from '../assets/icons/Qudaoshangpinguanli';
import ShangpinMoren from '../assets/icons/ShangpinMoren';
import ShangpinXuanzhong from '../assets/icons/ShangpinXuanzhong';
import Shenhezhongxin from '../assets/icons/Shenhezhongxin';
import Wuliaoguanli from '../assets/icons/Wuliaoguanli';

export const items = [
  {
    label: '商品',
    key: 'mail',
    icon: ShangpinMoren,
    activeIcon: ShangpinXuanzhong,
    children: [
      {
        label: '渠道商品管理',
        key: 'mail-1',
        icon: Qudaoshangpinguanli,
        children: [
          {
            label: '商品物料映射管理',
            key: '2',
          },
        ],
      },
      {
        label: '物料管理',
        key: 'mail-2',
        icon: Wuliaoguanli,
        children: [
          {
            label: '物料管理',
            key: '3',
          },
          {
            label: '物料类目管理',
            key: '4',
          },
        ],
      },
    ],
  },
  {
    label: '订单',
    key: 'SubMenu',
    icon: DingdanMoren,
    activeIcon: DingdanXuanzhong,
    children: [
      {
        label: '渠道订单管理',
        key: 'setting:1',
        icon: Qudaodingdanguanli,
        children: [
          {
            label: '渠道订单管理',
            key: 'setting:2',
          },
          {
            label: '渠道售后单管理',
            key: 'setting:3',
          },
        ],
      },
      {
        label: '供应链发退货管理',
        key: 'SubMenu-2',
        icon: Gongyinglianfatuihuoguanli,
        children: [
          {
            label: '供应链发货单管理',
            key: 'SubMenu-2-1',
          },
          {
            label: '供应链退货单管理',
            key: 'SubMenu-2-2',
          },
        ],
      },
    ],
  },
  {
    label: '库存',
    key: 'stock',
    icon: KucunMoren,
    activeIcon: KucunXuanzhong,
    children: [
      {
        label: '库存设置',
        key: 'stock-1',
        icon: Kucunshezhi,
        children: [
          {
            label: '期初余额',
            key: '6',
          },
        ],
      },
      {
        label: '库存调整',
        key: 'stock-2',
        icon: Kucuntiaozheng,
        children: [
          {
            label: '形态转换',
            key: 'stock-2-1',
          },
          {
            label: '调拨管理',
            key: 'stock-2-3',
          },
          {
            label: '其他出入库',
            key: 'stock-2-4',
          },
        ],
      },
      {
        label: '采购管理',
        key: 'stock-3',
        icon: Caigouguanli,
        children: [
          {
            label: '采购单管理',
            key: 'stock-3-1',
          },
          {
            label: '采购退货单管理',
            key: 'stock-3-3',
          },
          {
            label: '采购价格管理',
            key: 'stock-3-4',
          },
        ],
      },
      {
        label: '可用量管理',
        key: 'stock-4',
        icon: Keyongliangguanli,
        children: [
          {
            label: '可用量管理',
            key: 'stock-4-1',
          },
        ],
      },
      {
        label: '出入库管理',
        key: 'stock-5',
        icon: Churukuguanli,
        children: [
          {
            label: '出库单管理',
            key: 'stock-5-1',
          },
          {
            label: '入库单管理',
            key: 'stock-5-3',
          },
        ],
      },
    ],
  },
  {
    label: '管理',
    key: 'manage',
    icon: GuanliMoren,
    activeIcon: GuanliXuanzhong,
    children: [
      {
        label: '基础信息管理',
        key: 'manage-1',
        icon: Jichuxinxiguanli,
        children: [
          {
            label: '店铺信息管理',
            key: 'manage-1-1',
          },
          {
            label: '仓库信息管理',
            key: 'manage-1-2',
          },
          {
            label: '供应商信息管理',
            key: 'manage-1-3',
          },
          {
            label: '客户信息管理',
            key: 'manage-1-4',
          },
          {
            label: '客户销售关系管理',
            key: 'manage-1-5',
          },
          {
            label: '单位信息管理',
            key: 'manage-1-6',
          },
        ],
      },
      {
        label: '审核中心',
        key: 'manage-4',
        icon: Shenhezhongxin,
        children: [
          {
            label: '物料审核管理',
            key: 'manage-4-1',
          },
          {
            label: '期初余额审核管理',
            key: 'manage-4-3',
          },
        ],
      },
      {
        label: '导入导出管理',
        key: 'manage-5',
        icon: Daorudaochuguanli,
        children: [
          {
            label: '批量导入查询',
            key: 'manage-5-1',
          },
          {
            label: '批量导出查询',
            key: 'manage-5-3',
          },
        ],
      },
    ],
  },
];
