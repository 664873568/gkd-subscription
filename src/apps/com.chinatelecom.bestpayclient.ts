import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinatelecom.bestpayclient',
  name: '翼支付',
  groups: [
    {
      key: 0,
      name: '看视频-跳过↑',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'click',
          actionDelay: 1000,
          matches: [
            '@[text*="我要" || text*="体验" || text="立即前往"] <<n * -n * >n [text$="s" || text*="秒"] + [text="｜跳过"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23450800',
            'https://i.gkd.li/i/23451395',
            'https://i.gkd.li/i/23454789',
            'https://i.gkd.li/i/23455257',
            'https://i.gkd.li/i/23471191',
            'https://i.gkd.li/i/23471258',
            'https://i.gkd.li/i/23492681',
            'https://i.gkd.li/i/23471460',
            'https://i.gkd.li/i/23471469',
            'https://i.gkd.li/i/23493652',
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
      key: 1,
      name: '看视频-跳过↓',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'click',
          actionDelay: 1000,
          matches: [
            '@[text*="体验" || text="再试一次"] <<n * +n * >n [text$="s" || text*="秒"] + [text="｜跳过"]',
            ],
          snapshotUrls: [
            'https://i.gkd.li/i/23493737',
            'https://i.gkd.li/i/23493789',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '看视频-跳过-恭喜获得特权',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'click',
          actionDelay: 1000,
          matches: ['@[text*="我要"] <<n * +n * >n [text="跳过"]'],
          snapshotUrls: ['https://i.gkd.li/i/23471487'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '看视频-跳过-拿奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: ['@[text="拿奖励" || text="再试一次"] <<n * +n * >n [text$="拿奖励"]'],
          snapshotUrls: ['https://i.gkd.li/i/23475883'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '看视频-跳过-礼盒',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'click',
          actionDelay: 1000,
          matches: [
            '@[text="跳过"] <<n * -n * >n [desc="gift_box"] > ImageView',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23476056',
            'https://i.gkd.li/i/23476161',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '看视频-跳过-礼盒-关闭按钮',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'click',
          actionDelay: 1000,
          matches: [
            '@ImageView <<n [desc="close_button"] -n * <n * -n * >n [desc="gift_box"] > ImageView',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23476430'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '看视频-跳过-立即下载',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'click',
          actionDelay: 1000,
          matches: [
            '@ImageView + [text="应用详情"] <<n * +n *[text^="立即下载"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23455109'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '看视频-跳过-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'click',
          actionDelay: 1000,
          matches: [
            '@[text="｜跳过"] - [text="奖励已领取"]',
          ],
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
      key: 8,
      name: '看视频-去领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'click',
          actionDelay: 1000,
          matches: [
            '@[text="去领奖"] <<n * -n * >n [text="svg%3e"]',
            ],
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
    {
      key: 9,
      name: '看视频-去领奖-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'click',
          actionDelay: 1000,
          matches: [
            '@RelativeLayout <<n * + * >n [text="奖励已领取"] - [text="svg%3e"]',
            ],
          snapshotUrls: [
            'https://i.gkd.li/i/23494046',
            ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            ],
        },
      ],
    },
    {
      key: 10,
      name: '看视频-恭喜您获得金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'click',
          actionDelay: 1000,
          matches: [
            '@[text^="看视频再得"] -2 [text^="+"]',
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
    {
      key: 11,
      name: '看视频-跳过-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'click',
          actionDelay: 1000,
          matches: [
            '@ImageView <<n * -n * >n [text="反馈"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23493264',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
  ],
});
