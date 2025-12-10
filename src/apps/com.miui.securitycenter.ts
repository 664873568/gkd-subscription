import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '安全服务', //手机管家
  groups: [
    {
      key: 0,
      name: '启动应用',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 16000,
          matches: ['@[text="启动应用"] + [text$="是否允许？"]'],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 1,
      name: '请用指纹解锁',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 16000,
          matches: ['@[text="请用指纹解锁"] + [text^="用于打开"]'],
          activityIds: ['com.miui.applicationlock.AppLockActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '使用密码验证',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 16000,
          matches: ['@[text="使用密码验证"] <<n * [vid="icon1"]'],
          activityIds: ['com.miui.applicationlock.ConfirmAccessControl'],
        },
      ],
    },
  ],
});
