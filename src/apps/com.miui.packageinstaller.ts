import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.packageinstaller',
  name: '应用包管理组件',
  groups: [
    {
      key: 0,
      name: '频繁安装',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
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
      name: '禁止安装',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@[text="禁止安装"][clickable=true] - [text="允许"] < [vid="buttonPanel"] - * [vid="app_title"]',
          ],
          activityIds: [
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '允许安装',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '[text="禁止安装"] - @[text="允许"][clickable=true] < [vid="buttonPanel"] - * [text="百度网盘" || text="飞猪旅行" || text="喜马拉雅"][vid="app_title"]',
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
