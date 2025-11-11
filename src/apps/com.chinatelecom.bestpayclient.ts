import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinatelecom.bestpayclient',
  name: '翼支付',
  groups: [
    {
      key: 1,
      name: '看视频-跳过-西瓜视频',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text*="我要" || text*="体验"] < * -n [text*="广告" || text*="可"] - [text*="秒"] - [text*="看" || text="去浏览"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23450800',
            'https://i.gkd.li/i/23451395',
            'https://i.gkd.li/i/23454789',
            'https://i.gkd.li/i/23455257',
            'https://i.gkd.li/i/23471191',
            'https://i.gkd.li/i/23471258',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '看视频-跳过-京东',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="我要加速领奖" || text="返回继续体验"] -2 [text="get_reward_btn_bg"] <<n * -n * >n [text="get_accelerate_chance"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23471460',
            'https://i.gkd.li/i/23471469',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
        {
          key: 1,
          matches: [
            '@[text="我要免看本次广告"] < * -n * > [text="恭喜获得特权"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23471487'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '看视频-跳过-立即下载',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
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
      key: 4,
      name: '看视频-跳过-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="｜跳过"] - [text="奖励已领取"]'],
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
      key: 5,
      name: '看视频-再得*金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text^="看视频再得"] -2 [text^="+"]'],
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
  ],
});
