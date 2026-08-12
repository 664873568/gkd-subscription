import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yueme.itv',
  name: '小翼管家',
  groups: [
    //翼豆乐园
    {
      key: 0,
      name: '翼豆乐园-去领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            'View > TextView[clickable=true] + @View[clickable=true] > [text="去领取"]',
          ],
          activityIds: [
            'com.yueme.itvhome.ui.activity.base.FragmentContainerActivity',
          ],
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
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[vid="rl_pangle_ad"] >n @View[clickable=true] + TextView[clickable=true]',
          ],
          activityIds: [
            'com.chinatelecom.smarthome.module.mainpage.ui.CoverActivity',
          ],
        },
      ],
    },
    {
      key: 51,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[vid="img_close"][clickable=true] - [vid="content_layout"] > [vid="adv_click"]',
          ],
          activityIds: [
            'com.chinatelecom.smarthome.module.mainpage.ui.SmartHomeActivity',
          ],
        },
      ],
    },
  ],
});
