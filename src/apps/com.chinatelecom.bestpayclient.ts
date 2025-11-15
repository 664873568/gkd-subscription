import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinatelecom.bestpayclient',
  name: '翼支付',
  groups: [
    //赚金币
    {
      key: 0,
      name: '赚金币-开宝箱得金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="开宝箱得金币"] <<n [text="赚金币"]'],
          snapshotUrls: ['https://i.gkd.li/i/23451354'],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 1,
      name: '赚金币-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: ['[text="赚金币"] >n [text^="+"] - Image'],
          snapshotUrls: ['https://i.gkd.li/i/23496647'],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 2,
      name: '赚金币-看视频再得',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="赚金币"] >n [text^="+"] - Image +3 [text^="看视频再得"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23453300',
            'https://i.gkd.li/i/23471446',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.alipay.mobile.nebulacore.ui.H5Activity',
          ],
        },
      ],
    },
    //玩游戏
    {
      key: 3,
      name: '玩游戏-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView[vid="cll_back"] - WebView > WebView'],
          snapshotUrls: [
            'https://i.gkd.li/i/23497142',
            'https://i.gkd.li/i/23497241',
          ],
          activityIds: ['com.cqyh.cqadsdk.activity.GameWebActivity'],
        },
      ],
    },
    //看视频
    {
      key: 10,
      name: '看视频-跳过↑',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text^="我要"] <<n * -n * >n [text$="跳过"]',
            '@[text$="体验"] <<n * -n * >n [text$="跳过"]',
            '@[text^="我要"] <<n * -n * >n [text$="跳过"]',
            '@[text$="体验"] <<n * -n * >n [text$="跳过"]',
            '@[text="立即前往"] <<n * -n * >n [text$="跳过"]',
            '@[text="再试一次"] <<n * -n * >n [text$="跳过"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23450800', //我要加速-右上
            'https://i.gkd.li/i/23454789', //我要加速-左上
            'https://i.gkd.li/i/23471258', //我要直接领奖-右上
            'https://i.gkd.li/i/23451395', //我要直接领奖-右上
            'https://i.gkd.li/i/23455257', //返回继续体验-左上
            'https://i.gkd.li/i/23471191', //返回继续体验-右上
            'https://i.gkd.li/i/23471460', //我要加速领奖-右上
            'https://i.gkd.li/i/23471469', //返回继续体验-右上
            'https://i.gkd.li/i/23492681', //立即前往-右上
            'https://i.gkd.li/i/23493652', //我要加速-左下
            'https://i.gkd.li/i/23496451', //再试一次-右上
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
            'com.alipay.mobile.nebulacore.ui.H5Activity',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '看视频-跳过↓',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text^="我要"] <<n * +n * >n [text$="跳过"]',
            '@[text$="体验"] <<n * +n * >n [text$="跳过"]',
            '@[text="再试一次"] <<n * +n * >n [text$="跳过"]',
            '@[text="去领奖励"] <<n * +n * >n [text$="跳过"]',
            '@[text="拿奖励"] <<n * +n * >n [text$="拿奖励"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23471487', //我要免看本次广告
            'https://i.gkd.li/i/23493737', //去体验
            'https://i.gkd.li/i/23493789', //再试一次
            'https://i.gkd.li/i/23475883', //拿奖励-拿奖励
            'https://i.gkd.li/i/23494451', //拿奖励
            'https://i.gkd.li/i/23518467', //再试一次
            'https://i.gkd.li/i/23520300', //去领奖励
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 111,
      name: '看视频-跳过↓-体验',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="可提前20秒领奖"] -n @[text$="体验"] <<n * +n * >n [text$="跳过"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23518146', //去体验
            'https://i.gkd.li/i/23518156', //返回继续体验
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '看视频-跳过-×-应用详情+立即下载',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 15000,
          matches: [
            '@ImageView + [text="应用详情"] <<n * +n *[text="立即下载"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23455109'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '看视频-跳过-继续观看',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="继续观看"] <<n * +n * >n [text="跳过"]'],
          snapshotUrls: ['https://i.gkd.li/i/23497387'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 14,
      name: '看视频-长按-×', //长按无法实现
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView <<n * -n * >n [text="长按加速视频 获取奖励"]', //@[desc^="reward-playback-speed_playSpeed"] >n [text="长按加速视频 获取奖励"]
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23497570',
            'https://i.gkd.li/i/23498065',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 15,
      name: '看视频-去领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="去领奖"] <<n * -n * >n [text="svg%3e"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/23494021',
            'https://i.gkd.li/i/23494040',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    //看视频-返回|跳过|关闭
    {
      key: 16,
      name: '看视频-去领奖-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@RelativeLayout <<n * + * >n [text="奖励已领取"] - [text="svg%3e"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23494046'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '看视频-跳过-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 100,
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/23451963',
            'https://i.gkd.li/i/23471408',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '看视频-礼包-领取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 100,
          matches: [
            '@[text="跳过" || desc="close_button"] <<n * -n * >n [desc="gift_box"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23476056', //跳过-继续体验
            'https://i.gkd.li/i/23476161', //跳过
            'https://i.gkd.li/i/23476430', //免费获取>×
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 19,
      name: '看视频-跳过-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView <<n * -n * >n [text="反馈"]'],
          snapshotUrls: ['https://i.gkd.li/i/23493264'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    //看视频-二级
    {
      key: 20,
      name: '看视频-广告-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 10000,
          matches: ['@RelativeLayout <<n * +n * >n TextView[text=null]'],
          snapshotUrls: ['https://i.gkd.li/i/23497953'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-广告-<+×1',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      activityIds: ['com.kwad.sdk.api.proxy.app.AdWebViewActivity'],
      rules: [
        {
          key: 0,
          action: 'back',
          matches: [
            '@[id$="/ksad_kwad_web_navi_back"] + [id$="/ksad_kwad_web_navi_close"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23498284'],
        },
        {
          preKeys: 0,
          key: 1,
          matches: ['@[text="残忍离开"] +n [text="留下看看"]'],
          snapshotUrls: ['https://i.gkd.li/i/23498460'],
        },
      ],
    },
    {
      key: 22,
      name: '看视频-广告-<+×2',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 10000,
          matches: [
            '@ImageView[width=42 && height=42] <<n [id$="/ksad_js_reward_card"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23544564'],
        },
        {
          preKeys: 0,
          key: 1,
          matches: ['@[text="残忍离开"] <n * +n [text="留下看看"]'],
          snapshotUrls: ['https://i.gkd.li/i/23544750'],
        },
      ],
    },
    {
      key: 23,
      name: '看视频-跳转快应用-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 10000,
          matches: ['@ImageView + ImageView +n [text="反馈"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/23496919',
            'https://i.gkd.li/i/23496926',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity',
            'null',
          ],
        },
      ],
    },
  ],
});
