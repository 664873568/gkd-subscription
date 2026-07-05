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
          matches: ['@[text="取消"] <<n * [text$="正尝试安装应用"]'],
          activityIds: ['com.miui.packageInstaller.InstallStart'],
        },
      ],
    },
    {
      key: 1,
      name: '安装应用',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          anyMatches: [
            '@[text="禁止安装"] <<n * [text^="是否允许"]',
            '@[text="安装包扫描中，请稍候"] <<n * [vid="main_content"]',
          ],
          activityIds: ['com.miui.packageInstaller.NewInstallerPrepareActivity',],
        },
      ],
    },
    {
      key: 2,
      name: '安装应用',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 15000,
          matches: ['@[text="取消"] <<n * [text$="频繁安装应用"]'],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
