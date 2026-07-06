import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.providers.media.module',
  name: '媒体文件选择器',
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
          matches: ['@[vid="icon_check"] - CardView < [desc="拍摄于 2025年12月27日 下午1:34:09的照片"]'],
          activityIds: ['com.android.providers.media.photopicker.PhotoPickerActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text^="添加"] <n [vid="picker_bottom_bar"]'],
          activityIds: ['com.android.providers.media.photopicker.PhotoPickerActivity'],
        },
      ],
    },
  ],
});
