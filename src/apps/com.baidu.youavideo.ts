import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.youavideo',
  name: '一刻相册',
  groups: [
    //福利中心-.operate.ui.view.activity.TaskCenterActivity
    //每日签到
    {
      key: 0,
      name: '积分提现-立即兑现-50元',
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      activityIds: ['.operate.ui.view.activity.OperatePointWithdrawActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@[text="已兑完"][vid="tv_first_hint"] - [vid="ll_item_point_bg"] > [text="50元"][vid="tv_money"]',
            '@[text="确认兑换"][vid="single_confirm_button"][clickable=true] <n [vid="bottom_one_button_layout"] -n * [text="确定要兑换50元现金吗？"][vid="title"]',
          ],
          matches: [
            '@[text="立即兑现"][vid="tv_point_exchange"][clickable=true] -n [text="50元"][vid="tv_money"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="确认兑换"][vid="single_confirm_button"][clickable=true] <n [vid="bottom_one_button_layout"] -n * [text="确定要兑换50元现金吗？"][vid="title"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[text="提现到支付宝"][vid="btn_withdraw"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '福利中心-每日签到',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
      rules: [
        {
          key: 0,
          matches: ['@[text="立即签到"] -n [text="每日签到"]'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: ['@[text="我知道了"] -n [text^="签到成功"]'],
        },
      ],
    },
    //积分任务
    {
      key: 2,
      name: '积分任务-去完成-浏览App',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            'View > @View[getChild(0).text~="去.*|打开.*|前往.*"][clickable=true] > [text="去完成"]',
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
        {
          key: 1,
          actionDelay: 3000,
          matches: [
            '@[vid="title_bar_left_img"][clickable=true] + [text="下载中间页 : 苏宁易购手机版"][vid="title_bar_tv"]', //去苏宁易购领云钻
          ],
          activityIds: ['.web.WebActivity'],
        },
      ],
    },
    {
      scopeKeys: [300],
      key: 3,
      name: '积分任务-去完成-分享一个相册',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            'View > @View[getChild(0).text~="去.*|打开.*|前往.*"][clickable=true] > [text="去完成"]',
          ],
          actionDelay: 2000,
          matches: [
            'View > @View[getChild(0).text="分享一个相册"][clickable=true] > [text="去完成"]',
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
        {
          preKeys: [300, 0],
          key: 1,
          actionDelay: 1000,
          matches: [
            '@ViewGroup[clickable=true] > [text="未命名"][vid="tv_album_name"]',
          ],
          activityIds: ['.home.view.HomeActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 1000,
          matches: ['@[text="邀请共享"][vid="tv_invite"]'],
          activityIds: ['.cloudalbum.ui.activity.AlbumDetailActivity'],
        },
        {
          preKeys: [2],
          key: 3,
          actionDelay: 1000,
          matches: ['@[text="微信"][vid="share_icon_weixin"]'],
          activityIds: ['.share.ui.view.activity.ShareMediaActivity'],
        },
        {
          key: 4,
          position: {
            left: 'width * 0.925',
            top: 'height * 0.9',
          },
          actionDelay: 1000,
          matches: ['[vid="ll_share"] > @[vid="layout_share_media_channel"]'],
          activityIds: ['.share.ui.view.activity.ShareMediaActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '积分任务-去完成-创建一个新相册',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            'View > @View[getChild(0).text~="去.*|打开.*|前往.*|分享.*"][clickable=true] > [text="去完成"]',
          ],
          actionDelay: 2000,
          matches: [
            'View > @View[getChild(0).text="创建一个新相册"][clickable=true] > [text="去完成"]',
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: ['@[vid="btn_create_album"][clickable=true]'],
          activityIds: ['.home.view.HomeActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 1000,
          matches: [
            '@[text="立即创建"][vid="tv_create_album"][clickable=true]',
          ],
          activityIds: ['.cloudalbum.ui.activity.CreateAlbumActivity'],
        },
        {
          preKeys: [2],
          key: 3,
          position: {
            left: 'width * 0.925',
            top: 'height * 0.825',
          },
          actionDelay: 1000,
          matches: [
            '[vid="ll_scrollView_content"] > [vid="layout_content"] > @[vid="srv_list"]',
          ],
          activityIds: ['.cloudalbum.ui.activity.AlbumDetailActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '积分任务-去完成-制作并保存「春日」vlog',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            'View > @View[getChild(0).text~="去.*|打开.*|前往.*|.*相册"][clickable=true] > [text="去完成"]',
          ],
          actionDelay: 2000,
          matches: [
            'View > @View[getChild(0).text="制作并保存「春日」vlog"][clickable=true] > [text="去完成"]',
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          excludeMatches: [
            '@[vid="detail_back"] +2 [vid="scroll_content"] >n [text="老照片一键修复"][vid="tv_title"]',
          ],
          matches: [
            '@[vid="detail_black_icon"][clickable=true] + [text="做同款"][vid="detail_black_icon_text"]',
          ],
          activityIds: ['.aiphoto.ui.home.view.CreativeDetailActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[text="已选0个"][vid="tv_selected_count"] <n [vid="cl_complete_view"] < * - * @LinearLayout[clickable=true] > [text="全部"][vid="tv_tab_name"]',
          ],
          activityIds: [
            '.selectmedia.ui.view.BeatMatchingVideoSelectMediaActivity',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[text="已选0个"][vid="tv_selected_count"] <n [vid="cl_complete_view"] < * - * [vid="linear_section"][clickable=true] > [text="2026年6月28日"][vid="tv_date"]',
          ],
          activityIds: [
            '.selectmedia.ui.view.BeatMatchingVideoSelectMediaActivity',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            '[text="已选8个"][vid="tv_selected_count"] +n @[text="确认"][vid="tv_select_finish"][clickable=true]',
          ],
          activityIds: [
            '.selectmedia.ui.view.BeatMatchingVideoSelectMediaActivity',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          position: {
            left: 'width * 0.86',
            top: 'height * 0.09',
          },
          matches: [
            '[id="android:id/content"] > @ComposeView >n [vid="nvs_live_window"]',
          ],
          activityIds: [
            'com.mars.united.yike.multiplatform.shared.ui.view.VideoComposeActivity',
          ],
        },
        {
          preKeys: [5],
          key: 6,
          position: {
            left: 'width * 0.925',
            top: 'height * 0.725',
          },
          actionDelay: 1000,
          matches: [
            '[id="android:id/content"] > ViewGroup > @ScrollView > ViewGroup > [text="再做一个"]',
          ],
          activityIds: ['.imageedit.ui.view.activity.ImageEditShareActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '积分任务-去完成-制作照片卡点视频',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            'View > @View[getChild(0).text~="去.*|打开.*|前往.*|.*相册|.*vlog"][clickable=true] > [text="去完成"]',
          ],
          actionDelay: 2000,
          matches: [
            'View > @View[getChild(0).text="制作照片卡点视频"][clickable=true] > [text="去完成"]',
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="已选0个"][vid="tv_selected_count"] <n [vid="cl_complete_view"] < * - * @LinearLayout[clickable=true] > [text="全部"][vid="tv_tab_name"]',
          ],
          activityIds: [
            '.selectmedia.ui.view.BeatMatchingVideoSelectMediaActivity',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[text="已选0个"][vid="tv_selected_count"] <n [vid="cl_complete_view"] < * - * @[vid="linear_section"][clickable=true][index=0]',
          ],
          activityIds: [
            '.selectmedia.ui.view.BeatMatchingVideoSelectMediaActivity',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[text="已选1个"][vid="tv_selected_count"] +n @[text="确认"][vid="tv_select_finish"][clickable=true]',
          ],
          activityIds: [
            '.selectmedia.ui.view.BeatMatchingVideoSelectMediaActivity',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          position: {
            left: 'width * 0.86',
            top: 'height * 0.09',
          },
          matches: [
            '[id="android:id/content"] > @ComposeView >n [vid="nvs_live_window"]',
          ],
          activityIds: [
            'com.mars.united.yike.multiplatform.shared.ui.view.VideoComposeActivity',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          position: {
            left: 'width * 0.925',
            top: 'height * 0.725',
          },
          actionDelay: 1000,
          matches: [
            '[id="android:id/content"] > ViewGroup > @ScrollView > ViewGroup > [text="再做一个"]',
          ],
          activityIds: ['.imageedit.ui.view.activity.ImageEditShareActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '积分任务-去完成-体验智能清理',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            'View > @View[getChild(0).text~="去.*|打开.*|前往.*|.*相册|制作.*"][clickable=true] > [text="去完成"]',
          ],
          actionDelay: 2000,
          matches: [
            'View > @View[getChild(0).text="体验智能清理"][clickable=true] > [text="去完成"]',
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          position: {
            left: 'width * 0.925',
            top: 'height * 0.855',
          },
          actionDelay: 3000,
          matches: [
            'ViewGroup < ViewGroup < ComposeView < @[id="android:id/content"]',
          ],
          activityIds: ['.home.view.assistant.activity.CleanUpClusterActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '积分任务-去完成-老照片修复跨越时空',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            'View > @View[getChild(0).text~="去.*|打开.*|前往.*|.*相册|制作.*|体验.*"][clickable=true] > [text="去完成"]',
          ],
          actionDelay: 2000,
          matches: [
            'View > @View[getChild(0).text="老照片修复跨越时空"][clickable=true] > [text="去完成"]',
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: [
            '@[vid="detail_back"] +n [vid="scroll_content"] >n [text="老照片一键修复"][vid="tv_title"]',
          ],
          activityIds: ['.aiphoto.ui.home.view.CreativeDetailActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '积分任务-去完成-浏览社区5s',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            'View > @View[getChild(0).text~="去.*|打开.*|前往.*|.*相册|制作.*|体验.*|.*时空"][clickable=true] > [text="去完成"]',
          ],
          actionDelay: 2000,
          matches: [
            'View > @View[getChild(0).text="浏览社区5s"][clickable=true] > [text="去完成"]',
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: [
            '[vid="taskFinishFloatView"] > @FrameLayout[clickable=true] >n [vid="task_buoy_message"]',
          ],
          activityIds: ['.aiphoto.ui.publishwork.view.TopicDetailActivity'],
        },
      ],
    },
    {
      key: 10,
      name: '积分任务-去完成-天天看激励视频',
      matchRoot: true,
      matchDelay: 1000,
      forcedTime: 10000,
      resetMatch: 'activity',
      activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          matches: [
            '[text="去完成"] -n [text="天天看激励视频"] < @View[clickable=true] < View +n * [text="明日再来"]',
          ],
        },
        {
          key: 1,
          matches: ['@[text="继续观看"][clickable=true] - [text="下次再来"]'],
        },
      ],
    },
    {
      key: 11,
      name: '福利中心-看广告赚积分',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="看广告赚积分"] - [desc="礼盒"] < @View[clickable=true] < View -n * [text="浏览社区5s"] +n [text="已完成"]',
          ],
          activityIds: ['.operate.ui.view.activity.TaskCenterActivity'],
        },
      ],
    },
    //看视频-com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity
    {
      key: 20,
      name: '看视频-跳过',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
        'com.bytedance.sdk.openadsdk.core.activity.base.TTWebPageActivity',
        '.operate.ui.view.activity.TaskCenterActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          anyMatches: [
            '@[text~="去体验|立即前往|立即前往加速|我要加速|我要立即领奖|我要直接拿奖励"] <<n * [text~="去体验[0-9]+秒可立即领奖"] +n [text$="跳过"]',
            '@[text~="点击查看|立即领奖|我要加速领奖|我要直接拿奖励|恭喜获得神秘惊喜"] <<n * [text~="[0-9]+s"] + [text="｜跳过"]',
            '@[text~="去体验[0-9]+秒立即领奖"] <<n * [text~="[0-9]s"] + [text="｜跳过"]',
            '@[text~="我要立即领奖|我要减广告时长"] <<n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
            '@View[clickable=true] - [text="reward_pop_get"] <<n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
          ],
        },
        {
          key: 1,
          actionDelay: 15000,
          anyMatches: [
            '[text="已领取"] >n @[text="svg+xml;base64"]',
            '@ImageView[clickable=true] < [getChild(1).text="应用详情"] +n [text="立即下载"]',
            'LinearLayout > FrameLayout + FrameLayout > FrameLayout > WebView - FrameLayout > TextView + @ImageView[clickable=true] + View',
            'LinearLayout > FrameLayout - LinearLayout > RelativeLayout > ImageView + @ImageView[clickable=true] + TextView + [text="反馈"]', //二级广告页
          ],
        },
        {
          key: 2,
          action: 'back',
          actionDelay: 15000,
          matches: ['View - View - LinearLayout >n WebView > WebView > View'],
        },
        {
          key: 3,
          actionDelay: 1000,
          anyMatches: [
            '@Image < * +n [text="限时奖励点击领取"]',
            '@[getChild(0).text="3ca6ab446dec1c57"] + [getChild(0).text="恭喜获得优惠券"]',
            '@[getChild(0).text="7b144c81c2cb181f"] -n [getChild(0).text="限时领取"]', //恭喜获得奖励-恭喜获得*元红包
            '@[getChild(0).text="恭喜获得奖励"] + [getChild(1).getChild(1).text="以实际活动为准"]', //惊喜福利
            '@TextView - [text="恭喜获得限时奖励"] < * + [getChild(1).getChild(1).text="以实际活动为准"]', //限时优惠权益
          ],
        },
        {
          key: 4,
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
            '[getChild(0).text="需要下滑浏览更多才能领取奖励哦"] - [id="root"] > [id="app"] > @[id="_scrollView"][childCount>1]',
          ],
        },
        {
          key: 5,
          matches: [
            '[getChild(0).text="需要下滑浏览更多才能领取奖励哦"] - [id="root"] > [id="app"] > [id="_scrollView"][childCount=1] >n @TextView',
          ],
        },
        {
          key: 6,
          actionDelay: 1000,
          anyMatches: [
            '@[text$="跳过"] -n [text="奖励已领取"]',
            '@RelativeLayout[clickable=true] <<n * + * [text="svg%3e"] + [text="奖励已领取"]',
          ],
        },
        {
          key: 7,
          excludeMatches: [
            '[text~="再逛[0-9]+秒后可领奖"] - [text="svg%3e"]',
            '[text~="[0-9]+秒"] - [text="Rkt+ZKm7ZwiYnxjnD71pWy80P5LJAAAAAElFTkSuQmCC"]',
          ],
          actionDelay: 1000,
          matches: [
            'FrameLayout - FrameLayout - FrameLayout >n @RelativeLayout[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-下滑',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
      ],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="icon-close.e3e3211b"] -n [getChild(0).text="限时领取"]', //恭喜获得优惠券
            '@[getChild(0).text="1301a2d542c5e480"] < * + [text="倒计时后将放弃优惠券"]',
            '@[getChild(0).text="7b144c81c2cb181f"] -n [getChild(0).text="限时领取"]', //恭喜获得奖励-恭喜获得*元红包
          ],
        },
        {
          key: 1,
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
          actionCd: 1000,
          matches: [
            '[text="需要下滑浏览更多才能领取奖励哦"] - [id="root"] > @[id="app"]',
          ],
        },
        {
          key: 2,
          anyMatches: [
            '@[text="svg%3e"] <<n * +n * [text="已发放"]',
            '@RelativeLayout[clickable=true] <<n * + * [text="已发放"]',
            '[id="root"] > [id="app"] >n @[text="svg%3e"] +n [text="搜索"]',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '看视频-礼包',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="跳过"] < @LinearLayout[clickable=true] -n LinearLayout > ImageView + [text="领取成功"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '看视频-礼包-恭喜提前获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
      ],
      rules: [
        {
          key: 0,
          matches: ['@[text="svg%3e"][text="广告"]'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="｜跳过"] -n [text="奖励已领取"]'],
        },
      ],
    },
    {
      key: 24,
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
      key: 25,
      name: '看视频-跳过-×-立即领取+立即下载',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
      ],
      rules: [
        {
          key: 0,
          matches: ['@Image < View +n [text="立即领取"] [text="恭喜获得奖励"]'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 10000,
          matches: [
            '@ImageView[clickable=true] < [getChild(1).text="应用详情"] +n [text="立即下载"]',
          ],
        },
      ],
    },
    {
      key: 26,
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
      key: 27,
      name: '看视频-限时砍一刀领奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="d93aea9c27398a77"] -n [text="点击宝刀,有机会获得奖励"] <<n * [text="｜跳过"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 28,
      name: '看视频-跳过-*秒',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text~="试玩[0-9]+秒获得奖励|看[0-9]+秒/安装应用立即领奖"] +n @[text="跳过"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[desc="button_container"] > [text="继续试玩"] + @[text="残忍离开"][clickable=true]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 29,
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
    //看视频-com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity
    {
      key: 30,
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
    //看视频-com.wangmai.appsdkdex.WMPortraitActivity
    {
      key: 40,
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
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 300,
          anyMatches: [
            '@TextView[clickable=true] + View >n [text="立即使用"]',
            '@TextView[clickable=true] - View >n [text="立即使用"]',
            '@[text="放弃优惠"][clickable=true] + [text="立即使用"]',
            '@ImageButton[clickable=true] - * [text="立即开通"]',
            '[text="v2_vip_icon.0cf7e01a"] - @[text="MYOtKBLsCY8AAAAASUVORK5CYII="][clickable=true] < * +n * [text="立即开通"]',
          ],
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
      name: '立即升级',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[vid="img_close"][clickable=true] -n * > [text="立即升级"][vid="tv_upgrade"][vid="tv_upgrade"]',
          ],
          activityIds: [
            '.app.ui.SplashActivity',
            '.home.view.HomeActivity',
            '.vip.ui.VipWebActivity',
            '.operate.ui.view.activity.OperateWithdrawProgressActivity',
          ],
        },
      ],
    },
    {
      key: 401,
      name: '评价-下次再说',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="你喜欢使用无限空间随心备份吗？"][vid="tv_title"] +n @[text="下次再说"][vid="tv_next_time"][clickable=true]',
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
      name: '首页全新视图更清晰-我知道了',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="我知道了"][vid="text_confirm"] -n @[vid="iv_close"][clickable=true] - [vid="hs_root"] [text="首页全新视图更清晰"][vid="tv_title"]',
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
      key: 403,
      name: '备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[vid="iv_close"][clickable=true] +n [vid="tv_backup"]', //一键备份
            '@[vid="iv_close"][clickable=true] - [text="选择备份模式"]', //一键开始原画质备份
          ],
          activityIds: [
            '.app.ui.SplashActivity',
            '.home.view.HomeActivity',
            '.vip.ui.VipWebActivity',
            '.operate.ui.view.activity.TaskCenterActivity',
          ],
        },
      ],
    },
    {
      key: 404,
      name: '开启自动备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          anyMatches: [
            '[vid="cl_open_auto_backup"] > [vid="cl_open_auto_backup_btn"] > [text="开始安全备份"][vid="tv_open_auto_backup_btn_up"]',
            '[vid="cl_open_auto_backup"] > [vid="cl_open_auto_backup_btn"] > [text="确认开启备份"][vid="tv_open_auto_backup_btn_up"]',
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
      key: 405,
      name: '极速备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[desc="关闭"] < @[vid="iv_refund_sheet_close"][clickable=true] <n * +n [text="立即恢复 极速备份"][vid="tv_refund_sheet_action"]',
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
      key: 406,
      name: '同时开启双重保障-暂不考虑',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="同时开启双重保障"][vid="dialog_title"] +n @[vid="dialog_white_button"][clickable=true] + [text="暂不考虑"][vid="dialog_white_text"] + [vid="dialog_blue_button"] + [text="立即开启"][vid="dialog_blue_text"]',
          ],
          activityIds: [
            '.app.ui.SplashActivity',
            '.home.view.HomeActivity',
            '.vip.ui.VipWebActivity',
            '.operate.ui.view.activity.TaskCenterActivity',
          ],
        },
      ],
    },
    {
      key: 407,
      name: '权限申请-取消',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="取消"][vid="cancel"][clickable=true] + [vid="divider_cancel_ok_line"] + [text="确定"][vid="confirm"]',
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
      key: 499,
      name: '福利中心',
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[vid="title_bar_pm_task_center_white"] + @[vid="title_bar_pm_task_center"]',
          ],
          activityIds: ['.home.view.HomeActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 500,
      name: '首页广告-跳过',
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="跳过"][clickable=true] - * [text$="跳转至详情页"]',
            '@[text~="跳过 [0-9]"][clickable=true] + * > [text^="点击"]',
            '@[text~="[0-9] \\\\| 跳过"][clickable=true] + * [text="点击按钮了解更多"]',
            '@ImageView < ViewGroup < * - * [text="向上滑动"] + [text="跳转至详情页或第三方应用"]',
            '@ImageView < ViewGroup < * + * [text="上滑或点击"] + [text="跳转至详情页或第三方应用"]',
            '@[vid="ms_skipView"] + [vid="ms_shakeRoot"] > [text="摇动手机"] + [text="跳转详情页或第三方应用"]',
            '@[text="跳过"] < FrameLayout[getChild(1).text~="[0-9]"] + [getChild(0).text="上滑或点击"] > [text="跳转详情或第三方应用"]',
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
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[vid="dialog_home_pop_close_button"][clickable=true]',
            '[getChild(3).vid="jump_btn"] + @[vid="iv_close"][clickable=true]',
          ],
          activityIds: [
            '.app.ui.SplashActivity',
            '.home.view.HomeActivity',
            '.vip.ui.VipWebActivity',
            '.splash.ui.CoveredSplashAdvertiseActivity',
            '.operate.ui.view.activity.TaskCenterActivity',
          ],
        },
      ],
    },
  ],
});
