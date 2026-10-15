import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    //天猫超市
    {
      key: 0,
      name: '天猫超市-好运签-做任务',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.taobao.themis.container.app.TMSActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[id="chaoshi-header-titlebar"] +n @View[clickable=true] > [text="领任务"]',
          ],
          excludeMatches: [
            '[id="chaoshi-header-titlebar"] +n @View[clickable=true] > [text="领奖励"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[id="chaoshi-header-titlebar"] +n @[desc="任务已完成 快去领奖励"][clickable=true] > [text="任务已完成"] +n [text="快去领奖励"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[id="chaoshi-header-titlebar"] +n @View[clickable=true] > [text="领奖励"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[id="chaoshi-header-titlebar"] +n @[text="O1CN01UKt34q1bWga0WWl5L_!!6000000003473-2-tps-80-80.png_90x90q50.jpg_"][clickable=true] <n * + [id="panel-content"] >n [text="已领奖"]',
          ],
          excludeMatches: [
            '[id="chaoshi-header-titlebar"] +n @View[clickable=true] > [text="领任务" || text="领奖励"]',
          ],
        },
      ],
    },
    //薅羊毛 赚话费
    {
      key: 10,
      name: '薅羊毛 赚话费',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.taobao.themis.container.app.TMSActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="薅羊毛 赚话费"] >n @[text="O1CN01VQmkCg23mXLrMyROe_!!6000000007298-2-tps-144-144"]',
          ],
        },
        {
          key: 2,
          matches: [
            '[text="薅羊毛 赚话费"] >n @View[clickable=true] > [text="装满啦"]',
          ],
        },
        {
          key: 3,
          matches: [
            '[text="薅羊毛 赚话费"] >n @[id="feedBubble"][clickable=true] > View > [text="签到奖励"]',
          ],
          excludeMatches: [
            '[text="薅羊毛 赚话费"] >n [getChild(1).text="薅羊毛赚话费"] +n @[text="立即领取"][clickable=true]',
            '[text="薅羊毛 赚话费"] >n @View[clickable=true] > [text="装满啦"]',
          ],
        },
        {
          key: 4,
          matches: [
            '[text="薅羊毛 赚话费"] >n @View[clickable=true] > View > [text="商品点击"]',
          ],
          excludeMatches: [
            '[text="薅羊毛 赚话费"] >n @[id="feedBubble"][clickable=true] > View > [text="签到奖励"]',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          matches: [
            '[text="薅羊毛 赚话费"] >n [getChild(1).text="薅羊毛赚话费"] +n @[text="立即领取"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '薅羊毛 赚话费-点击5个商品',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.taobao.android.detail.alittdetail.TTDetailActivity',
        'com.taobao.themis.container.app.TMSActivity',
      ],
      rules: [
        {
          preKeys: [1, 2, 3, 4, 5],
          key: 0,
          matches: [
            '[vid="actionbar_layout"] >n [text="ꁽ"][desc="返回，按钮"]',
          ],
        },
        {
          key: 1,
          matches: [
            '[id="shopping-waterfall"] > [id="tabsId"] + View >4 View[index=0] > View[index=0]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          matches: [
            '[id="shopping-waterfall"] > [id="tabsId"] + View >4 View[index=1] > View[index=0]',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          matches: [
            '[id="shopping-waterfall"] > [id="tabsId"] + View >4 View[index=0] > View[index=1]',
          ],
        },
        {
          preKeys: [0],
          key: 4,
          matches: [
            '[id="shopping-waterfall"] > [id="tabsId"] + View >4 View[index=1] > View[index=1]',
          ],
        },
        {
          preKeys: [0],
          key: 5,
          matches: [
            '[id="shopping-waterfall"] > [id="tabsId"] + View >4 View[index=0] > View[index=2]',
          ],
        },
        {
          preKeys: [0],
          key: 6,
          matches: [
            '[text="任务已完成，500饲料已到账"] -n * [id="feedBubble"] +2 View',
          ],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[desc="关闭按钮"][clickable=true] - [vid="poplayer_native_state_id"]',
          ],
          activityIds: ['com.taobao.tao.welcome.Welcome'],
        },
      ],
    },
    {
      key: 51,
      name: '广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[vid="ll_close"][clickable=true] > [text="跳过"][vid="tv_close"] + [text~="[0-9]"][vid="tv_countdown"]',
          ],
          activityIds: ['com.taobao.themis.container.app.TMSActivity'],
        },
      ],
    },
  ],
});
