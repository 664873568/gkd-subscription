import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.map',
  name: '腾讯地图',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '用户协议-同意并继续',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[vid="ll_btns"] > [text="不同意"][vid="reconsider_btn"] + @[text="同意并继续"][vid="sure_btn"][clickable=true]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
