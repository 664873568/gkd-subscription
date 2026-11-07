import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sf.activity',
  name: '顺丰速运',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '顺丰隐私政策概要-同意',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="同意"] < @[desc="同意"][id="SytAppUseClauseViewAgreeBtn"][clickable=true] -n [text="顺丰隐私政策概要"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '顺丰速运”需要位置权限-不允许',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="不允许"] < @[desc="不允许"][clickable=true] -n [text="“顺丰速运”需要位置权限 "]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
  ],
});
