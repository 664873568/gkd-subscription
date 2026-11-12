import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lbe.security.miui',
  name: '权限管理服务',
  groups: [
    {
      key: 0,
      name: '发送通知-拒绝',
      forcedTime: 600000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="拒绝"][clickable=true] < [vid="buttonPanel"] <n [vid="parentPanel"] < [vid="dialog_root_view"] < [id="android:id/content"]',
          ],
          activityIds: [
            'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
            'null',
          ],
        },
      ],
    },
  ],
});
