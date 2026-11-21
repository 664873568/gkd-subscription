import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.karaoke',
  name: '全民K歌',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '用户协议及隐私保护-同意',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="同意"][clickable=true] < LinearLayout < LinearLayout - [getChild(0).getChild(0).text="用户协议及隐私保护"] < LinearLayout < ViewGroup < [id="android:id/content"]',
          ],
          activityIds: ['.module.splash.ui.SplashBaseActivity', 'null'],
        },
      ],
    },
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
          anyMatches: [
            '@ViewGroup[clickable=true] > [text="跳过"][desc="跳过"]',
            '@LinearLayout[clickable=true] > [text="跳过"][desc="跳过"]',
          ],
          activityIds: [
            '.module.splash.ui.SplashBaseActivity',
            '.module.hippy.ui.HippyInstanceActivity',
          ],
        },
      ],
    },
  ],
});
