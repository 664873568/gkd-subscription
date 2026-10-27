import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jifen.qukan',
  name: '趣头条',
  groups: [
    {
      key: 0,
      name: '限时福利-直接签到-看视频/做任务',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="直接签到"][vid="tv_sign_derect"] < [vid="ll_bootom"] - @[vid="tv_countdown"][clickable=true] <n RelativeLayout < RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.jifen.qkbase.main.MainActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '欢迎使用趣头条-同意',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="欢迎使用趣头条"][vid="tv_title"] +n @[text="同意"][vid="tv_positive"][clickable=true] + [text="不同意"][vid="tv_negative"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '[vid="img_splash_ad"] + @[vid="tv_splash_ad_skip"][clickable=true]',
            '[vid="img_splash_ad"] >n @[desc="CLOSE_AD"][vid="fanti_ad_count_and_skip_container_ex"][clickable=true] > [vid="fanti_ad_count_and_skip_container"] > [text="跳过"][vid="fanti_ad_txt_skip"] + [text~="[0-9]"][vid="fanti_ad_txt_count_down"]',
          ],
          activityIds: ['com.jifen.qkbase.main.MainActivity', 'null'],
        },
      ],
    },
  ],
});
