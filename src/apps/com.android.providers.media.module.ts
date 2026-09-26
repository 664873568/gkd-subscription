import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.providers.media.module',
  name: '媒体选择工具',
  groups: [
    {
      key: 0,
      name: '选择照片',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[vid="picker_tab_recyclerview"] > @[desc="拍摄于 2025年12月27日 下午1:34:09的照片"][clickable=true] > [vid="icon_check"]',
          ],
          activityIds: [
            'com.android.providers.media.photopicker.PhotoPickerActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[vid="picker_bottom_bar"] > [text="查看所选内容"][vid="button_view_selected"] > @[text="添加（1 项）"][vid="button_add"][clickable=true]',
          ],
          activityIds: [
            'com.android.providers.media.photopicker.PhotoPickerActivity',
          ],
        },
      ],
    },
  ],
});
