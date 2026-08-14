import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alimama.moon',
  name: '淘宝联盟',
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
            '@[text~="跳过 [0-9]"][clickable=true]',
          ],
          activityIds: ['.ui.splashad.SplashAdActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            'LinearLayout[clickable=true] > FrameLayout[clickable=true] + @RelativeLayout[clickable=true] > ImageView',
          ],
          activityIds: ['.ui.BottomNavActivity'],
        },
      ],
    },
  ],
});
