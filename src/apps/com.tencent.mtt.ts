import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mtt',
  name: 'QQ浏览器',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '立即更新-以后再说',
      forcedTime: 60000,
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
      forcedTime: 60000,
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
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@View[clickable=true] + * + * >n [vid="contentTv"]',
            '[text~="[0-9]"] - [text="跳过"] < @LinearLayout[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 51,
      name: '首页广告-关闭广告',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: [
            '[text^="关闭广告"][vid="text_view"] < [vid="mask_root_view"] < [vid="common_close_button"] < @[vid="common_close_container"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[vid="foldLayout"] - @[vid="closeIv"][clickable=true] <n [vid="expandLayout"] < [vid="pendantLayout"]',
          ],
        },
      ],
    },
  ],
});
