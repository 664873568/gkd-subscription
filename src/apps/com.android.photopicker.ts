import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.photopicker',
  name: '照片和视频',
  groups: [
    {
      key: 0,
      name: '选择照片',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="checkbox"][checked=false] - [vid="image"] < [desc="照片，2025年12月27日 13:34:9"]',
          ],
          activityIds: ['.hyper.HyperMainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="确认"] <<n * [vid="checkbox"][checked=true]'],
          activityIds: ['.hyper.HyperMainActivity'],
        },
      ],
    },
  ],
});
