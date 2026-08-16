import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mtt',
  name: 'QQ浏览器',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '立即更新-以后再说',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="以后再说"][vid="qb_dialog_second_button"][clickable=true] - [text="立即更新"][vid="qb_dialog_first_button"]',
          ],
        },
      ],
    },
    {
      key: 41,
      name: '设为默认-下次再说',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="下次再说"][vid="qb_dialog_second_button"][clickable=true] - [text="设为默认"][vid="qb_dialog_first_button"]',
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
          anyMatches: [
            '@View[clickable=true] + * + * >n [vid="contentTv"]',
            '@LinearLayout[clickable=true] > [text="跳过"] + [text~="[0-9]"]',
          ],
        },
      ],
    },
  ],
});
