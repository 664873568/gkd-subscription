import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.kuwo.player',
  name: '酷我音乐',
  groups: [
    //首页广告类
    {
      key: 50,
      name: '首页-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[text="跳过"][vid="qq_skip_button"]',
            '@[desc="跳过"][vid="btnSkip"]',
          ],
          activityIds: ['.activities.EntryActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '召回弹窗',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@TextView <<n [text="召回弹窗"]'],
          activityIds: ['.activities.MainActivity'],
        },
      ],
    },
  ],
});
