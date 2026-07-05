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
    //蚂蚁投资者教育基地
    {
      key: 3,
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
      key: 4,
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
      key: 5,
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
      key: 6,
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
      key: 7,
      name: '蚂蚁投资者教育基地-选择题',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'none',
          matches: ['@[text="单选题"] <<n [id$="/h5_trans_progress_rl"]'],
          snapshotUrls: ['https://i.gkd.li/i/23567048'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
          ],
        },
      ],
    },
    {
      key: 8,
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
    //赚工分
    {
      key: 15,
      name: '赚工分-去完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: ['@[text="去完成"] -n [text="80q"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '赚工分-任务完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: ['@[desc="返回"] <<n * [text="Smallfish App"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '赚工分-已完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: ['@[desc="返回"] <<n * [desc$="bridge.html"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
  ],
});
