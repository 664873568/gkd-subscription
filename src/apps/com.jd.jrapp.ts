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
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '黑色星期五-领券抢',
      matchRoot: true,
      forcedTime: 1000,
      actionMaximum: 100,
      actionCd: 100,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: ['@[text="领券抢"] <<n [text="黑色星期五"] >n [text="15枚无抗鲜蛋"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/23548893',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
      ],
    },
  ],
});
