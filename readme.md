运行方法：克隆下来项目之后
	npm install
	gulp
趁着学习ES6的机会，用ES6重构了爱心鱼这个游戏： es6 + gulp + babel
原方法主要使用的是面向对象的方法：
	每一个物体都是一个对象，每一个对象都封装了对应的属性和方法，有一定的模块化的效果；
但是随着ES6的推广，class,extends import export能很好的实现对象的封装实现，所以本着学习的目的
重新的用es6+gulp+babel实现了爱心鱼。主要的改进如下：
	1. 将所有的var删除，替换使用let，块级作用域更加的明显;
	2. 每一个物体类都用一个js文件写，用class constructor import export 代替原来的prototype，使得代码更加的简洁易懂;
	3. 对于类似的物体类。例如鱼妈妈momObj, 鱼宝宝babyObj, 利用extends实现了继承，删除了重复的代码，对于一些细节上的不同，提取了参数（这一块参数略草率）;
	4. 类似的还有waveObj 和 heloObj, heloObj继承了waveObj;
	5. 工具类js文件commonFunctions.js 将其中的工具方法进行了export，然后根据需要import进来每一个需要使用的函数;
	6. main.js文件更加的简洁，将一些碰撞函数，检测果实数量的函数封装进了对应的类中。
未来继续改进的方面：
	1. 函数细节没有进行仔细的改进，for方法或许可以用iteration代替，或者简单的函数可以使用箭头函数；
	2. 函数的扩展性，容错性没有仔细考虑；
	3. canvas游戏都是用的图片进行一帧一帧的绘制，图片较多，导致打开的速度比较慢，还没有想到比较合适的改进方法；


