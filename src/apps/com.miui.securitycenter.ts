import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '安全服务/手机管家',
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
          matches: [
            '@[text="启动应用"][vid="permission_group_title"] + [text$="是否允许？"][vid="event_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 1,
      name: '启动应用-京东金融',
      matchRoot: true,
      actionMaximum: 2,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@[text="启动应用"][vid="permission_group_title"] + [text^="京东金融"][vid="event_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 2,
      name: '请用指纹解锁',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 16000,
          matches: ['@[text="请用指纹解锁"] - [vid="app_icon"]'],
          activityIds: ['com.miui.applicationlock.AppLockActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '请用密码或指纹解锁',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 16000,
          matches: ['@[text="请用密码或指纹解锁"] - [vid="app_icon"]'],
          activityIds: ['com.miui.applicationlock.ConfirmAccessControl'],
        },
      ],
    },
    {
      key: 4,
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
    {
      key: 5,
      name: '请用指纹解锁-用于打开微信',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 16000,
          matches: [
            '[text="用于打开微信"][vid="face_lock_error_tv"] - @[text="请用指纹解锁"][vid="face_lock_tip"] - [vid="app_icon"]',
          ],
          activityIds: ['com.miui.applicationlock.AppLockActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: [
            '[text="用于打开微信"][vid="face_lock_error_tv"] - @[text="请用指纹解锁"][vid="face_lock_tip"] - [vid="app_icon"]',
          ],
          activityIds: ['com.miui.applicationlock.AppLockActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          action: 'back',
          matches: [
            '[text="用于打开微信"][vid="face_lock_error_tv"] - @[text="请用指纹解锁"][vid="face_lock_tip"] - [vid="app_icon"]',
          ],
          activityIds: ['com.miui.applicationlock.AppLockActivity'],
        },
      ],
    },
  ],
});
