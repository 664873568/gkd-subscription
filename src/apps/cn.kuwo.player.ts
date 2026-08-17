import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.kuwo.player',
  name: '酷我音乐',
  groups: [
    //金币提现
    //每天0:00,09:00,13:00,17:00,20:00刷新提现额度；金币有效期为金币获得后的60个自然日，记得尽快兑换喔～
    {
      key: 10,
      name: '金币提现-跳过',
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.activities.MainActivity'],
      rules: [
        {
          excludeAllMatches: [
            '[text="金币提现"] +n @[text="确认提现"][clickable=true]',
            '[text="金币提现"] +n @View[index=8][clickable=true] > [text="需要20000金币"]',
          ],
          matches: ['[text="金币提现"] +4 @TextView[clickable=true]'],
        },
        {
          matches: [
            '[text="金币提现"] +n @View[index=9][clickable=true] > [text="需要20000金币"]',
          ],
        },
        {
          excludeMatches: [
            '[text="金币提现"] +n @View[index=8][clickable=true] > [text="拆现金红包"]',
          ],
          matches: ['[text="金币提现"] +n @[text="确认提现"][clickable=true]'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '首页-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@TextView[clickable=true] +n [text="开通会员畅听VIP海量曲库"]',
          ],
          activityIds: ['.activities.MainActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[desc="跳过"][vid="btnSkip"]',
            '@[text="跳过"][vid="qq_skip_button"]',
            '[text="跳过"][vid="smallLogo_tvSkip"] < @[vid="smallLogo_rlSkip"][clickable=true]',
          ],
          activityIds: ['.activities.EntryActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '召回弹窗',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@TextView <<5 [text="召回弹窗"]'],
          activityIds: ['.activities.MainActivity'],
        },
      ],
    },
  ],
});
