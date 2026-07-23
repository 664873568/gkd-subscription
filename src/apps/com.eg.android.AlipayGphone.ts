import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    //网商财神
    {
      key: 0,
      name: '网商财神-开红包-×',
      matchRoot: true,
      actionMaximum: 1,
      forcedTime: 5000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@TextView -n * < * -n * <<n [id="ant-render-id-CPT_67f7a08a088a0168e4b61c05"]',
            '@TextView -n * < * -n * < * < * -n * <<n [id="ant-render-id-CPT_67f7a204088a0168e4b61c07"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '网商财神-开红包-完成任务',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: ['@[text="Smallfish App"] >n [text="任务完成"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '网商财神-开红包-继续迎财神',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@TextView <n * <n * -n * <<n [id="ant-render-id-CPT_67f7a204088a0168e4b61c07"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '芝麻粒-完成任务',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 35000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="Smallfish App"] >n [text="已浏览完成"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite1',
          ],
        },
      ],
    },
    //蚂蚁投资者教育基地
    {
      key: 10,
      name: '蚂蚁投资者教育基地-出发寻宝',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: ['@[text="出发寻宝"] <<n [id="ppage-index-index"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '蚂蚁投资者教育基地-立即打开',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="立即打开"] <<n [id="ppage-index-index"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '蚂蚁投资者教育基地-收下并继续探险',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="收下并继续探险"] <<n [id="ppage-index-index"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '蚂蚁投资者教育基地-去完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="去完成"] <<n [id="ppage-index-index"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: ['[id$="backButton"] <<n *[desc="返回"]'],
          snapshotUrls: ['https://i.gkd.li/i/23567088'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '蚂蚁投资者教育基地-收下了',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="收下了"] <<n [id="ppage-index-index"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '蚂蚁投资者教育基地-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@[id$="ic_back_btn"] <<n * [text="蚂蚁投资者教育基地"][id$="left_author_name"]',
          ],
          activityIds: [
            'com.alipay.android.living.activity.LivingDetailActivity',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '蚂蚁投资者教育基地-选择题',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'none',
          matches: ['@[text="单选题"] <<n [id$="h5_trans_progress_rl"]'],
          snapshotUrls: ['https://i.gkd.li/i/23567048'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
          ],
        },
      ],
    },
    //赚工分
    {
      key: 20,
      name: '赚工分-去完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 3000,
          matches: ['@[text="去完成"] -n [text="80q"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '赚工分-任务完成-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 15000,
          matches: ['@[desc="返回"] <<n * [text="Smallfish App"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '赚工分-任务完成-⊙',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 15000,
          matches: ['@[desc="关闭"] <<n * [text="Smallfish App"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App02',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '赚工分-已完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 15000,
          matches: ['@[desc="返回"] <<n * [desc$="bridge.html"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    //充鸭攒话费
    {
      key: 30,
      name: '充鸭攒话费-签到',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="签到"] -2 [text="今天"] <<n [id="__react-content"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
    {
      key: 32,
      name: '充鸭攒话费-正在跳转-返回',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@TextView[text="正在跳转"] <<n * WebView[text="正在跳转"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    //游戏中心
    {
      key: 40,
      name: '任务已完成-返回领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 31000,
          matches: [
            '@TextView[clickable=true] <<n [text="悬浮球模版"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite2',
          ],
        },
      ],
    },
  ],
});
