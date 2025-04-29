console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)

// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

document.addEventListener('click', hookClick, { capture: true })
// 定义基础 URL 和参数键名
const BASE_URL = 'https://kf.3eeye.com/kefu';
const PARAM_KEY = 'str';

// 检查当前 URL 是否已包含目标参数
if (!window.location.search.includes(`${PARAM_KEY}=`)) {
  let paramValue = localStorage.getItem(PARAM_KEY);

  // 若本地存储无值，则提示用户输入
  if (!paramValue) {
    paramValue = prompt('请输入商家客服工作台ID,在商户中心-更多应用-客服系统-商家客服工作台ID，复制粘贴在此，如输错，卸载工作台重新安装后再次打开用复制粘贴（str 参数值，如 MTU%3D）:');
    if (paramValue) {
      localStorage.setItem(PARAM_KEY, paramValue);
    } else {
      alert('未输入商家客服工作台ID，无法继续访问！');
      window.close(); // 或跳转到错误页面
      return;
    }
  }

  // 编码参数并重定向到完整 URL
  const encodedValue = encodeURIComponent(paramValue);
  const targetUrl = `${BASE_URL}?${PARAM_KEY}=${encodedValue}`;
  window.location.href = targetUrl;
}