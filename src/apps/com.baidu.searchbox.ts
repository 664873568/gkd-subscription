import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.searchbox',
  name: '百度',
  groups: [
    {
      key: 0,
      name: '浏览好物-返回领取',
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['[text="搜有红包 - 百度"] >n @[text="立即领取"]'],
          activityIds: ['com.baidu.browser.search.LightSearchActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '明星列表-完成并进入',
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['[text="明星列表"] >n @[text="完成并进入送花页面"]'],
          activityIds: ['com.baidu.browser.search.LightSearchActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '升级-关闭',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[desc="关闭"][clickable=true] - * [text="升级"] >n [text="下载并安装"]',
          ],
          activityIds: ['.update.UpdateDialogActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@RelativeLayout[clickable=true] > LinearLayout > [text="跳过"] + [text~="0[0-9]"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
  ],
});
