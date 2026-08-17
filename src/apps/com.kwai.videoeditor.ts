import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kwai.videoeditor',
  name: '快影',
  groups: [
    //看视频-com.byazt.re.Stub_Standard_Portrait_Activity
    {
      key: 20,
      name: '看视频-全屏广告-×cbrs',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          anyMatches: [
            '@ImageView < * - * [text="反馈"] <<n * + * [text="点击或上滑打开"] + * [text="跳转至详情页或第三方应用"]',
            '@ImageView <<n *[childCount=1] - * [text="点击到落地页或三方APP"] <<n * + * [text="关闭悬浮球可继续浏览应用"]', //美团-惊喜等你拿
          ],
          activityIds: ['com.byazt.re.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity
    {
      key: 30,
      name: '看视频-全屏广告-×cbso',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          anyMatches: [
            '@Image <<n * -n * [text="反馈"] <<n * + * [text="轻触或上滑"]',
            '@Image <<n * - * [text="点击到落地页或三方APP"] <<n * + * [text="关闭悬浮球可继续浏览应用"]',
            '@ImageView < * - * [text="反馈"] <<n * + * [text="点击或上滑打开"] + * [text="跳转至详情页或第三方应用"]',
            '@Image < View < View - * [text="反馈"] <<n * + * [text="点击或上滑打开"] + * [text="跳转至详情页或第三方应用"]',
            '@ImageView < ViewGroup < ViewGroup < ViewGroup - * [text="点击到落地页或三方APP"] <<n * + * [text="关闭悬浮球可继续浏览应用"]', //苏宁易购-汽车之家-惊喜等你拿
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          ],
        },
      ],
    },
    //看视频-com.kwai.krn.KrnKyActivity
    {
      key: 40,
      name: '看视频-全屏广告-×ckkk',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView[clickable=true] + LinearLayout + RelativeLayout + ImageView + ImageView',
            '@ImageView < FrameLayout <n * + * [text="上滑/点击了解更多内容"] < * + [text="跳转微信"]',
            'ImageView < @LinearLayout[clickable=true] -n * > [text~="[0-9]+s"] <<n * - * [text="反馈"]', //苏宁易购-立即下载
          ],
          activityIds: ['com.kwai.krn.KrnKyActivity'],
        },
      ],
    },
    //看视频-com.octopus.ad.AdActivity
    {
      key: 50,
      name: '看视频-全屏广告-×coaa',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text~="跳过 [0-9]"][clickable=true]',
            '@ImageView[clickable=true] - [text="反馈"] - ImageView < FrameLayout',
          ],
          activityIds: ['com.octopus.ad.AdActivity'],
        },
      ],
    },
    //看视频-.commercialization.splash.GeneralAdSplashActivity
    {
      key: 498,
      name: '首页广告-跳过csg',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[text~="跳过 [0-9]"]',
            '[text~="[0-9]"] - @[text="跳过"] < * +2 ImageView',
          ],
          activityIds: ['.commercialization.splash.GeneralAdSplashActivity'],
        },
      ],
    },
    {
      key: 499,
      name: '首页广告-×csg',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@ImageView[clickable=true] - * [text="广告"]', //点击跳转第三方页面
            '@ImageView < FrameLayout <2 * + * [text="上滑/点击了解更多内容"]',
            '[text="扭动或点击查看详情"] <n * + * LinearLayout + FrameLayout > @ImageView',
            '@ImageView < FrameLayout - * [text="上滑/点击了解更多内容"] < * + [text="跳转微信"]',
            '@ImageView < FrameLayout - * [text="上滑/点击了解更多内容"] < * + [text="下载或打开第三方应用"]',
            '@ImageView < FrameLayout[childCount=1] <n * +n * [text="上滑/点击了解更多内容"] < * + [text="打开或下载第三方应用"]', //元宝
          ],
          activityIds: [
            '.commercialization.splash.GeneralAdSplashActivity',
            'null',
          ],
        },
      ],
    },
    //首页广告类
    {
      key: 500,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text~="跳过 [0-9]"]'],
          activityIds: ['.activity.MainActivity'],
        },
      ],
    },
  ],
});
