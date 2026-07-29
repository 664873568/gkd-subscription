import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.youavideo',
  name: '一刻相册',
  groups: [
    //任务中心-.operate.ui.view.activity.TaskCenterActivity
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
            '@[vid="title_bar_pm_task_center"] - [vid="title_bar_pm_task_center_white"]',
          ],
          activityIds: ['.home.view.HomeActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '任务中心-每日签到',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="立即签到"] -n [text="每日签到"]'],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="我知道了"] -n [text^="签到成功"]'],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '任务中心-签到成功',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="我知道了"] -n [text^="签到成功"]'],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '任务中心-下载中间页-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 3000,
          matches: ['@[vid="title_bar_left_img"] + [vid="title_bar_tv"]'],
          activityIds: ['.web.WebActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '任务中心-点击赚积分',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="点击赚积分"] <<n * -n * > [text="照片后台备份"] +n [text="已完成"] <<n [text="任务中心"]',
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '任务中心-天天看激励视频-去完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: [
            '[text="去完成"] -n [text="天天看激励视频"] <n @View +n View >n [text="明日再来"]',
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '任务中心-继续观看',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="继续观看"] - [text="下次再来"] <<n [text="任务中心"]',
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    //看视频-com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity
    {
      key: 10,
      name: '看视频-跳过-去体验*秒可立即领奖',
      matchRoot: true,
      actionMaximum: 3,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="我要加速领奖"] <<n * -n * [text$="跳过"] - [text~="[0-9]+s"]',
            '@[text="我要直接拿奖励"] <<n * +n * [text$="跳过"] - [text~="[0-9]+s"]',
            '@[text="去体验"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要加速"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要加速"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要立即领奖"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要直接拿奖励"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '看视频-跳过-限时领取-×',
      matchRoot: true,
      actionMaximum: 6,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="icon-close.e3e3211b"] -n [text="立即暴涨"]',
            '@[text="icon-close.e3e3211b"] -n * [text="限时领取"]',
            '@[text="3ca6ab446dec1c57"] -n View > [text="限时领取"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '看视频-跳过-恭喜获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="恭喜获得奖励"] <<n * - * [text$="跳过"] - [text~="[0-9]+s"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '看视频-跳过-恭喜获得限时奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@TextView[text=""] - [text="恭喜获得限时奖励"] <<n * - * [text$="跳过"] - [text~="[0-9]+s"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="去体验"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '看视频-跳过-恭喜获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@TextView[text=""] - [text="恭喜获得奖励"] <<n * - * [text$="跳过"] - [text~="[0-9]+s"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@TextView[text=""] - [text="恭喜获得限时奖励"] <<n * - * [text$="跳过"] - [text~="[0-9]+s"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[text="去体验"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '看视频-奖励已领取-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
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
      key: 16,
      name: '看视频-礼包-再逛*秒后可领奖',
      matchRoot: true,
      actionMaximum: 3,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="我要立即领奖"] <<n * -n * [text="svg%3e"] + [text!="再逛[0-9]+秒后可领奖"]',
            '@[text="我要减广告时长"] <<n * -n * [text="svg%3e"] + [text!="再逛[0-9]+秒后可领奖"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '看视频-礼包-限时领取-×',
      matchRoot: true,
      actionMaximum: 6,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: ['@[text="7b144c81c2cb181f"] < * -n * [text="限时领取"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '看视频-礼包-奖励已领取-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@RelativeLayout[clickable=true] <<n * + * [text="svg%3e"] + [text="奖励已领取"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '看视频-礼包-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          excludeMatches: ['[text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]'],
          matches: [
            '@RelativeLayout[clickable=true] <<n FrameLayout + FrameLayout + FrameLayout',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '看视频-礼包-领取成功-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="跳过"] < LinearLayout -n LinearLayout > ImageView + [text="领取成功"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 21,
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
      key: 22,
      name: '看视频-礼包-×-应用详情+立即下载',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 11000,
          matches: ['@ImageView + [text="应用详情"] <n * +n [text="立即下载"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '看视频-跳过-×-立即领取+立即下载',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@Image < View +n [text="立即领取"] [text="恭喜获得奖励"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 11000,
          matches: ['@ImageView + [text="应用详情"] [text="立即下载"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 24,
      name: '看视频-奖励已领取-去领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          excludeMatches: [
            '@[text="去领奖"][id="_scrollView"]',
            '@RelativeLayout [text="svg%3e"] + [text^="再逛"]',
          ],
          anyMatches: [
            '@RelativeLayout [text="奖励已领取"]',
            '@RelativeLayout [id="_scrollView"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 25,
      name: '看视频-跳过-继续播放视频内容',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="继续播放视频内容"][id="touchGuide"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 26,
      name: '看视频-恭喜提前获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="svg%3e"][text="广告"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 27,
      name: '看视频-礼包-奖励已领取-跳过-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="svg%3e"][text="广告"]'],
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
      key: 28,
      name: '看视频-温馨提示-去领取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="去领取奖励"] -n * [text="温馨提示"]'],
          snapshotUrls: ['https://i.gkd.li/i/23547170'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 29,
      name: '看视频-限时砍一刀领奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="d93aea9c27398a77"] -n [text="点击宝刀,有机会获得奖励"] <<n * [text$="跳过"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 30,
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
      key: 31,
      name: '看视频-安装应用立即领奖-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="跳过"] -2 [text$="安装应用立即领奖"][id="26fdb3"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="残忍离开"] - [text="继续试玩"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 32,
      name: '看视频-广告二级页-< × 反馈',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 16000,
          matches: ['@ImageView + ImageView +2 [text="反馈"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.activity.base.TTWebPageActivity',
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    //看视频-com.bytedance.sdk.openadsdk.core.activity.base.TTWebPageActivity
    {
      key: 39,
      name: '看视频-已领取-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 16000,
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
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="iv_close"][clickable=true] - [text="选择备份模式"]',
          ],
          activityIds: [
            '.app.ui.SplashActivity',
            '.home.view.HomeActivity',
            '.vip.ui.VipWebActivity',
          ],
        },
      ],
    },
    {
      key: 41,
      name: '开始安全备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[text="开始安全备份"] <<n [vid="cl_open_auto_backup"]'],
          activityIds: [
            '.app.ui.SplashActivity',
            '.home.view.HomeActivity',
            '.vip.ui.VipWebActivity',
          ],
        },
      ],
    },
    {
      key: 42,
      name: '确认开启备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[text="确认开启备份"] <<n [vid="cl_open_auto_backup"]'],
          activityIds: [
            '.app.ui.SplashActivity',
            '.home.view.HomeActivity',
            '.vip.ui.VipWebActivity',
          ],
        },
      ],
    },
    {
      key: 43,
      name: '一键备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="iv_close"] +n [text="一键备份"][vid="tv_backup"]'],
          activityIds: [
            '.app.ui.SplashActivity',
            '.home.view.HomeActivity',
            '.vip.ui.VipWebActivity',
          ],
        },
      ],
    },
    {
      key: 44,
      name: '立即升级',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="img_close"] -n LinearLayout > [text="立即升级"]'],
          activityIds: [
            '.app.ui.SplashActivity',
            '.home.view.HomeActivity',
            '.vip.ui.VipWebActivity',
          ],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-免广告',
      matchRoot: true,
      actionMaximum: 2,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text*="跳过"] <<n * [text="免广告"][vid="text"]',
            '@[vid="ms_skipView"] <<n * [text="免广告"][vid="text"]',
          ],
          activityIds: [
            '.app.ui.SplashActivity',
            '.splash.ui.CoveredSplashAdvertiseActivity',
          ],
        },
      ],
    },
    {
      key: 51,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 2,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[vid="iv_close"] - ViewGroup >n [vid="jump_btn"]',
            '@[vid="dialog_home_pop_close_button"] + [vid="img_lottie"]',
            '@[vid="dialog_home_pop_close_button"] + [vid="img_thumbnail"]',
          ],
          activityIds: [
            '.app.ui.SplashActivity',
            '.home.view.HomeActivity',
            '.vip.ui.VipWebActivity',
          ],
        },
      ],
    },
    //会员支付类
    {
      key: 60,
      name: '随心卡会员',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@TextView + View >n [text="立即使用"] <<n [text="随心卡会员"]',
            '@TextView - View >n [text="立即使用"] <<n [text="随心卡会员"]',
          ],
          activityIds: [
            '.app.ui.SplashActivity',
            '.vip.ui.VipWebActivity',
            '.vip.ui.VipPayWebDialogActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          anyMatches: [
            '@ImageButton[text^="png;base64"] <<n [text="随心卡会员"]',
            '@ImageButton + [text="v2_vip_icon.0cf7e01a"] <<n [text="随心卡会员"]',
            '@[text="MYOtKBLsCY8AAAAASUVORK5CYII="] + [text="v2_vip_icon.0cf7e01a"] <<n [text="随心卡会员"]',
          ],
          activityIds: [
            '.app.ui.SplashActivity',
            '.vip.ui.VipWebActivity',
            '.vip.ui.VipPayWebDialogActivity',
          ],
        },
      ],
    },
  ],
});
