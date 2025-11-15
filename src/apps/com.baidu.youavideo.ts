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
          matches: ['@[text="点击赚积分"] <<n [text="任务中心"]'],
          snapshotUrls: ['https://i.gkd.li/i/23558929'],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '任务中心-下次再来',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: ['@[text="下次再来"] <<n [text="任务中心"]'],
          snapshotUrls: ['https://i.gkd.li/i/23545964'],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '任务中心-继续观看',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="继续观看"] <<n [text="任务中心"]'],
          snapshotUrls: ['https://i.gkd.li/i/23545964'],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '任务中心-关闭签到提醒',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="cancel"] <<n [vid="bottom_two_button_layout"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/23559445', //取消
            'https://i.gkd.li/i/23559446', //狠心关闭
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '任务中心-赚积分-进入观看',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          matches: ['@[text="赚积分"] <<n [text="任务中心"]'],
          snapshotUrls: ['https://i.gkd.li/i/23558929'],
        },
        {
          preKeys: 0,
          key: 1,
          matches: ['@[text="进入观看"] <<n [text="任务中心"]'],
          snapshotUrls: ['https://i.gkd.li/i/23559557'],
        },
      ],
    },
    {
      key: 5,
      name: '任务中心-天天看激励视频-去完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: [
            '@[text="去完成"] -n [text="天天看激励视频"] <n * +n * >n [text="明日再来"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23559557', //取消
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
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
            '@[text="立即前往"] <<n * -n * >n [text$="跳过"]',
            '@[text="再试一次"] <<n * -n * >n [text$="跳过"]',
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
            '@[text="立即领取"] <<n * +n * >n [text$="跳过"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23546133', //我要直接拿奖励
            'https://i.gkd.li/i/23559841', //我要直接拿奖励
            'https://i.gkd.li/i/23546519', //返回继续体验
            'https://i.gkd.li/i/23559366', //立即领取
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
            '.splash.ui.CoveredSplashAdvertiseActivity',
          ],
        },
      ],
    },
    {//*暂未适配*//
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
            'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '看视频-跳过-×-应用详情+立即下载',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView + [text="应用详情"] <<n * +n *[text="立即下载"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23559186'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {//*暂未适配*//
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
    {//*暂未适配*//
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
            'https://i.gkd.li/i/23547463',
            'https://i.gkd.li/i/23547568',
            'https://i.gkd.li/i/23547641',
            'https://i.gkd.li/i/23559530',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
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
      key: 17,
      name: '看视频-跳过-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
          snapshotUrls: ['https://i.gkd.li/i/23546556'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {//*暂未适配*//
      key: 18,
      name: '看视频-礼包-领取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
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
          snapshotUrls: ['https://i.gkd.li/i/23545935'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '看视频-温馨提示-去领取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="去领取奖励"] -n * >n [text="温馨提示"]'],
          snapshotUrls: ['https://i.gkd.li/i/23547170'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    //看视频-二级
    {
      key: 31,
      name: '看视频-跳转快应用-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
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
