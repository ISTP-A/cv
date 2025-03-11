import { User } from '~/types/user'

export const mock_user: User = {
  name: '김상훈',
  en_name: 'KIM SANG HUN',
  introduction: '프론트엔드 개발자 김상훈입니다',
  birth: new Date('1997-05-29'),
  phone: '010-0000-0000',
  email: 'schmid_t@kakao.com',
  sns: [
    {
      type: 'intargram',
      name: '@huhuhunuhuhn',
      link: 'https://www.instagram.com/huhunuhunhu',
    },
    {
      type: 'github',
      name: 'ISTP-A',
      link: 'https://github.com/ISTP-A',
    },
  ],
}
