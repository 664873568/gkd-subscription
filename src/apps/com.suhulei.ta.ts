import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.suhulei.ta',
  name: 'JoyAI',
  groups: [
    //功能应用类
    {
      key: 0,
      name: 'JoyAI对话',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.main.activity.MainActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="按住说话"][vid="tvChatFrameDef"] - @[vid="ivChatLeft"][clickable=true] < [vid="baseLayout"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[vid="editText"][clickable=true] - [vid="ivChatLeft"] < [vid="baseLayout"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[vid="ivAddHeart"][clickable=true] - [vid="editText"] < [vid="baseLayout"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@[vid="ivChatRight"][clickable=true] - [vid="ivAddHeart"] - [vid="editText"] < [vid="baseLayout"]',
          ],
        },
      ],
    },
  ],
});
