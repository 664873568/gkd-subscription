import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.youavideo',
  name: '一刻相册',
  groups: [
    //福利中心
    //每日签到
    {
      key: 0,
      name: '福利中心',
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
      name: '福利中心-每日签到',
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
      name: '福利中心-签到成功',
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
      key: 8,
      name: '福利中心-看广告赚积分',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: [
            '@[text="看广告赚积分"] <2 @View[clickable=true] < * - * [text="浏览社区5s"] +3 [text="已完成"]',
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '福利中心-继续观看',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="继续观看"] - [text="下次再来"]'],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    //积分任务
    {
      key: 10,
      name: '积分任务-去苏宁易购领云钻',
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
      key: 11,
      name: '积分任务-分享一个相册',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '[text="未命名"][vid="tv_album_name"] <2 ViewGroup[clickable=true]',
          ],
          activityIds: ['.home.view.HomeActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="邀请共享"][vid="tv_invite"]'],
          activityIds: ['.cloudalbum.ui.activity.AlbumDetailActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: ['@[text="微信"][vid="share_icon_weixin"]'],
          activityIds: ['.share.ui.view.activity.ShareMediaActivity'],
        },
      ],
    },
    {
      key: 12,
      name: '积分任务-分享一个相册-领取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          position: {
            left: 'width * 0.9230',
            top: 'width * 0.1626',
          },
          actionDelay: 3000,
          matches: ['@[vid="layout_share_media_channel"]'],
          activityIds: ['.share.ui.view.activity.ShareMediaActivity'],
        },
      ],
    },
    {
      key: 13,
      name: '积分任务-创建一个新相册',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: ['@[vid="btn_create_album"][clickable=true]'],
          activityIds: ['.home.view.HomeActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="立即创建"][vid="tv_create_album"][clickable=true]',
          ],
          activityIds: ['.cloudalbum.ui.activity.CreateAlbumActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          position: {
            left: 'width * 0.9247',
            top: 'width * 1.3434',
          },
          matches: ['@[vid="srv_list"]'],
          activityIds: ['.cloudalbum.ui.activity.AlbumDetailActivity'],
        },
      ],
    },
    {
      key: 14,
      name: '积分任务-体验智能清理',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          position: {
            left: 'width * 0.9221',
            top: 'width * 1.8486',
          },
          actionDelay: 3000,
          matches: ['@ComposeView'],
          activityIds: [
            '.operate.ui.view.activity.TaskCenterActivity',
            '.home.view.assistant.activity.CleanUpClusterActivity',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '积分任务-制作并保存「春日」vlog',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@[vid="detail_back"] +2 [vid="scroll_content"] >n [text="老照片一键修复"][vid="tv_title"]',
          ],
          matches: [
            '@[vid="detail_black_icon"][clickable=true] + [text="做同款"][vid="detail_black_icon_text"]',
          ],
          activityIds: ['.aiphoto.ui.home.view.CreativeDetailActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="确认"][vid="tv_select_finish"][clickable=true]'],
          activityIds: [
            '.selectmedia.ui.view.BeatMatchingVideoSelectMediaActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          position: {
            left: 'width * 0.8564',
            top: 'width * 0.1981',
          },
          actionDelay: 10000,
          matches: ['@ComposeView'],
          activityIds: [
            'com.mars.united.yike.multiplatform.shared.ui.view.VideoComposeActivity',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          position: {
            left: 'width * 0.9213',
            top: 'width * 0.6574',
          },
          actionDelay: 10000,
          matches: ['@ScrollView'],
          activityIds: ['.imageedit.ui.view.activity.ImageEditShareActivity'],
        },
      ],
    },
    {
      key: 16,
      name: '积分任务-制作照片卡点视频',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: ['@[text="确认"][vid="tv_select_finish"][clickable=true]'],
          activityIds: [
            '.selectmedia.ui.view.BeatMatchingVideoSelectMediaActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          position: {
            left: 'width * 0.8564',
            top: 'width * 0.1981',
          },
          actionDelay: 10000,
          matches: ['@ComposeView'],
          activityIds: [
            'com.mars.united.yike.multiplatform.shared.ui.view.VideoComposeActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          position: {
            left: 'width * 0.9213',
            top: 'width * 0.6574',
          },
          actionDelay: 10000,
          matches: ['@ScrollView'],
          activityIds: ['.imageedit.ui.view.activity.ImageEditShareActivity'],
        },
      ],
    },
    {
      key: 17,
      name: '积分任务-老照片修复跨越时空',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="detail_back"] +2 [vid="scroll_content"] >n [text="老照片一键修复"][vid="tv_title"]',
          ],
          activityIds: ['.aiphoto.ui.home.view.CreativeDetailActivity'],
        },
      ],
    },
    {
      key: 18,
      name: '积分任务-浏览社区5s',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 6000,
          matches: [
            '[vid="task_buoy_message"] <<6 @FrameLayout[clickable=true] < [vid="taskFinishFloatView"]',
          ],
          activityIds: ['.aiphoto.ui.publishwork.view.TopicDetailActivity'],
        },
      ],
    },
    {
      key: 19,
      name: '积分任务-天天看激励视频',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: [
            '[text="去完成"] -3 [text="天天看激励视频"] < @View[clickable=true] < * +n * [text="明日再来"]',
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    //看视频-com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity
    {
      key: 20,
      name: '看视频-跳过-去体验*秒可立即领奖',
      matchRoot: true,
      matchDelay: 1000,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="我要加速领奖"] <<n * -n * [text$="跳过"] - [text~="[0-9]+s"]',
            '@[text="我要直接拿奖励"] <<n * +n * [text$="跳过"] - [text~="[0-9]+s"]',
            '@[text="去体验"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要加速"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要加速"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="立即前往加速"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="立即前往加速"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要立即领奖"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要立即领奖"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要直接拿奖励"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要直接拿奖励"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-跳过-限时领取',
      matchRoot: true,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="32b391f8609869b1"]',
            '@[text=""] - [text="恭喜获得限时奖励"]',
            '@[text="恭喜获得奖励"] < * + * [text="惊喜福利"]',
            '@[text="7b144c81c2cb181f"] < * - * [text="恭喜获得奖励"]',
            '@[text="7b144c81c2cb181f"] < * - * [text~="恭喜获得[0-9]+(\\\\.[0-9]+)?元红包"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            '@Image < * +n [text="限时奖励点击领取"]',
            '@[text="3ca6ab446dec1c57"] < * + * [text="恭喜获得优惠券"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '看视频-跳过-二级广告页-< × 反馈',
      matchRoot: true,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 16000,
          matches: [
            'ImageView[clickable=true] + @ImageView[clickable=true] + TextView + [text="反馈"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.activity.base.TTWebPageActivity',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '看视频-奖励已领取-跳过',
      matchRoot: true,
      matchDelay: 2000,
      matchTime: 40000,
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
      key: 24,
      name: '看视频-礼包-再逛*秒后可领奖',
      matchRoot: true,
      matchDelay: 1000,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="我要立即领奖"] <<n * -n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
            '@[text="我要减广告时长"] <<n * -n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
            '@View[clickable=true] - [text="reward_pop_get"] <<n * -n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 25,
      name: '看视频-礼包-再逛*秒后可领奖-下滑',
      matchRoot: true,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'swipe',
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 1000,
          },
          matches: [
            '[text="需要下滑浏览更多才能领取奖励哦"] < * -n [id="root"] @[id="_scrollView"][childCount>1]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
        {
          action: 'click',
          matches: [
            '[text="需要下滑浏览更多才能领取奖励哦"] < * -n [id="root"] [id="_scrollView"][childCount=1] @[text="立即打开"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 26,
      name: '看视频-礼包-奖励已领取-<',
      matchRoot: true,
      matchDelay: 2000,
      matchTime: 40000,
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
      key: 27,
      name: '看视频-礼包-<',
      matchRoot: true,
      matchDelay: 2000,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: [
            '[text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
            '[text~="[0-9]+秒"] - [text="Rkt+ZKm7ZwiYnxjnD71pWy80P5LJAAAAAElFTkSuQmCC"]',
          ],
          matches: [
            'FrameLayout - FrameLayout - FrameLayout >n @RelativeLayout[clickable=true]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 28,
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
      key: 29,
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
      key: 30,
      name: '看视频-礼包-×-应用详情+立即下载',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 11000,
          matches: [
            '[text="应用详情"] - @ImageView[clickable=true] < * +n [text="立即下载"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 31,
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
          matches: [
            '[text="应用详情"] - @ImageView[clickable=true] < * +n [text="立即下载"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 32,
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
            '@RelativeLayout [text="svg%3e"] + [text="再逛"]',
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
      key: 33,
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
      key: 34,
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
      key: 35,
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
      key: 36,
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
      key: 37,
      name: '看视频-已发放-限时领取-×',
      matchRoot: true,
      actionMaximum: 6,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="icon-close.e3e3211b"] -n [text="恭喜获得优惠券"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 38,
      name: '看视频-下滑-*秒',
      matchRoot: true,
      actionMaximum: 6,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'swipe',
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 1000,
          },
          matches: [
            '[text="需要下滑浏览更多才能领取奖励哦"] - [id="root"] > @[id="app"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 39,
      name: '看视频-下滑-已发放-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['[text="已发放"] >n @RelativeLayout'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 40,
      name: '看视频-安装应用立即领奖-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="跳过"] -2 [text$="安装应用立即领奖"]'],
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
      key: 41,
      name: '看视频-广告-反馈 ×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'ImageView < LinearLayout[clickable=true] < @LinearLayout[clickable=true] - FrameLayout > [text="反馈"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 42,
      name: '看视频-全屏广告-反馈 ×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'ImageView < ViewGroup < * - * [text="反馈"] <<n * + * [text="上滑或点击"] + [text="跳转至详情页或第三方应用"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          ],
        },
      ],
    },
    {
      key: 49,
      name: '看视频-已领取-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 16000,
          matches: ['[text="已领取"] >n @[text="svg+xml;base64"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.activity.base.TTWebPageActivity',
          ],
        },
      ],
    },
    //看视频-com.wangmai.appsdkdex.WMPortraitActivity
    {
      key: 50,
      name: '看视频-wangmai',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[id$="wm_image_clear"][clickable=true] - [id$="wm_custom_web_container"]',
          ],
          activityIds: ['com.wangmai.appsdkdex.WMPortraitActivity'],
        },
      ],
    },
    //会员支付类
    {
      key: 300,
      name: '随心卡会员',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@TextView[clickable=true] + View >n [text="立即使用"]',
            '@TextView[clickable=true] - View >n [text="立即使用"]',
          ],
          activityIds: [
            '.app.ui.SplashActivity',
            '.vip.ui.VipWebActivity',
            '.vip.ui.VipPayWebDialogActivity',
          ],
        },
        {
          anyMatches: [
            '@ImageButton[clickable=true] - * [text="立即开通"]',
            '[text="v2_vip_icon.0cf7e01a"] - @[text="MYOtKBLsCY8AAAAASUVORK5CYII="][clickable=true] < * +n * [text="立即开通"]',
          ],
          activityIds: [
            '.app.ui.SplashActivity',
            '.vip.ui.VipWebActivity',
            '.vip.ui.VipPayWebDialogActivity',
          ],
        },
        {
          matches: ['@[text="放弃优惠"][clickable=true] + [text="立即使用"]'],
          activityIds: [
            '.app.ui.SplashActivity',
            '.vip.ui.VipWebActivity',
            '.vip.ui.VipPayWebDialogActivity',
          ],
        },
      ],
    },
    //首页功能类
    {
      key: 400,
      name: '一键备份-×', //一键备份|一键开始原画质备份
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="iv_close"][clickable=true] +n [vid="tv_backup"]'],
          activityIds: [
            '.app.ui.SplashActivity',
            '.home.view.HomeActivity',
            '.vip.ui.VipWebActivity',
          ],
        },
      ],
    },
    {
      key: 401,
      name: '选择备份模式-×',
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
      key: 402,
      name: '开始安全备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['[vid="cl_open_auto_backup"] >n @[text="开始安全备份"]'],
          activityIds: [
            '.app.ui.SplashActivity',
            '.home.view.HomeActivity',
            '.vip.ui.VipWebActivity',
          ],
        },
      ],
    },
    {
      key: 403,
      name: '确认开启备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['[vid="cl_open_auto_backup"] >n @[text="确认开启备份"]'],
          activityIds: [
            '.app.ui.SplashActivity',
            '.home.view.HomeActivity',
            '.vip.ui.VipWebActivity',
          ],
        },
      ],
    },
    {
      key: 404,
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
    {
      key: 499,
      name: '首页广告-跳过-去体验*秒可立即领奖',
      matchRoot: true,
      actionMaximum: 3,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="立即前往加速"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
          ],
          activityIds: [
            '.splash.ui.CoveredSplashAdvertiseActivity',
          ],
        },
      ],
    },
    //首页广告类
    {
      key: 500,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 2,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '[text="免广告"][vid="text"] < * - * @[text~="跳过 [0-9]"][clickable=true] + * ImageView',//摇动手机-跳转至详情页或第三方应用
            '[text="免广告"][vid="text"] < * - * @[text~="跳过 [0-9]"][clickable=true] + * [text="点击下载应用"]',
            '[text="免广告"][vid="text"] < * - * @[text~="跳过 [0-9]"][clickable=true] + * [text="点击跳转至网页或第三方应用"]',
            '[text="免广告"][vid="text"] < * - * @[text~="[0-9] \\\\| 跳过"][clickable=true] + * [text="点击按钮了解更多"]',
            '[text="免广告"][vid="text"] < * - * [text~="[0-9]"] - @[text="跳过"] < * + * [text="上滑或点击"] + [text="跳转详情或第三方应用"]',
          ],
          activityIds: [
            '.app.ui.SplashActivity',
            '.splash.ui.CoveredSplashAdvertiseActivity',
          ],
        },
      ],
    },
    {
      key: 501,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 2,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[vid="iv_close"] - * >n [vid="jump_btn"]',
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
  ],
});
