import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.personalassistant',
  name: '智能助理',
  groups: [
    {
      key: 0,
      name: '自定义小组件-京东金融-添加到桌面',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="添加到桌面"][vid="pa_picker_detail_bt_add_to_home"][clickable=true] <n * < * - * > [getChild(0).text="自定义小组件"]  - * [text="京东金融"][vid="picker_detail_app_name"]',
          ],
          activityIds: ['.picker.business.home.pages.PickerHomeActivity'],
        },
      ],
    },
  ],
});
