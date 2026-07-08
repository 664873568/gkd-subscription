import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.youavideo',
  name: '一刻相册',
  groups: [
    //任务中心
    {
      key: 0,
      name: '任务中心',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="title_bar_pm_task_center"] - [vid="title_bar_pm_task_center_white"] ',
          ],
          activityIds: ['.home.view.HomeActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '任务中心-点击赚积分',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="点击赚积分"] <<n * -n * > [text="体验清理截图"] +n [text="已完成"] <<n [text="任务中心"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23558929'],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '任务中心-下次再来',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: ['@[text="下次再来"] <<n [text="任务中心"]'],
          snapshotUrls: ['https://i.gkd.li/i/23545964'],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    {
      key: 3,
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
      key: 4,
      name: '任务中心-关闭签到提醒',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="cancel"] <<n [vid="bottom_two_button_layout"]'],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '任务中心-天天看激励视频-取消',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="取消"] + [text="进入观看"] <<n * [text="明日再来"]',
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    {
      key: 6,
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
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '任务中心-下载中间页-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: ['@[vid="title_bar_left_img"] + [vid="title_bar_tv"]'],
          activityIds: ['.web.WebActivity'],
        },
      ],
    },
    //看视频
    {
      key: 10,
      name: '看视频-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
          anyMatches: [
            '@[text="返回继续体验"] <<n * [text$="跳过"]',
            '@[text="立即前往加速"] <<n * [text$="跳过"]',
            '@[text="我要加速"] <<n * [text$="跳过"]',
            '@[text="我要直接拿奖励"] <<n * [text$="跳过"]',
            '@[text="get_reward_btn_bg"] <<n * [text$="跳过"]',
            '@[text="立即领取"] <<n * [text$="跳过"]',
            '@[text="去体验"] <<n * [text$="跳过"]',
            '@[text="立即前往"] <<n * [text$="跳过"]',
            '@[text="再试一次"] <<n * * [text$="跳过"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
            '.splash.ui.CoveredSplashAdvertiseActivity',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '看视频-礼包-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 15000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="我要减广告时长"] <<n * [text="不感兴趣"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '看视频-跳过-×-立即领取+恭喜获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Image < View +n [text="立即领取"] -n [text="恭喜获得奖励"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '看视频-跳过-×-应用详情+立即下载',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 16000,
          matches: ['@ImageView + [text="应用详情"] <<n * [text="立即下载"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '看视频-跳过-×-立即领取+立即下载',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@Image < View +n [text="立即领取"] -n [text="恭喜获得奖励"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 16000,
          matches: ['@ImageView + [text="应用详情"] <<n * [text="立即下载"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
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
          anyMatches: [
            '@[text="去领奖"] <<n * [text="点此处下载"]',
            '@[text="去领奖"] <<n * [text="可直接领奖"]',
            '@[text="去领奖"] <<n * [text="加速领奖入口"]',
            '@[text="去领奖"] <<n * [text="仅需体验"]',
            '@[text="去看看"] <<n * [text="reward_pop_get"]',
            '@[text="去下载"] <<n * [text="reward_pop_get"]',
            '@[text="返回继续体验"] <<n * [text="continue_see_title"]',
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
          excludeMatches: ['@[text="去领奖"] <<n * [id="_scrollView"]'],
          anyMatches: [
            '@RelativeLayout <<n * [text="奖励已领取"]',
            '@RelativeLayout <<n * [id="_scrollView"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '看视频-跳过-继续播放视频内容',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="继续播放视频内容"] <<n * [id="touchGuide"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '看视频-奖励已领取-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '看视频-恭喜提前获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="svg%3e"] <<n * [text="广告"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '看视频-奖励已领取-跳过-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="svg%3e"] <<n * [text="广告"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-反馈-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView <<n * [text="反馈"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 22,
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
    {
      key: 23,
      name: '看视频-限时领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="icon-close.e3e3211b"] -2 [text="立即暴涨"]',
            '@[text="icon-close.e3e3211b"] -3 [text="立即领取"]',
            '@[text="7b144c81c2cb181f"] <<n * [text="限时领取"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 24,
      name: '看视频-已发放-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@RelativeLayout <<n * [text="已发放"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 25,
      name: '看视频-惊喜福利-恭喜获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="惊喜福利"] <<n * [text="恭喜获得奖励"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    //看视频-二级
    {
      key: 30,
      name: '看视频-跳转快应用-<+×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 10000,
          matches: ['@ImageView + ImageView +2 [text="反馈"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.activity.base.TTWebPageActivity',
            'null',
          ],
        },
      ],
    },
    {
      key: 31,
      name: '看视频-已领取-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 15000,
          matches: ['@[text^="svg+xml;base64"] <<n * [text="已领取"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.activity.base.TTWebPageActivity',
          ],
        },
      ],
    },
    //首页功能类
    {
      key: 40,
      name: '选择备份模式',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[vid="iv_close"] - [text="选择备份模式"]'],
          activityIds: ['.home.view.HomeActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '开始安全备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches: ['@[text="开始安全备份"] <<n [vid="cl_open_auto_backup"]'],
          activityIds: ['.home.view.HomeActivity'],
        },
      ],
    },
    {
      key: 42,
      name: '开启自定义备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[vid="iv_close"] +n [text="开启自定义备份"]'],
          activityIds: ['.home.view.HomeActivity'],
        },
      ],
    },
    {
      key: 43,
      name: '立即升级',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[vid="img_close"] <<n * [text="立即升级"]'],
          activityIds: ['.home.view.HomeActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[text^="跳过"] <<n * [text="免广告"]',
            '@[text$="跳过"] <<n * [text="免广告"]',
            '@[vid="ms_skipView"] <<n * [text="免广告"]',
          ],
          activityIds: [
            '.app.ui.SplashActivity',
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 51,
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
          activityIds: ['.home.view.HomeActivity'],
        },
      ],
    },
    //会员支付类
    {
      key: 60,
      name: '随心卡会员,',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@TextView -n * >n [text="立即使用"] <<n [text="随心卡会员"]',
            '@Image -n * >n [text="立即开通"] <<n [text="随心卡会员"]',
          ],
          activityIds: ['.home.view.HomeActivity'],
        },
      ],
    },
  ],
});
