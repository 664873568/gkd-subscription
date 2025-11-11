import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    {
      key: 1,
      name: '跳转中-跳转中-<',
      matchRoot: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          name: '跳转中-<',
          activityIds: '.bm.common.web.ui.WebActivity',
          matches: '@Button < * + [text="跳转中"]',
          snapshotUrls: 'https://i.gkd.li/i/23397450',
        },
        {
          key: 1,
          name: '跳转中-×',
          activityIds: '.bm.common.web.ui.WebActivity',
          matches: '@Button <2 * + [text="跳转中"]',
          snapshotUrls: 'https://i.gkd.li/i/23424253',
        },
      ],
    },
  ],
});
