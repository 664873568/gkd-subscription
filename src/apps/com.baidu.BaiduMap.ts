import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    //金币任务中心-com.baidu.baidumaps.MapsActivity
    //签到*天得*金币[id="J-sign-card"]
    {
      key: 0,
      name: '金币任务中心-签到日历-立即签到',
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          matches: [
            'AlertDialog > [id="sign-dialog"] > [text~="已签到[0-9]+/14天"] +n @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'AlertDialog > [text="去逛逛"] -n * > @TextView[clickable=true]',
          ],
        },
      ],
    },
    //限时任务[id="J-info-flow"]
    {
      key: 1,
      name: '金币任务中心-限时任务-浏览',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          matches: [
            '[vid="na_render_layout"] > ViewGroup > [text~="[0-9]{3,}"][vid="rewardAdCoin"] +n @[vid="rewardAdActionBt"][clickable=true]',
          ],
        },
      ],
    },
    //看视频最高赚99999金币*50[id="J-watchVideo"]
    {
      key: 2,
      name: '金币任务中心-看视频-赚金币',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@TextView[clickable=true] < * + * [text="继续看视频领金币"]',
            '[vid="na_render_layout"] > ViewGroup > [text~="[0-9]{3,}"][vid="rewardAdCoin"] +n @[vid="rewardAdActionBt"][clickable=true]',
          ],
          actionDelay: 2000,
          matches: [
            '[id="J-watchVideo"] >n @[getChild(0).getChild(0).text~="[0-9]{3,}"][clickable=true] + [getChild(1).text="待领取"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@TextView[clickable=true] < * + * [text="继续看视频领金币"]',
          ],
        },
      ],
    },
    //再做*个任务，额外得*[id="task-loader"]
    {
      key: 3,
      name: '金币任务中心-浏览App-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[id="J-watchVideo"] >n [getChild(1).text="待领取"] - @View[clickable=true] > [text="待领取"] - View >n [text~="[0-9]{3,}"]',
            '[getChild(0).text="恭喜获得任务奖励"] +n @TextView[index=parent.childCount.minus(1)][clickable=true]',
          ],
          actionDelay: 2000,
          matches: [
            '[id="task-loader"] > [id^="J-task-item"] > @View[getChild(0).text!~="去中国移动领话费流量"][clickable=true] > [text~="[0-9]{3,}"] +n [text="去完成"]',
          ],
        },
        {
          key: 1,
          anyMatches: [
            '@[desc="返回"][vid="title_btn_left"] - * [text="签到送好礼"][vid="title"]',
            '@[desc="返回"][vid="title_btn_left"] - * [text="千问-阿里 AI 助手"][vid="title"]',
            '@[desc="返回"][vid="title_btn_left"] <<n [vid="title_bar"] + [vid="frameLayout1"] >n [text="此功能需访问飞猪旅行APP"]',
            '@[desc="返回"][vid="title_btn_left"] <<n [vid="title_bar"] + [vid="frameLayout1"] >n [text="恭喜获得"] + [text="任务已完成\\n请返回到列表领取奖励"]',
          ],
        },
        {
          key: 2,
          matches: [
            '[getChild(0).text="恭喜获得任务奖励"] +n @TextView[index=parent.childCount.minus(1)][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '金币任务中心-浏览App-已完成-领取金币/点击领取',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '[id="task-loader"] > [id="J-save-wrap"] > @View[clickable=true] > [text="领取金币"]',
            '[id="task-loader"] > [id="J-save-wrap"] >n [id="J-reward-list"] >n @[text="点击领取"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@View[clickable=true] > [text="我知道了"]'],
        },
      ],
    },
    //免费抽大奖[id="J-sign-card"]
    {
      key: 5,
      name: '金币任务中心-免费抽大奖-免费抽奖',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[id="task-loader"] > [id^="J-task-item"] > @View[getChild(0).text!~="去中国移动领话费流量"][clickable=true] > [text~="[0-9]{3,}"] +n [text="去完成"]',
            '@View[getChild(0).text~="立即领取|再试一次"][clickable=true] - [text~="恭喜抽中 [0-9]+00 金币"]',
            '@TextView[clickable=true] <n * + * [text~="恭喜抽中 [0-9]0 金币"]',
          ],
          matches: [
            '[id="J-lucky-draw"] > [text="免费抽大奖"] +n View > @View[clickable=true] > View > [text="免费抽奖"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@View[getChild(0).text~="立即领取|再试一次"][clickable=true] - [text~="恭喜抽中 [0-9]+00 金币"]',
          ],
        },
        {
          key: 2,
          matches: [
            '@TextView[clickable=true] <n * + * [text~="恭喜抽中 [0-9]0 金币"]',
          ],
        },
      ],
    },
    //翻卡赢 9999金币[id="J-flip-card"]
    {
      key: 6,
      name: '金币任务中心-翻卡-翻*倍',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[id="J-lucky-draw"] > [text="免费抽大奖"] +n View > @View[clickable=true] >n [text~="免费抽奖|抽奖中"]',
            '[text="恭喜翻出"] +n @View[clickable=true] > [text~="继续翻十位领取|继续翻百位|立即收下"]',
            '@View[clickable=true] > [text="立即翻倍|立即收下"]',
          ],
          matches: [
            '[text="翻多少赚多少"] + [text="翻卡赢 9999金币"] +n @View[clickable=true] > [name$="view.View" || text~="翻[0-9]倍"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="恭喜翻出"] +n @View[clickable=true] > [text~="继续翻十位领取|继续翻百位|立即收下"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          matches: ['@View[clickable=true] > [text="立即翻倍|立即收下"]'],
        },
        {
          preKeys: [0],
          key: 3,
          matches: [
            '[text="恭喜获得收益翻倍卡"] + [text="明天再来可翻倍今日收益"] +n @View[clickable=true] > [text="明日来翻倍"]',
          ],
        },
      ],
    },
    //翻 卡赢 1888金币[id="J-flip-card-v2"]
    {
      key: 7,
      name: '金币任务中心-翻卡-翻',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[id="J-lucky-draw"] > [text="免费抽大奖"] +n View > @View[clickable=true] >n [text~="免费抽奖|抽奖中"]',
            '[text="运气太棒啦"] +n @[text="领走奖励 结束翻卡"][clickable=true]',
          ],
          matches: [
            '[id="J-flip-card-v2"] > [text="翻 卡赢 1888金币"] +n ListView > @View[clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="运气太棒啦"] +n @[text="领走奖励 结束翻卡"][clickable=true]',
          ],
        },
      ],
    },
    //天天赢大奖[id="lucky-wheel-entry"]
    {
      key: 8,
      name: '金币任务中心-天天赢大奖-去抽奖',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text~="看视频得次数 \\\\([0-9]/10\\\\)" || text~="浏览页面得次数 \\\\([0-9]/10\\\\)"] + [text!~="访问中国移动得1次抽奖机会"] + @[text="去完成"][clickable=true]',
          ],
        },
        {
          key: 1,
          excludeMatches: [
            '[text~="看视频得次数 \\\\([0-9]/10\\\\)" || text~="浏览页面得次数 \\\\([0-9]/10\\\\)"] + [text!~="访问中国移动得1次抽奖机会"] + @[text="去完成"][clickable=true]',
            '@[desc="关闭"][clickable=true] + [text~="恭喜获得金币奖励|恭喜获得现金奖励"] +n [text~="再抽一次|去做任务赚次数"]',
          ],
          actionDelay: 1000,
          matches: [
            '@View[clickable=true] > View + [text="立刻抽奖"] +n [text~="[1-9][0-9]*"]',
          ],
        },
        {
          key: 2,
          actionDelay: 1000,
          matches: [
            '@[desc="关闭"][clickable=true] + [text~="恭喜获得金币奖励|恭喜获得现金奖励"] +n [text~="再抽一次|去做任务赚次数"]',
          ],
        },
      ],
    },
    //开红包领现金[id="J-sign-card"]
    {
      key: 9,
      name: '金币任务中心-开红包领现金-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      forcedTime: 60000,
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[vid="bm_progress_container"] > [vid="loading_anim"] + [text="正在载入"][vid="bm_progress_message"]',
            '[text="恭喜获得惊喜红包"] <n * < * + * @View[clickable=true] > [text="继续开红包"]',
            '[text="看视频 立得现金"] <n * < * +n @View[clickable=true] > [text="去完成"]',
            '[text="成功完成任务"] <n * < * +n @View[clickable=true] > [text="继续开红包"]',
            '[text="开红包领现金"] >n [text="邀请1位好友"] + @ImageButton[clickable=true]',
          ],
          matches: [
            '@View[clickable=true] > [text="正在开"] + [text="red-packet-arrow"]',
          ],
        },
        {
          key: 1,
          excludeMatches: [
            '[vid="bm_progress_container"] > [vid="loading_anim"] + [text="正在载入"][vid="bm_progress_message"]',
          ],
          anyMatches: [
            '[text="恭喜获得惊喜红包"] <n * < * + * @View[clickable=true] > [text="继续开红包"]',
            '[text="看视频 立得现金"] <n * < * +n @View[clickable=true] > [text="去完成"]',
            '[text="成功完成任务"] <n * < * +n @View[clickable=true] > [text="继续开红包"]',
            '[getChild(0).getChild(1).text="成功获得现金红包"] +n @View[clickable=true] > [text~="开启下一轮|明日再来"]',
          ],
        },
      ],
    },
    //开宝箱得金币[id="J-chest-box"]
    {
      key: 10,
      name: '金币任务中心-开宝箱得金币',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[text="翻多少赚多少"] + [text="翻卡赢 9999金币"] +n @View[clickable=true] > [name$="view.View" || text~="翻[0-9]倍"]',
            '[id="J-flip-card-v2"] > [text="翻 卡赢 1888金币"] +n ListView > @View[clickable=true]',
          ],
          actionDelay: 3000,
          matches: [
            '@View[clickable=true] > [id="J-chest-box"] > [id="J-chest-box-inner"] >n [text="开宝箱得金币"]',
          ],
        },
        {
          key: 1,
          anyMatches: [
            '[text~="恭喜获得金币奖励|恭喜获得[0-9]+金币"] < * +n @View[clickable=true] > [text~="再领[0-9]{3,}金币|膨胀到[0-9]{3,}金币"]',
            '@TextView[clickable=true] - View[getChild(0).text~="再领[0-9]{2,}金币"] -n View[getChild(0).text~="恭喜获得[0-9]+金币"]',
          ],
        },
      ],
    },
    //看视频-com.byazt.ff.Stub_Standard_Portrait_Activity
    {
      key: 20,
      name: '看视频-跳过',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.byazt.ff.Stub_Standard_Portrait_Activity',
        'com.byazt.ff.Stub_Standard_Activity',
        'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
        'com.bytedance.sdk.openadsdk.core.activity.base.TTWebPageActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          anyMatches: [
            '@[text~="去体验|立即前往|立即前往加速|我要加速|我要立即领奖|我要直接拿奖励"] <<n * [text~="去体验[0-9]+秒可立即领奖"] +n [text$="跳过"]',
            '@[text~="点击查看|立即领奖|我要加速领奖|我要直接拿奖励|恭喜获得神秘惊喜"] <<n * [text~="[0-9]+s"] + [text$="跳过"]',
            '@[text~="去体验[0-9]+秒立即领奖"] <<n * [text~="[0-9]s"] + [text="｜跳过"]',
            '@[text~="我要立即领奖|我要减广告时长"] <<n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
            '@View[clickable=true] - [text="reward_pop_get"] <<n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
          ],
        },
        {
          preKeys: [0],
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
          preKeys: [0],
          key: 2,
          action: 'back',
          actionDelay: 15000,
          matches: ['View - View - LinearLayout >n WebView > WebView > View'],
        },
        {
          key: 3,
          anyMatches: [
            '@Image < * +n [text="限时奖励点击领取"]',
            '@[getChild(0).text="3ca6ab446dec1c57"] + [getChild(0).text="恭喜获得优惠券"]',
            '@[getChild(0).text="7b144c81c2cb181f"] -n [getChild(0).text="限时领取"]', //恭喜获得奖励-恭喜获得*元红包
            '@[getChild(0).text="恭喜获得奖励"] + [getChild(1).getChild(1).text="以实际活动为准"]', //惊喜福利-限时优惠权益
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
          anyMatches: [
            '@[text$="跳过"] -n [text="奖励已领取"]',
            '@RelativeLayout[clickable=true] <<n * + * [text="svg%3e"] + [text="奖励已领取"]',
          ],
        },
        {
          key: 7,
          excludeMatches: [
            '[text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
            '[text~="[1-9][0-9]*秒"] - [text="Rkt+ZKm7ZwiYnxjnD71pWy80P5LJAAAAAElFTkSuQmCC"]',
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
        'com.byazt.ff.Stub_Standard_Portrait_Activity',
        'com.byazt.ff.Stub_Standard_Activity',
      ],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="icon-close.e3e3211b"] -n [getChild(0).text="限时领取"]', //恭喜获得优惠券
            '@[getChild(0).text="1301a2d542c5e480"] < * + [text="倒计时后将放弃优惠券"]',
            '@[getChild(0).text="7b144c81c2cb181f"] -n [getChild(0).text="限时领取"]', //恭喜获得奖励-恭喜获得*元红包
            'TextView + [text="继续浏览 有机会获得大额券"] +n [text="继续浏览"] + @[text="坚持退出"][clickable=true]',
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
          excludeMatches: [
            '[text~="[1-9][0-9]*秒"] - [text="Rkt+ZKm7ZwiYnxjnD71pWy80P5LJAAAAAElFTkSuQmCC"]',
          ],
          anyMatches: [
            '@[text="svg%3e"] <<n * +n * [text="已发放"]',
            '@RelativeLayout[clickable=true] <<n * + * [text="已发放"]',
            '[id="root"] > [id="app"] > View > View > @[text="svg%3e"]',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '看视频-礼包',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
      rules: [
        {
          key: 0,
          action: 'back',
          anyMatches: [
            'ImageView < @ViewGroup <<n * - * [desc="gift_box"]',
            '@ImageView <<n [desc="close_button"] <<n * [desc="gift_box"]',
          ],
        },
        {
          key: 1,
          matches: [
            'ImageView < @LinearLayout[clickable=true] - View - LinearLayout > ImageView + [text="领取成功"]', //*s后可领取奖励-×
          ],
        },
      ],
    },
    {
      key: 23,
      name: '看视频-跳过 *s',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            'Image < View < View < View < @View - * [text="反馈"] < * + * [text="点击取消静音"]',
            '@[text$="跳过"] - [text="0s"] < View <n View < View -n * [text="反馈"] < * + * [text="点击取消静音"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
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
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
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
          anyMatches: [
            '@ImageView < ViewGroup - * > [text="反馈"]',
            'ImageView < LinearLayout < @LinearLayout[clickable=true] - * > [text="反馈"]',
            '@Image <<n * - * [text="反馈"] <<n * + * [text="上滑或点击"] + [text="跳转至详情页或第三方应用"]',
            '@ImageView < ViewGroup < ViewGroup < ViewGroup -n * [text="向上滑动 或 点击"] + * > [text="跳转至详情页或第三方应用"]',
            'ImageView < LinearLayout[clickable=true] < @LinearLayout[clickable=true] - * [text="反馈"] <<n * + * [text=" 立即查看 "]',
            '@ImageView < ViewGroup < ViewGroup < ViewGroup - * [text="点击到落地页或三方APP"] <<n * + * [text="关闭悬浮球可继续浏览应用"]', //京东-惊喜等你拿
            '@ImageView < ViewGroup - [getChild(0).text="反馈"] <<n * + * [text="点击或上滑打开"] + [getChild(0).text="跳转至详情页或第三方应用"]', //蚂蚁阿福
            '@ImageView < ViewGroup < ViewGroup - [getChild(1).getChild(0).text="反馈"] <<n * + * [text="上滑或点击"] + [text="跳转至详情页或第三方应用"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.byazt.xs.Stub_Standard_Portrait_Activity
    {
      key: 30,
      name: '看视频-点击打开-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@Image < View < View + View'],
          activityIds: ['com.byazt.xs.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 31,
      name: '看视频-跳过-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 30000,
          matches: ['@[text$="跳过"] - [text="反馈"]'],
          activityIds: ['com.byazt.xs.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 32,
      name: '看视频-反馈-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@Image < View - [text="反馈"]'],
          activityIds: ['com.byazt.xs.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity
    {
      key: 40,
      name: '看视频-全屏广告',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
      ],
      rules: [
        {
          anyMatches: [
            '@[text~="去体验[0-9]秒立即领奖"] <n * -n * > [text="上滑或点击领取"]',
            '@ImageView < ViewGroup < ViewGroup -n * [text="上滑或点击"] + [text="跳转至详情页或第三方应用"]',
            '@ImageView < ViewGroup <n * < * + * [getChild(0).text="点击打开"] + [text="跳转至详情页或第三方应用"]',
            'Image < @View[width<100] < View < View < View -n * [getChild(0).text="反馈"] + * > [text="点击取消静音"]',
            '@ImageView[width<100] < ViewGroup < ViewGroup < ViewGroup -n * [getChild(0).text="反馈"] + * > [text="点击取消静音"]',
            '@ImageView[width<100] < ViewGroup < ViewGroup < ViewGroup -n * [text="向上滑动 或 点击"] + * > [text="跳转至详情页或第三方应用"]',
          ],
        },
      ],
    },
    //看视频-com.kwad.sdk.api.proxy.app.KsRewardVideoActivity
    {
      key: 50,
      name: '看视频--跳过我要免看本次广告',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="我要免看本次广告"] <<n * [text="跳过"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '看视频-跳过-点击下载免看广告',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="点击下载免看广告"] <<n * [text="跳过"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 52,
      name: '看视频-跳过-礼包-下载app/看*秒可直接拿奖励',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="点击下载拿奖励"][clickable=true] <<n * [text="下载app可直接拿奖励"] - ImageView < * + [desc="skip_button"] [text="跳过"]',
            '@[text~="点击下载拿奖励|点击跳转拿奖励"][clickable=true] <<n * [text~="看[0-9]+秒可直接拿奖励"] - ImageView < * + [desc="skip_button"] [text="跳过"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 16000,
          matches: [
            '@[id$="ksad_kwad_web_navi_back"] + [id$="ksad_kwad_web_navi_close"] + [id$="ksad_kwad_titlebar_title"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[text="残忍离开"] +n [text="留下看看"] <n * -n [text="真的不再看看了吗？"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: ['@[text="跳过"][clickable=true] <<n * [desc="gift_box"]'],
        },
      ],
    },
    {
      key: 53,
      name: '看视频-礼包-×k',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['ImageView < @ViewGroup <n * + * [desc="gift_box"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 54,
      name: '看视频-礼包-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="跳过"][clickable=true] <<n * [desc="gift_box"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 55,
      name: '看视频-跳过-立即领取/立即获取',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 5000,
          matches: [
            '@[desc="sky_lantern_main"][clickable=true] <<n * [text="跳过"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[text="点击跳转免看广告"] <n @[desc="sky-lantern-easy-playable_scene2_actionBtn"][clickable=true] -n [text^="恭喜获得"]',
          ],
        },
      ],
    },
    {
      key: 57,
      name: '看视频-礼包-免费获取-×',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: [
            '@[id$="ksad_end_close_btn"][clickable=true] - [text="免费获取"] < * - * > [id$="ksad_end_reward_icon"]',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 58,
      name: '看视频-礼包-立即获取-×',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: [
            '@ImageView < ViewGroup < ViewGroup < [desc="close_button"] - [getChild(0).getChild(0).text="立即获取"] < * - [getChild(0).desc="gift_box"]',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 59,
      name: '看视频-跳过-立即获取-*sKSRV',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: [
            '[desc="compliance-easy-playable_scene1_maskView"] +n @[desc="compliance-easy-playable_scene1_iconView"][clickable=true]',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    //看视频-com.kwad.sdk.api.proxy.app.KSRewardLandScapeVideoActivity
    {
      key: 60,
      name: '看视频-跳过-礼包-立即获取-*sKSRLSV',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.kwad.sdk.api.proxy.app.KSRewardLandScapeVideoActivity',
      ],
      rules: [
        {
          key: 0,
          action: 'none',
          matches: [
            '[getChild(0).getChild(0).text~="[0-9]+"] + * > [getChild(0).getChild(0).text="立即获取"] + [desc="skip_button"] > * > [text="跳过"]',
          ],
        },
        {
          key: 1,
          matches: [
            'ImageView < ViewGroup < @ViewGroup[clickable=true] < [desc="close_button"] - ViewGroup > [desc="call_button"] > [text="免费获取"]',
          ],
        },
      ],
    },
    //看视频-com.qq.e.ads.PortraitADActivity
    {
      key: 70,
      name: '看视频-微信-提前拿奖励',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text~=".*[0-9]+ 秒.*"] + [text="提前拿奖励"] + * @[text*="微信"][index=parent.childCount.minus(1)]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
        {
          key: 1,
          actionDelay: 15000,
          matches: ['@ImageView < FrameLayout + FrameLayout >2 ImageView'], //二级广告页
          activityIds: ['com.qq.e.ads.ADActivity'],
        },
        {
          key: 2,
          matches: [
            '@ImageView < FrameLayout + FrameLayout >2 ImageView + * [text*="微信"][index=parent.childCount.minus(1)]', //恭喜获得奖励
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 71,
      name: '看视频-恭喜获得奖励！-×',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView[clickable=true] -2 ImageView + LinearLayout > [text="恭喜获得奖励！"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 72,
      name: '看视频-奖励将于*秒后发放',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.qq.e.ads.PortraitADActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '[text="放弃福利" || text="我要更快拿奖"] < FrameLayout <n * +n * [text^="奖励将于"]',
            '[text^="奖励将于"] < LinearLayout < FrameLayout -n * [text="放弃福利" || text="我要更快拿奖"]',
            '[text^="奖励将于"] < LinearLayout < LinearLayout < LinearLayout <n FrameLayout -n * [text="放弃福利" || text="我要更快拿奖"]',
          ],
        },
        {
          key: 1,
          anyMatches: [
            '@ImageView < FrameLayout < FrameLayout - [text="恭喜获得奖励"]',
            '@ImageView < FrameLayout < FrameLayout < LinearLayout <n * -n * > [text*="已完成浏览"]',
          ],
        },
      ],
    },
    {
      key: 73,
      name: '看视频-点击广告拿奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.qq.e.ads.PortraitADActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="点击广告拿奖励"] <<n * [text="点击广告，即可获得奖励"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@ImageView < FrameLayout -2 FrameLayout > [text="恭喜获得奖励"]',
          ],
        },
      ],
    },
    {
      key: 74,
      name: '看视频-广告-××',
      matchRoot: true,
      matchDelay: 1000,
      forcedTime: 60000,
      resetMatch: 'activity',
      activityIds: ['com.qq.e.ads.PortraitADActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@ImageView < FrameLayout < FrameLayout + * [text="滑动/点击了解更多"]',
            '@ImageView < FrameLayout < LinearLayout <n * < * +n * [text="滑动/点击了解更多内容"]',
          ],
        },
        {
          key: 1,
          anyMatches: [
            '@ImageView < FrameLayout < FrameLayout + FrameLayout >n [text="立即领取" || text="立即下载" || text="去微信看看"]',
            '@ImageView < FrameLayout + LinearLayout >n [text="去微信看看"]',
          ],
        },
      ],
    },
    {
      key: 75,
      name: '看视频-广告-×qq',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView < FrameLayout + LinearLayout + ImageView'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 76,
      name: '看视频-免-恭喜获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@ImageView < FrameLayout < * + * > FrameLayout > [text="恭喜获得奖励"]',
            '@ImageView < FrameLayout <n FrameLayout < FrameLayout - * [text="恭喜获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 77,
      name: '看视频-我要更快拿奖',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="我要更快拿奖"] < FrameLayout + LinearLayout > [text="继续看视频"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 78,
      name: '看视频-打开App体验*秒，即可获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="点击下载或打开第三方应用"] <<n * [text="打开App体验15秒，即可获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 79,
      name: '看视频-跳过qq',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[getChild(3).getChild(1).text~="立即下载|去微信看看"] - * @[text="跳过"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    //看视频-com.qumeng.advlib.ui.front.InciteADActivity
    {
      key: 80,
      name: '看视频-体验APP，提前拿奖励-×',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.qumeng.advlib.ui.front.InciteADActivity'],
      rules: [
        {
          key: 0,
          matches: [
            'View < LinearLayout < @RelativeLayout[clickable=true] < FrameLayout <n LinearLayout + [text="  广告"]',
          ],
        },
        {
          key: 1,
          excludeMatches: [
            'View < LinearLayout < @RelativeLayout[clickable=true] < FrameLayout <n LinearLayout + [text="  广告"]',
          ],
          matches: [
            '@ImageView[clickable=true] - RelativeLayout > View', //奖励已到账
          ],
        },
      ],
    },
    {
      key: 81,
      name: '看视频-跳过-奖励已到账-×',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.qumeng.advlib.ui.front.InciteADActivity'],
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 0.321',
            top: 'width * 0.045',
          },
          actionDelay: 61000,
          matches: [
            '@FrameLayout > RelativeLayout > FrameLayout > LinearLayout > [text="广\\n告"]',
          ],
        },
      ],
    },
    //看视频-com.sigmob.sdk.base.common.PortraitAdActivity
    {
      key: 90,
      name: '看视频-跳过-浏览*秒领取奖励',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text~="立即前往|立即试玩"] < @View[clickable=true] <<n * -n * > [text~="浏览[0-9]+秒领取奖励"] + [id="close_btn"] > [text="跳过"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 10000,
          matches: ['@ImageView[clickable=true] + [text="正在跳转"]'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: ['@[text="跳过"] - [text="奖励已下发"]'],
        },
      ],
    },
    {
      key: 91,
      name: '看视频-跳过-*秒sigmob',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text~="立即领奖|立即领取奖励"][clickable=true] <<n * [id="close_btn"][getChild(0).text~="[0-9]+"] > [text="跳过"]',
          ],
        },
        {
          key: 1,
          matches: ['@[id="close_btn"][clickable=true] + * [text="点击前往"]'],
        },
      ],
    },
    {
      key: 92,
      name: '看视频-跳过-*s后获取奖励sigmob',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[id="app"] > [id="ad_area"] > [getChild(2).text~="已获得奖励|奖励已下发"] > [id="close_btn"] > @[text="跳过"][clickable=true]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[id="close_btn"][clickable=true] - [text="反馈"] <n * [text~="立即打开|马上去看看"]',
          ],
        },
      ],
    },
    {
      key: 93,
      name: '看视频-跳过-*s后获取奖励-抽奖',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 0.500',
            top: 'width * 0.152',
          },
          matches: [
            '[text="抽奖"] <<n @View -n View [text~="[0-9]+s后获取奖励"] + [id="close_btn"] >n [text="跳过"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[id="close_btn"][clickable=true]'],
        },
      ],
    },
    {
      key: 94,
      name: '看视频-跳过-*s后可领取奖励-免',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.sigmob.sdk.base.common.PortraitAdActivity',
        'com.sigmob.sdk.base.common.AdActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text~="立即前往|立即试玩"] <n @View[clickable=true] <<n * -n * > [text="反馈"] + [id="close_btn"] > [text="免"] + [text~="[0-9]+s后可领取奖励"] + [text$="跳过"]',
          ],
        },
        {
          key: 1,
          actionDelay: 15000,
          matches: [
            '@ImageView[clickable=true] < RelativeLayout + LinearLayout + LinearLayout <n [id="android:id/action_bar"]', //二级广告页
          ],
        },
        {
          key: 2,
          matches: [
            '@[text$="跳过"][clickable=true] - [text="已获得奖励"] - [text="免"] < [id="close_btn"] - [text="反馈"]',
          ],
        },
        {
          key: 3,
          matches: [
            '[text="反馈"] + @[id="close_btn"][clickable=true] +n * > [text~="马上去看看|进入游戏"]',
          ],
        },
      ],
    },
    {
      key: 95,
      name: '看视频-跳过-<sigmob',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[id="app"] > [text="反馈"] -n @View[clickable=true] > View > [text=""]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['[id="app"] > [text="反馈"] -n @TextView[clickable=true]'],
        },
      ],
    },
    {
      key: 96,
      name: '看视频-跳过-sigmob',
      matchRoot: true,
      matchDelay: 1000,
      forcedTime: 60000,
      resetMatch: 'activity',
      activityIds: [
        'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
        'com.sigmob.sdk.base.common.AdActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[id="app"] > View > [id="ad_area"] > View > View > @[text="跳过"][id="close_btn"][clickable=true]',
          ],
        },
        {
          key: 1,
          matches: [
            '@ImageView[clickable=true] < RelativeLayout < [id="android:id/action_bar"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[id="app"] > View > [id="ad_area"] > [text="反馈"] + @TextView[clickable=true]',
          ],
        },
      ],
    },
    //看视频-com.ubix.ssp.open.comm.UBiXVideoActivity
    {
      key: 100,
      name: '看视频-跳过-点击广告并停留*秒即可获取奖励',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.ubix.ssp.open.comm.UBiXVideoActivity',
        'com.ubix.ssp.open.comm.UBiXWebViewActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          matches: ['@TextView[clickable=true] -n [text="5秒更快拿奖励"]'],
        },
        {
          key: 1,
          matches: [
            '@[text~="关闭广告|继续看广告"] - TextView[clickable=true] -n [text="恭喜获得奖励"]',
          ],
        },
        {
          key: 2,
          actionDelay: 1000,
          matches: [
            '[getChild(0).getChild(3).name$="TextView"] -n @ImageView[clickable=true] - [text="恭喜获得奖励"]',
          ],
        },
      ],
    },
    //看视频-com.windmill.sdk.widget.InterstitialView_*
    {
      key: 110,
      name: '看视频-广告-关闭',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="tobid_interstitial_skip_ll"][clickable=true] > [text="关闭"][vid="tobid_interstitial_skip_text"]',
          ],
          activityIds: [
            'com.windmill.sdk.widget.InterstitialView_4012001',
            'com.windmill.sdk.widget.InterstitialView_4012003',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 400,
      name: '隐私保护指引-暂不开启',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="暂不开启"][vid="term_first_btn"][clickable=true] -n [text="隐私保护指引"][vid="term_title"]',
          ],
          activityIds: ['com.baidu.baidumaps.guide.TermsActivity'],
        },
      ],
    },
    {
      key: 401,
      name: '开启推送通知-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="push_close"][clickable=true] - * > [vid="imgGif"] + * > [text="以后再说"][vid="cancel"] + [text="去开启"][vid="go_setting"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
  ],
});
