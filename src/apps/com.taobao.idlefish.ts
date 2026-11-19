import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 0,
      name: '看广告过关',
      forcedTime: 60000,
      matchDelay: 1000,
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          position: {
            left: 'width * 0.75',
            top: 'height * 0.15',
          },
          matches: [
            'View < FrameLayout < FrameLayout <n [vid="h5_web_content"] < RelativeLayout < [vid="xriver_fragment_container"]',
          ],
          activityIds: ['com.mpaas.mriver.xriver.activity.XRiverActivity'],
        },
      ],
    },
    //看视频-com.kwad.sdk.api.proxy.app.KsRewardVideoActivity
    {
      key: 20,
      name: '看视频-×',
      forcedTime: 60000,
      matchDelay: 1000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.ads.ylh.YlhPortraitADActivity'],
      rules: [
        {
          key: 0,
          name: '×-提前拿奖励-玩*秒小游戏',
          matches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '立即退出',
          matches: [
            '@[text="立即退出"] <n LinearLayout < FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout <n [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.kwad.sdk.api.proxy.app.KsRewardVideoActivity
    {
      key: 30,
      name: '看视频-跳过',
      forcedTime: 60000,
      matchDelay: 1000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
      rules: [
        {
          key: 0,
          name: '跳过-免费获取-*s',
          matches: [
            '@[text="跳过"][clickable=true] <n LinearLayout <n RelativeLayout <n FrameLayout <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '残忍离开',
          matches: [
            '@[text="残忍离开"][clickable=true] <n LinearLayout < FrameLayout < LinearLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '跳过-看*秒可直接拿奖励',
          matches: [
            '@[text="跳过"][clickable=true] < ViewGroup < [desc="skip_button"] <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout <n [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text="坚持退出"][clickable=true] < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          name: '坚持退出',
          matches: [
            '@[text="坚持退出"][clickable=true] < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout <n [id="android:id/content"]',
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
