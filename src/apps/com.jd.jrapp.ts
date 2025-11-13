import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    {
      key: 0,
      name: '跳转中-跳转中...',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 1000,
          matches: ['@[text="跳转中"] <<n * +n * >n [text="跳转中..."]'],
          snapshotUrls: [
            'https://i.gkd.li/i/23397450',
            'https://i.gkd.li/i/23424253',
          ],
        },
      ],
    },
  ],
});
