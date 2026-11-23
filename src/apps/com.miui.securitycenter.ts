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
      resetMatch: 'activity',
      activityIds: ['com.miui.applicationlock.AppLockActivity'],
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@[text="请用指纹解锁"][vid="face_lock_tip"] <n LinearLayout < ScrollView < ViewGroup <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0,1],
          key: 1,
          action: 'back',
          matches: [
            '@[text="页面失去焦点无法进行生物识别"][vid="lost_focus_subtitle"] - [text="点击页面以继续识别"][vid="lost_focus_title"] < LinearLayout < ScrollView < FrameLayout <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0,1,2],
          key: 2,
          action: 'back',
          matches: [
            '@[text="请用指纹解锁"][vid="face_lock_tip"] <n LinearLayout < ScrollView < ViewGroup <n [id="android:id/content"]',
          ],
        },
      ],
    },
    //启动应用-拒绝
    {
      key: 10,
      name: '启动应用-拒绝',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] - * [text="启动应用"][vid="permission_group_title"]',
          ],
          excludeMatches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] - * [text="启动应用"][vid="permission_group_title"] + [text~=".*微信.*"][vid="event_title"]',
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
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] - * [text="启动应用"][vid="permission_group_title"] + [text~=".*微信.*"][vid="event_title"]',
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
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] - * [text="启动应用"][vid="permission_group_title"] + [text~="京东.*"][vid="event_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 13,
      name: '启动应用-拒绝-抖音',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] - * [text="启动应用"][vid="permission_group_title"] + [text~="抖音.*"][vid="event_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 14,
      name: '启动应用-拒绝-支付宝',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] - * [text="启动应用"][vid="permission_group_title"] + [text~="支付宝.*淘宝.*"][vid="event_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 15,
      name: '启动应用-拒绝-中国移动',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] - * [text="启动应用"][vid="permission_group_title"] + [text~=".*中国移动.*"][vid="event_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 16,
      name: '启动应用-拒绝-一刻相册',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] - * [text="启动应用"][vid="permission_group_title"] + [text~=".*一刻相册.*微信.*"][vid="event_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    //启动应用-本次允许
    {
      key: 20,
      name: '启动应用-本次允许-京东金融',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="本次允许"][clickable=true] <n [vid="buttonPanel"] - * [text="启动应用"][vid="permission_group_title"] + [text~="京东金融.*(JoyAI|QQ阅读|京东健康|微信).*"][vid="event_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 21,
      name: '启动应用-本次允许-飞猪旅行',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="本次允许"][clickable=true] <n [vid="buttonPanel"] - * [text="启动应用"][vid="permission_group_title"] + [text~="飞猪旅行.*(京东|淘宝|闲鱼).*"][vid="event_title"]',
          ],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity', 'null'],
        },
      ],
    },
    {
      key: 22,
      name: '启动应用-本次允许-支付宝',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="本次允许"][clickable=true] <n [vid="buttonPanel"] - * [text="启动应用"][vid="permission_group_title"] + [text~="支付宝.*淘宝.*"][vid="event_title"]',
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
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="取消"][clickable=true] < [vid="buttonPanel"] -n * [text="存储空间严重不足"][vid="alertTitle"]',
          ],
          activityIds: [
            'null',
            'com.miui.wakepath.ui.ConfirmStartActivity',
            'com.miui.cleanmaster.LowMemoryIntentDispatchActivity',
          ],
        },
      ],
    },
    {
      key: 42,
      name: '电量已低于-知道了',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
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
