import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.market',
  name: '应用商店',
  groups: [
    {
      key: 0,
      name: '小米应用商店-关闭',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 5000,
          matches: [
            '@[desc="关闭"][vid="btnClose"][clickable=true] <n [vid="rootView"] < [vid="parentLayout"] < [vid="fl_content"]',
          ],
          activityIds: ['.ui.detail.AppDetailCardActivity'],
        },
        {
          key: 1,
          actionDelay: 5000,
          matches: [
            '@[text="取消"][vid="btn_cancel"][clickable=true] -n [text="已安装完成"][vid="tv_title"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
    {
      key: 1,
      name: '空间不足',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="知道了"][clickable=true] < [vid="buttonPanel"] - * [text="您的手机存储空间不足，暂时无法安装应用，请清理系统后再尝试安装。"][vid="message"]',
          ],
          activityIds: ['.ui.TranslucentActivityInner'],
        },
        {
          key: 1,
          matches: [
            '@[text="取消"][vid="cancel_btn"][clickable=true] < LinearLayout <n RelativeLayout -n [text="空间不足"]',
          ],
          activityIds: ['.ui.TranslucentActivityInner'],
        },
        {
          key: 2,
          matches: [
            '@[text="知道了"][clickable=true] < [vid="buttonPanel"] - * [text="您的手机系统存储空间不足，暂时无法安装应用，请卸载不常用应用后再尝试安装。"][vid="message"]',
          ],
          activityIds: ['.ui.UpdateListActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '隐私政策更新-同意',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="隐私政策更新"][vid="tv_title"] +n [text="退出应用"][vid="tv_negative"] + @[text="同意"][vid="tv_positive"][clickable=true]',
          ],
          activityIds: ['.business_ui.main.MarketTabActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-关闭',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[desc="关闭"][vid="iv_close"]'],
          activityIds: [
            '.business_ui.main.MarketTabActivity',
            '.ui.UpdateListActivity',
          ],
        },
      ],
    },
  ],
});
