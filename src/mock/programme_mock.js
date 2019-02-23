// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
	let programmes = [];
	for (let i = 0; i < 100; i++) {
		let newProgrammeObject = {
      id: Random.increment(),
			title: Random.title(), //  Random.sentence()
			author_name: Random.name(), // Random.name() 随机生成一个常见的中文姓名
			status: Random.pick(['Published', 'Draft', 'Deleted']) // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
		}
		programmes.push(newProgrammeObject)
	}

	return {
		programmes: programmes
	}
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/programme/list', 'post', produceNewsData);
