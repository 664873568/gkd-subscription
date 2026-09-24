import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.suhulei.ta',
  name: 'JoyAI',
  groups: [
    //功能应用类
    {
      key: 0,
      name: '登录JoyAI并对话|去JoyAI APP且当日对话',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.main.activity.MainActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[vid="baseLayout"] > @[vid="ivChatLeft"][clickable=true] + [text="按住说话"][vid="tvChatFrameDef"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['[vid="baseLayout"] > @[vid="editText"][clickable=true]'],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[vid="baseLayout"] > [vid="editText"] + @[vid="ivAddHeart"][clickable=true]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[vid="baseLayout"] > [vid="editText"] + [vid="ivAddHeart"] + @[vid="ivChatRight"][clickable=true]',
          ],
        },
      ],
    },
  ],
});
