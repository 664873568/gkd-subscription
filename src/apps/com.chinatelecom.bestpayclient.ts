import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinatelecom.bestpayclient',
  name: '翼支付',
  groups: [{
      key: 0,
      name: '赚金币-首页',
      activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
      snapshotUrls: 'https://i.gkd.li/i/23451354',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
       {
        key: 0,
        activityIds: '',
        matches: '',
        snapshotUrls: '',
       },
       {
        key: 1,
        activityIds: '',
        matches: '',
        snapshotUrls: '',
       },
      ],
    },{
      key: 1,
      name: '看视频-跳过',
      activityIds: 'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
       {
        key: 1,
        matches: '@[text="我要加速"] < * -n [text="广告时长"] - [text*="秒"] - [text="去看10秒抵"]',
        snapshotUrls: 'https://i.gkd.li/i/23450800',
       },
       {
        key: 2,
        matches: '@[text="我要直接领奖"] < * -n [text="可直接领奖"] - [text*="秒"] - [text="再看"] - [text="恭喜加速成功"]',
        snapshotUrls: 'https://i.gkd.li/i/23451395',
       },
       {
        key: 3,
        matches: '[text="｜跳过"] - [text="奖励已领取"] <<n * +n * >n [text="恭喜加速成功"]',
        snapshotUrls: 'https://i.gkd.li/i/23451963',
       },
      ],
    },],
});
