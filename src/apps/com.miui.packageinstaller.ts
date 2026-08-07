import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.packageinstaller',
  name: '应用包管理组件',
  groups: [
    {
      key: 0,
      name: '启动应用',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: ['[text$="正尝试安装应用"] >n @[text="取消"]'],
          activityIds: ['com.miui.packageInstaller.InstallStart'],
        },
      ],
    },
    {
      key: 1,
      name: '频繁安装应用',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: ['[text$="频繁安装应用"] >n @[text="取消"]'],
          activityIds: ['null'],
        },
      ],
    },
    {
      key: 2,
      name: '喜马拉雅-安装应用',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="允许"][clickable=true] < [vid="buttonPanel"] - ScrollView [text="是否允许「喜马拉雅」安装应用？"][vid="title"]',
          ],
          activityIds: [
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="second_button"] [vid="left_button_info_view"] [text="继续安装"][vid="left_button_msg"]',
          ],
          activityIds: [
            'com.miui.packageInstaller.NewInstallerPrepareActivity',
          ],
        },
        {
          preKeys: [0, 1],
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
