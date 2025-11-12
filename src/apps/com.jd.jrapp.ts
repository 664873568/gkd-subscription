import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    {
      key: 1,
      name: '跳转中-跳转中-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'click',
          actionDelay: 1000,
          name: '跳转中-<',
          matches: '@Button < * + [text="跳转中"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23397450',
            ],
          activityIds: [
            '.bm.common.web.ui.WebActivity',
            ],
        },
        {
          key: 1,
          action: 'click',
          actionDelay: 1000,
          name: '跳转中-×',
          matches: '@Button <2 * + [text="跳转中"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23424253',
            ],
          activityIds: [
            '.bm.common.web.ui.WebActivity',
            ],
        },
      ],
    },
  ],
});
