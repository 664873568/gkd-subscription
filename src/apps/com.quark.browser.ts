import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.quark.browser',
  name: '夸克',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '个人信息保护指引-同意并继续',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="个人信息保护指引"] + ScrollView + LinearLayout > [text="不同意"] + @[text="同意并继续"][clickable=true]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
