import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    //看视频-.ads.ylh.YlhPortraitADActivity
    {
      key: 20,
      name: '看视频-×ylh',
      forcedTime: 60000,
      matchDelay: 1000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.ads.ylh.YlhPortraitADActivity'],
      rules: [
        {
          key: 0,
          name: '×-浏览页面*秒后即可获得奖励',
          actionDelay: 5000,
          matches: [
            '@ImageView[width=height][index=parent.childCount.minus(1)] <n LinearLayout < RelativeLayout < FrameLayout < FrameLayout <n LinearLayout <n [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '×-奖励将于*秒后发放',
          actionDelay: 5000,
          matches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout <n LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout <n [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '放弃奖励离开',
          matches: [
            '@[text="放弃奖励离开"][clickable=true] < LinearLayout <n LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '×-提前拿奖励',
          actionDelay: 5000,
          matches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout <n [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text="立即退出"] <n LinearLayout < FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout <n [id="android:id/content"]',
          ],
        },
        {
          key: 4,
          name: '立即退出',
          matches: [
            '@[text="立即退出"] <n LinearLayout < FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout <n [id="android:id/content"]',
          ],
        },
        {
          key: 5,
          name: '×-点击广告，即可获得奖励',
          actionDelay: 5000,
          matches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout <n FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout <n [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text="关闭广告"][clickable=true] <n FrameLayout <n FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout <n [id="android:id/content"]',
          ],
        },
        {
          key: 6,
          name: '关闭广告',
          matches: [
            '@[text="关闭广告"][clickable=true] <n FrameLayout <n FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout <n [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.baidu.mobads.sdk.api.MobRewardVideoActivity
    {
      key: 30,
      name: '看视频-跳过baidu',
      forcedTime: 60000,
      matchDelay: 1000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['com.baidu.mobads.sdk.api.MobRewardVideoActivity'],
      rules: [
        {
          key: 0,
          name: '跳过-去体验*秒可直接拿奖励',
          actionDelay: 5000,
          matches: [
            '@[text="跳过"][clickable=true] < RelativeLayout < RelativeLayout <n RelativeLayout <n [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '残忍离开',
          matches: [
            '@[text="残忍离开"][clickable=true] <n RelativeLayout < RelativeLayout <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.kwad.sdk.api.proxy.app.KsRewardVideoActivity
    {
      key: 40,
      name: '看视频-跳过kwad',
      forcedTime: 60000,
      matchDelay: 1000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
      rules: [
        {
          key: 0,
          name: '跳过-免费获取-*s',
          actionDelay: 5000,
          matches: [
            '@[text="跳过"][clickable=true] <n LinearLayout <n RelativeLayout <n FrameLayout <n [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '残忍离开',
          matches: [
            '@[text="残忍离开"][clickable=true] <n LinearLayout < FrameLayout < LinearLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '跳过-看*秒可直接拿奖励/*秒后可领取奖励',
          actionDelay: 5000,
          matches: [
            '@[text="跳过"][clickable=true] < ViewGroup < [desc="skip_button"] <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout <n [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text="坚持退出"][clickable=true] < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout <n [id="android:id/content"]',
            '@[text="残忍离开"][clickable=true] < ViewGroup < [desc="skip_button"] <n ViewGroup <n ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout <n [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '坚持退出',
          matches: [
            '@[text="坚持退出"][clickable=true] < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout <n [id="android:id/content"]',
          ],
        },
        {
          key: 4,
          name: '礼包-残忍离开',
          matches: [
            '@[text="残忍离开"][clickable=true] < ViewGroup < [desc="skip_button"] <n ViewGroup <n ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout <n [id="android:id/content"]',
          ],
        },
      ],
    },
    //首页广告类
    {
      key: 51,
      name: '弹窗广告-×',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[vid="main_frame_container"] > [vid="id_content"] > [vid="homepage_root_layout"] > [vid="home_swipe_refresh"]',
          ],
          activityIds: ['.webview.WebHybridActivity'],
        },
      ],
    },
  ],
});
