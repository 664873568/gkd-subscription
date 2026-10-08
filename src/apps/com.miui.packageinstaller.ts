import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.packageinstaller',
  name: '应用包管理组件',
  groups: [
    {
      key: 0,
      name: '频繁安装应用',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="取消"][clickable=true] - [text="验证"] < [vid="buttonPanel"] - * [text$="频繁安装应用"][vid="title"]',
          ],
          activityIds: [
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '百度网盘-禁止安装',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="禁止安装"][clickable=true] <n [vid="buttonPanel"] - * [text="百度网盘"][vid="app_title"]',
          ],
          activityIds: [
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '飞猪旅行-禁止安装',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 10000,
          matches: [
            '@[text="禁止安装"][clickable=true] <n [vid="buttonPanel"] - * [text="飞猪旅行"][vid="app_title"]',
          ],
          activityIds: [
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '喜马拉雅-安装应用',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="允许"][clickable=true] < [vid="buttonPanel"] - * [text="酷我音乐"][vid="app_title"]',
          ],
          activityIds: [
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="second_button"][clickable=true] > [vid="left_button_info_view"] > [text="继续安装"][vid="left_button_msg"]',
          ],
          activityIds: [
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: ['@[text="完成"][vid="start_button"][clickable=true]'],
          activityIds: [
            'com.miui.packageInstaller.ui.normalmode.InstallProgressActivity',
          ],
        },
      ],
    },
  ],
});
