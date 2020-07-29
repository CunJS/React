import Mock from 'mockjs';
Mock.setup({
    timeout: 5000,
});
const Random = Mock.Random;
// 设置的模拟数据
const data = Mock.mock([
    {
        key: 'A',
        'mails|10-10': [
            {
                'id|+1': 1,
                name: Random.first(),
                img: Random.image(),
                addr: Random.county(true),
                email: Random.email(),
                company: '华云数据有限公司',
                phone: 13222332233,
            },
        ],
    },
    {
        key: 'B',
        'mails|10-10': [
            {
                'id|+1': 1,
                name: Random.first(),
                img: Random.image(),
                addr: Random.county(true),
                email: Random.email(),
                company: '华云数据有限公司',
                phone: 13222332233,
            },
        ],
    },
    {
        key: 'C',
        'mails|10-10': [
            {
                'id|+1': 1,
                name: Random.first(),
                img: Random.image(),
                addr: Random.county(true),
                email: Random.email(),
                company: '华云数据有限公司',
                phone: 13222332233,
            },
        ],
    },
    {
        key: 'D',
        'mails|10-10': [
            {
                'id|+1': 1,
                name: Random.first(),
                img: Random.image(),
                addr: Random.county(true),
                email: Random.email(),
                company: '华云数据有限公司',
                phone: 13222332233,
            },
        ],
    },
    {
        key: 'E',
        'mails|10-10': [
            {
                'id|+1': 1,
                name: Random.first(),
                img: Random.image(),
                addr: Random.county(true),
                email: Random.email(),
                company: '华云数据有限公司',
                phone: 13222332233,
            },
        ],
    },
]);

// 接口，第一个参数url，第二个参数请求类型，第三个参数响应回调
Mock.mock('/mail/list', 'get', res => {
    return {
        data,
    };
});
