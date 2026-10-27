import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '欢迎使用番茄免费小说-同意并继续',
      forcedTime: 600000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[getChild(0).text="欢迎使用番茄免费小说"] + * @[text="同意并继续"][clickable=true]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
