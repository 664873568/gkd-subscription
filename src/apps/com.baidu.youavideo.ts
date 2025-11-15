import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.youavideo',
  name: '一刻相册',
  groups: [
    //任务中心
    {
      key: 0,
      name: '任务中心-点击赚积分',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: ['@[text="点击赚积分"] <<n [text="任务中心"]'],
          snapshotUrls: ['https://i.gkd.li/i/23451354'],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 1,
      name: '看视频-跳过↑',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: [
            '@[text^="我要" || text$="体验" || text="立即前往" || text="再试一次"][width=711 && height=183 || width>300 && height=72 || width=339 && height=114] <<n * -n * >n [text$="跳过"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23545855', //去体验-左下[width=711 && height=183]
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '看视频-跳过↓',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: [
            '@[text^="我要" || text$="体验" || text="拿奖励" || text="再试一次" || text="去领奖励"][width=819 && height=177 || width=711 && height=183 || width=732 && height=162 || width=180 && height=66 || width>300 && height=72] <<n * +n * >n [text$="跳过" || text$="拿奖励"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23546133', //我要直接拿奖励[width>300 && height=72]
            'https://i.gkd.li/i/23546519', //返回继续体验[width>300 && height=72]
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '看视频-跳过-立即下载',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
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
      key: 5,
      name: '看视频-跳过-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
          snapshotUrls: ['https://i.gkd.li/i/23546556'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '看视频-去领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: ['@[text="去领奖"] <<n * -n * >n [text="svg%3e"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/23547463',
            'https://i.gkd.li/i/23547568',
            'https://i.gkd.li/i/23547641',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '看视频-去领奖-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 1000,
          matches: [
            '@RelativeLayout <<n * + * >n [text="奖励已领取"] - [text="svg%3e"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23547705',
            'https://i.gkd.li/i/23547759',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '看视频-继续',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: ['@[text="继续观看"] <<n [text="任务中心"]'],
          snapshotUrls: ['https://i.gkd.li/i/23545964'],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '看视频-退出提示',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: ['@[text="去领取奖励"] -n * >n [text="温馨提示"]'],
          snapshotUrls: ['https://i.gkd.li/i/23547170'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '看视频-跳过-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: ['@ImageView <<n * -n * >n [text="反馈"]'],
          snapshotUrls: ['https://i.gkd.li/i/23545935'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '看视频-跳转快应用-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 500,
          matches: ['@ImageView + ImageView +n [text="反馈"]'],
          snapshotUrls: ['https://i.gkd.li/i/23547990'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.activity.base.TTWebPageActivity',
            'null',
          ],
        },
      ],
    },
    //首页功能类
    {
      key: 110,
      name: '开始安全备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          anyMatches: [
            '@[text="开始安全备份"] <<n [vid="cl_open_auto_backup"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23558701'],
          activityIds: ['.home.view.HomeActivity'],
        },
      ],
    },
    {
      key: 111,
      name: '开启自定义备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: ['@[vid="iv_close"] +n [text="开启自定义备份"]'],
          snapshotUrls: ['https://i.gkd.li/i/23558728'],
          activityIds: ['.home.view.HomeActivity'],
        },
      ],
    },
    {
      key: 112,
      name: '立即升级',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: ['@[vid="img_close"] -n * >n [text="立即升级"]'],
          snapshotUrls: ['https://i.gkd.li/i/23558731'],
          activityIds: ['.home.view.HomeActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 120,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[vid="dialog_home_pop_close_button"] + [vid="img_thumbnail"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23558690',
            'https://i.gkd.li/i/23558692',
          ],
          activityIds: ['.home.view.HomeActivity'],
        },
      ],
    },
    //会员支付类
    {
      key: 130,
      name: '随心卡会员,',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@TextView -n * >n [text="立即使用"] <<n [text="随心卡会员"]',
            '@Image -n * >n [text="立即开通"] <<n [text="随心卡会员"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23558756', //立即使用
            'https://i.gkd.li/i/23558692', //立即开通
          ],
          activityIds: ['.home.view.HomeActivity'],
        },
      ],
    },
  ],
});
