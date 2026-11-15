import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '安全服务/手机管家',
  groups: [
    //请用指纹解锁
    {
      key: 0,
      name: '请用指纹解锁',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: [
            '[vid="face_lock_error_tv"] - @[text="请用指纹解锁"][vid="face_lock_tip"] - [vid="app_icon"]',
          ],
          activityIds: ['com.miui.applicationlock.AppLockActivity'],
        },
      ],
    },
    //启动应用
    {
      key: 10,
      name: '启动应用-拒绝',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 16000,
          matches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] - * [text="启动应用"][vid="permission_group_title"]',
          ],
          excludeMatches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] - * [text~=".*微信.*"][vid="event_title"] - [text="启动应用"][vid="permission_group_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 11,
      name: '启动应用-拒绝-微信',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 20000,
          matches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] - * [text~=".*微信.*"][vid="event_title"] - [text="启动应用"][vid="permission_group_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 12,
      name: '启动应用-拒绝-京东/金融',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 3000,
          matches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] - * [text~="京东.*"][vid="event_title"] - [text="启动应用"][vid="permission_group_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 13,
      name: '启动应用-本次允许-京东金融',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: [
            '@[text="本次允许"][clickable=true] <n [vid="buttonPanel"] - * [text~="京东金融.*(JoyAI|QQ阅读|京东健康|微信).*"][vid="event_title"] - [text="启动应用"][vid="permission_group_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 14,
      name: '启动应用-拒绝-抖音',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] - * [text~="抖音.*"][vid="event_title"] - [text="启动应用"][vid="permission_group_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 15,
      name: '启动应用-拒绝-支付宝',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] - * [text~="支付宝.*淘宝.*"][vid="event_title"] - [text="启动应用"][vid="permission_group_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 16,
      name: '启动应用-拒绝-中国移动',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] - * [text~=".*中国移动.*"][vid="event_title"] - [text="启动应用"][vid="permission_group_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 17,
      name: '启动应用-拒绝-一刻相册',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] - * [text~=".*一刻相册.*微信.*"][vid="event_title"] - [text="启动应用"][vid="permission_group_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '获取已安装的应用信息-拒绝',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="拒绝"][clickable=true] < [vid="buttonPanel"] -n * [text~="是否允许“.*”获取已安装的应用信息"][vid="alertTitle"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 41,
      name: '存储空间严重不足-取消',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="取消"][clickable=true] < [vid="buttonPanel"] -n * [text="存储空间严重不足"][vid="alertTitle"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 42,
      name: '电量已低于-知道了',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="知道了"][clickable=true] < [vid="buttonPanel"] -n * [text^="电量已低于"][vid="title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
  ],
});
