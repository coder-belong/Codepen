// 监听折叠面板左侧标题的点击事件
$('.toggle-box .left .list').click(function () {
    // 一、实现手风琴效果，动画在css中
    accordion(this)

    // 二、折叠板右侧切换图片效果
    toggleImg(this)
})

// 折叠板左侧的手风琴特效
function accordion(list) {
    // 判断点击的标题是否处于激活状态
    let isActive = $(list).hasClass('active')

    if (isActive) {
        // 如果处于激活则取消激活状态
        $(list).removeClass('active')
    } else {
        // 排除所有的active类名
        $('.toggle-box .left .list').removeClass('active')
        // 将当前点击到的标题添加active类名
        $(list).addClass('active')
    }
}

// 折叠板右侧切换图片效果
function toggleImg(list) {
    // 二、右侧图片切换特效
    // 获取点击的标题索引
    let index = $(list).index()

    // 2.1 判断当前右侧的图片索引是否与标题索引一致
    let $currentImg = $('.toggle-box .right .hidden-img .active')
    let currentImgIndex = $currentImg.index()

    // 如果一致则不需要执行切换特效
    if (currentImgIndex == index) return

    // 2.2 给上一个active类名添加消失的动画
    $('.toggle-box .right .hidden-img .active').css({
        transition: ' all 1s',
        transform: 'translateY(0px)',
        opacity: "0"
    })

    // 2.3 给要展示的图片添加active类名(排他思想)
    let $allImg = $('.toggle-box .right .hidden-img img')
    $allImg.removeClass('active')
    $allImg.eq(index).addClass('active')

    // 2.4 给类名为avtive的图片添加过渡动画
    $allImg.eq(index).css({
        transition: ' all 1s',
        transform: 'translateY(-90%)',
        opacity: "1"
    })
}

// 监听展开图标的点击
let showAside = false // 记录侧边栏的展示
$('.main header .expand .expand-icon').on('click', function () {
    showAside = !showAside
    if (showAside) {
        // 展示侧边栏
        $('aside').css({
            display: 'block',
            marginTop: "80px",
            height: "85vh",
        })
        // 更改图标
        $(this).attr('src', '../assets/images/meun_up.png')

    } else {
        // 隐藏侧边栏
        $('aside').css({
            display: 'none',
            height: "0vh",
        })
        // 更改图标
        $(this).attr('src', '../assets/images/expand.png')
    }

})

