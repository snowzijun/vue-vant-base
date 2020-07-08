module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        // 新功能（feature）
        'feat',
        // 修补bug
        'fix',
        // 文档（documentation）
        'docs',
        // 格式（不影响代码运行的变动）
        'style',
        // 重构（即不是新增功能，也不是修改bug的代码变动）
        'refactor',
        // 增加测试
        'test',
        // 回滚
        'revert',
        // 构建过程或辅助工具的变动
        'config',
        // 其他改动
        'chore'
      ]
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
}
