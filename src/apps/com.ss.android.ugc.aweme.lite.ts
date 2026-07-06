import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    //发财金
    {
      key: 0,
      name: '发财金已到账-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 20000,
          matches: ['@[text="返回按钮"] <<n * [vid="ao7"]'],
          activityIds: ['com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '发财金已到账-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 16000,
          matches: ['@[text="a03431aadab482a12d9056e814f367cb.png~tplv-49obo7mizy-png75"] <<n * [vid="ao7"]'],
          activityIds: ['com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
  ],
});
