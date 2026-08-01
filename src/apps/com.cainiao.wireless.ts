import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
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
            '[text~="[0-9]"][vid="fanti_ad_txt_count_down"] - [text="跳过"][vid="fanti_ad_txt_skip"] < [vid="fanti_ad_count_and_skip_container"] < @[desc="CLOSE_AD"][vid="fanti_ad_count_and_skip_container_ex"]',
          ],
          activityIds: ['.homepage.view.activity.AdsActivity'],
        },
      ],
    },
  ],
});
