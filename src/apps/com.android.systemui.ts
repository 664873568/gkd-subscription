import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.systemui',
  name: '系统界面',
  groups: [
    {
      key: 0,
      name: '未获取到屏幕画面 请手动替换截图',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches: [
            '@[vid="keyguard message_area_container"] <n [vid="legacy_window_root"]',
          ],
        },
      ],
    },
  ],
});
