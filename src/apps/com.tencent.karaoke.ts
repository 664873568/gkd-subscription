import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.karaoke',
  name: '全民K歌',
  groups: [
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="跳过"][vid="njn"] <<n * [desc="广告"][vid="o3b"]',
            '@[text="跳过"][desc="跳过"] <<n * [desc="广告"][vid="c8e"]',
          ],
          activityIds: ['.module.splash.ui.SplashBaseActivity'],
        },
      ],
    },
  ],
});
