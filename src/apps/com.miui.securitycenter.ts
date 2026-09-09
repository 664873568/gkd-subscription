import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '安全服务/手机管家',
  groups: [
    {
      key: 0,
      name: '请用指纹解锁',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 15000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[text="请用指纹解锁"] - [vid="app_icon"]'],
          activityIds: ['com.miui.applicationlock.AppLockActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '请用密码或指纹解锁',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 15000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[text="请用密码或指纹解锁"] - [vid="app_icon"]'],
          activityIds: ['com.miui.applicationlock.ConfirmAccessControl'],
        },
      ],
    },
    {
      key: 2,
      name: '使用密码验证',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 15000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[text="使用密码验证"] <<n * [vid="icon1"]'],
          activityIds: ['com.miui.applicationlock.ConfirmAccessControl'],
        },
      ],
    },
    {
      key: 3,
      name: '请用指纹解锁-用于*',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '[text~="用于打开小米云服务|用于打开快应用服务框架|用于打开浏览器"][vid="face_lock_error_tv"] - @[text="请用指纹解锁"][vid="face_lock_tip"] - [vid="app_icon"]',
          ],
          activityIds: ['com.miui.applicationlock.AppLockActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '请用指纹解锁-用于打开微信',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 15000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'back',
          matches: [
            '[text="用于打开微信"][vid="face_lock_error_tv"] - @[text="请用指纹解锁"][vid="face_lock_tip"] - [vid="app_icon"]',
          ],
          activityIds: ['com.miui.applicationlock.AppLockActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 1000,
          matches: [
            '[text="用于打开微信"][vid="face_lock_error_tv"] - @[text="请用指纹解锁"][vid="face_lock_tip"] - [vid="app_icon"]',
          ],
          activityIds: ['com.miui.applicationlock.AppLockActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '启动应用-拒绝',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 15000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="拒绝"] <n * - * [text="启动应用"][vid="permission_group_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '启动应用-拒绝-京东/金融',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 3000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="拒绝"] <n * - * [text~="京东.*"][vid="event_title"] - [text="启动应用"][vid="permission_group_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '启动应用-本次允许-京东金融',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 2000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="本次允许"] <n * - * [text~="京东金融.*(JoyAI|QQ阅读|京东健康).*"][vid="event_title"] - [text="启动应用"][vid="permission_group_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '启动应用-拒绝-抖音',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 3000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="拒绝"] <n * - * [text~="抖音.*"][vid="event_title"] - [text="启动应用"][vid="permission_group_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '启动应用-拒绝-支付宝',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 3000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="拒绝"] <n * - * [text~="支付宝.*淘宝.*"][vid="event_title"] - [text="启动应用"][vid="permission_group_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity'],
        },
      ],
    },
    {
      key: 10,
      name: '启动应用-拒绝-中国移动',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="拒绝"] <n * - * [text~=".*中国移动.*"][vid="event_title"] - [text="启动应用"][vid="permission_group_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '获取已安装的应用信息-拒绝',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="拒绝"][clickable=true] < [vid="buttonPanel"] -n [vid="topPanel"] > [text~="是否允许“.*”获取已安装的应用信息"][vid="alertTitle"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
    {
      key: 41,
      name: '存储空间严重不足-取消',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="取消"][clickable=true] < [vid="buttonPanel"] -n [vid="topPanel"] > [text="存储空间严重不足"][vid="alertTitle"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
