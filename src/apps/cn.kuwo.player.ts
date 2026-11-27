import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.kuwo.player',
  name: '酷我音乐',
  groups: [
    //金币提现
    //每天0:00,09:00,13:00,17:00,20:00刷新提现额度；金币有效期为金币获得后的60个自然日，记得尽快兑换喔～
    {
      key: 0,
      name: '金币提现-8.8元',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.activities.MainActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@TextView[clickable=true] -4 [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '[text="需要88000金币"] <n @View[clickable=true] -5 [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="提现次数用光"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="需要88000金币"] <n @View[clickable=true] -5 [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '@[text="提现次数用光"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '金币提现-2元',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.activities.MainActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@TextView[clickable=true] -4 [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '[text="需要20000金币"] <n @View[clickable=true] -5 [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="提现次数用光"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="需要20000金币"] <n @View[clickable=true] -5 [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '@[text="提现次数用光"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '金币提现-1元',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.activities.MainActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@TextView[clickable=true] -4 [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '[text="需要10000金币"] <n @View[clickable=true] -5 [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="提现次数用光"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="需要10000金币"] <n @View[clickable=true] -5 [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '@[text="提现次数用光"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[desc="跳过"][vid="btnSkip"]',
            '[text="跳过"][vid="qq_skip_button"] < FrameLayout < @LinearLayout[clickable=true]',
            '[text="跳过"][vid="smallLogo_tvSkip"] < @[vid="smallLogo_rlSkip"][clickable=true]',
          ],
          activityIds: ['.activities.EntryActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '弹窗广告-×',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@TextView[clickable=true] < View < View <n View < WebView < WebView < [vid="webView"]',
            '@ImageView[vid="iv_business_personal_dia_close"][clickable=true] <n LinearLayout < RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['.activities.MainActivity'],
        },
      ],
    },
  ],
});
