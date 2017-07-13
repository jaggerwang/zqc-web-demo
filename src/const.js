/**
 * 在球场
 * zaiqiuchang.com
 */

export const ENV_NAMES = {
  production: '生产',
  testing: '测试',
  development: '开发'
}

export const GENDERS = [
  {label: '男', value: 'm'},
  {label: '女', value: 'f'}
]

export const RES_USER_AVATARS = new Map([
  ['american-football-player-1',
    require('./assets/avatar/american-football-player-1.png')],
  ['american-football-player',
    require('./assets/avatar/american-football-player.png')],
  ['baseball-player',
    require('./assets/avatar/baseball-player.png')],
  ['basketball-player',
    require('./assets/avatar/basketball-player.png')],
  ['bodybuilder', require('./assets/avatar/bodybuilder.png')],
  ['cricket-player', require('./assets/avatar/cricket-player.png')],
  ['cyclist-1', require('./assets/avatar/cyclist-1.png')],
  ['cyclist', require('./assets/avatar/cyclist.png')],
  ['fencer', require('./assets/avatar/fencer.png')],
  ['football-player',
    require('./assets/avatar/football-player.png')],
  ['formula-1', require('./assets/avatar/formula-1.png')],
  ['golfer', require('./assets/avatar/golfer.png')],
  ['gymnast', require('./assets/avatar/gymnast.png')],
  ['hockey-player', require('./assets/avatar/hockey-player.png')],
  ['horsewoman', require('./assets/avatar/horsewoman.png')],
  ['karate', require('./assets/avatar/karate.png')],
  ['kickboxer', require('./assets/avatar/kickboxer.png')],
  ['kudo', require('./assets/avatar/kudo.png')],
  ['motorcyclist', require('./assets/avatar/motorcyclist.png')],
  ['pilot', require('./assets/avatar/pilot.png')],
  ['rowing', require('./assets/avatar/rowing.png')],
  ['shooter', require('./assets/avatar/shooter.png')],
  ['skier-1', require('./assets/avatar/skier-1.png')],
  ['skier', require('./assets/avatar/skier.png')],
  ['sumotori', require('./assets/avatar/sumotori.png')],
  ['swimmer', require('./assets/avatar/swimmer.png')],
  ['taekwondo', require('./assets/avatar/taekwondo.png')],
  ['tennis-player', require('./assets/avatar/tennis-player.png')],
  ['volleyball-player',
    require('./assets/avatar/volleyball-player.png')],
  ['weightlifter', require('./assets/avatar/weightlifter.png')]
])

export const RES_USER_BACKGROUNDS = new Map([
  ['light-circle',
    require('./assets/user-background/light-circle.png')],
  ['juhua', require('./assets/user-background/juhua.png')],
  ['pugongying', require('./assets/user-background/pugongying.png')]
])

export const HOT_CITIES = [
  {name: '全国', code: ''},
  {name: '北京', code: '010'},
  {name: '上海', code: '021'},
  {name: '成都', code: '028'}
]

export const SPORTS = [
  {name: '网球', code: 'tennis', disabled: false},
  {name: '羽毛球', code: 'badminton', disabled: true},
  {name: '高尔夫', code: 'golf', disabled: true}
]

export const VIDEO_RATES = [
  {label: '流畅', value: 'ld', pixelSize: [640, 360]},
  {label: '高清', value: 'hd', pixelSize: [1280, 720]},
  {label: '1080p', value: 'fhd', pixelSize: [1920, 1080]}
]

export const POST_STATUS_NORMAL = 1
export const POST_STATUS_DELETED = 2
