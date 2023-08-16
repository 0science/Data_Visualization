(function() {
    var myChart1 = echarts.init(document.getElementById('main1'));
    var option1 = {
        title: { //标题样式
            text: '川金丝猴分布',
            x: "center",
            textStyle: {
                fontSize: 18,
                color: "black"
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                console.log(params)
                if (params.name) {
                    return params.name + ' : ' + (isNaN(params.value) ? 0 : parseInt(params.value));
                }
            }
        },
        visualMap: { //视觉映射组件
            top: 'bottom',
            left: 'left',
            min: 0,
            max: 1,
            //text: ['High', 'Low'],
            realtime: false, //拖拽时，是否实时更新
            calculable: true, //是否显示拖拽用的手柄
            inRange: {
                color: ['Beige', 'green']
            }
        },
        series: [{
            name: '模拟数据',
            type: 'map',
            mapType: 'china',
            roam: false, //是否开启鼠标缩放和平移漫游
            itemStyle: { //地图区域的多边形 图形样式
                normal: { //是图形在默认状态下的样式
                    label: {
                        show: true, //是否显示标签
                        textStyle: {
                            color: "black"
                        }
                    }
                },
                zoom: 1.5, //地图缩放比例,默认为1
                emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label: {
                        show: true
                    }
                }
            },
            top: "3%", //组件距离容器的距离
            data: [{
                name: '北京',
                value: 0
            }, {
                name: '天津',
                value: 0
            }, {
                name: '上海',
                value: 0
            }, {
                name: '重庆',
                value: 0
            }, {
                name: '河北',
                value: 0
            }, {
                name: '河南',
                value: 0
            }, {
                name: '云南',
                value: 0
            }, {
                name: '辽宁',
                value: 0
            }, {
                name: '黑龙江',
                value: 0
            }, {
                name: '湖南',
                value: 0
            }, {
                name: '安徽',
                value: 0
            }, {
                name: '山东',
                value: 0
            }, {
                name: '新疆',
                value: 0
            }, {
                name: '江苏',
                value: 0
            }, {
                name: '浙江',
                value: 0
            }, {
                name: '江西',
                value: 0
            }, {
                name: '湖北',
                value: 1
            }, {
                name: '广西',
                value: 0
            }, {
                name: '甘肃',
                value: 1
            }, {
                name: '山西',
                value: 0
            }, {
                name: '内蒙古',
                value: 0
            }, {
                name: '陕西',
                value: 1
            }, {
                name: '吉林',
                value: 0
            }, {
                name: '福建',
                value: 0
            }, {
                name: '贵州',
                value: 0
            }, {
                name: '广东',
                value: 0
            }, {
                name: '青海',
                value: 0
            }, {
                name: '西藏',
                value: 0
            }, {
                name: '四川',
                value: 1
            }, {
                name: '宁夏',
                value: 0
            }, {
                name: '海南',
                value: 0
            }, {
                name: '台湾',
                value: 0
            }, {
                name: '香港',
                value: 0
            }, {
                name: '澳门',
                value: 0
            }]
        }]
    };

    // 为echarts对象加载数据
    myChart1.setOption(option1);
    var myChart2 = echarts.init(document.getElementById('main2'));
    var option2 = {
        title: { //标题样式
            text: '中华白海豚分布',
            x: "center",
            textStyle: {
                fontSize: 18,
                color: "black"
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                console.log(params)
                if (params.name) {
                    return params.name + ' : ' + (isNaN(params.value) ? 0 : parseInt(params.value));
                }
            }
        },
        visualMap: { //视觉映射组件
            top: 'bottom',
            left: 'left',
            min: 0,
            max: 1,
            //text: ['High', 'Low'],
            realtime: false, //拖拽时，是否实时更新
            calculable: true, //是否显示拖拽用的手柄
            inRange: {
                color: ['Beige', 'green']
            }
        },
        series: [{
            name: '模拟数据',
            type: 'map',
            mapType: 'china',
            roam: false, //是否开启鼠标缩放和平移漫游
            itemStyle: { //地图区域的多边形 图形样式
                normal: { //是图形在默认状态下的样式
                    label: {
                        show: true, //是否显示标签
                        textStyle: {
                            color: "black"
                        }
                    }
                },
                zoom: 1.5, //地图缩放比例,默认为1
                emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label: {
                        show: true
                    }
                }
            },
            top: "3%", //组件距离容器的距离
            data: [{
                name: '北京',
                value: 0
            }, {
                name: '天津',
                value: 0
            }, {
                name: '上海',
                value: 0
            }, {
                name: '重庆',
                value: 0
            }, {
                name: '河北',
                value: 0
            }, {
                name: '河南',
                value: 0
            }, {
                name: '云南',
                value: 0
            }, {
                name: '辽宁',
                value: 0
            }, {
                name: '黑龙江',
                value: 0
            }, {
                name: '湖南',
                value: 0
            }, {
                name: '安徽',
                value: 0
            }, {
                name: '山东',
                value: 0
            }, {
                name: '新疆',
                value: 0
            }, {
                name: '江苏',
                value: 0
            }, {
                name: '浙江',
                value: 0
            }, {
                name: '江西',
                value: 0
            }, {
                name: '湖北',
                value: 0
            }, {
                name: '广西',
                value: 0
            }, {
                name: '甘肃',
                value: 0
            }, {
                name: '山西',
                value: 0
            }, {
                name: '内蒙古',
                value: 0
            }, {
                name: '陕西',
                value: 0
            }, {
                name: '吉林',
                value: 0
            }, {
                name: '福建',
                value: 0
            }, {
                name: '贵州',
                value: 0
            }, {
                name: '广东',
                value: 1
            }, {
                name: '青海',
                value: 0
            }, {
                name: '西藏',
                value: 0
            }, {
                name: '四川',
                value: 0
            }, {
                name: '宁夏',
                value: 0
            }, {
                name: '海南',
                value: 0
            }, {
                name: '台湾',
                value: 0
            }, {
                name: '香港',
                value: 0
            }, {
                name: '澳门',
                value: 0
            }]
        }]
    };
    myChart2.setOption(option2);
    var myChart3 = echarts.init(document.getElementById('main3'));
    var option3 = {
        title: { //标题样式
            text: '丹顶鹤分布',
            x: "center",
            textStyle: {
                fontSize: 18,
                color: "black"
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                console.log(params)
                if (params.name) {
                    return params.name + ' : ' + (isNaN(params.value) ? 0 : parseInt(params.value));
                }
            }
        },
        visualMap: { //视觉映射组件
            top: 'bottom',
            left: 'left',
            min: 0,
            max: 1,
            //text: ['High', 'Low'],
            realtime: false, //拖拽时，是否实时更新
            calculable: true, //是否显示拖拽用的手柄
            inRange: {
                color: ['Beige', 'green']
            }
        },
        series: [{
            name: '模拟数据',
            type: 'map',
            mapType: 'china',
            roam: false, //是否开启鼠标缩放和平移漫游
            itemStyle: { //地图区域的多边形 图形样式
                normal: { //是图形在默认状态下的样式
                    label: {
                        show: true, //是否显示标签
                        textStyle: {
                            color: "black"
                        }
                    }
                },
                zoom: 1.5, //地图缩放比例,默认为1
                emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label: {
                        show: true
                    }
                }
            },
            top: "3%", //组件距离容器的距离
            data: [{
                name: '北京',
                value: 0
            }, {
                name: '天津',
                value: 1
            }, {
                name: '上海',
                value: 0
            }, {
                name: '重庆',
                value: 0
            }, {
                name: '河北',
                value: 1
            }, {
                name: '河南',
                value: 1
            }, {
                name: '云南',
                value: 1
            }, {
                name: '辽宁',
                value: 1
            }, {
                name: '黑龙江',
                value: 1
            }, {
                name: '湖南',
                value: 0
            }, {
                name: '安徽',
                value: 1
            }, {
                name: '山东',
                value: 1
            }, {
                name: '新疆',
                value: 0
            }, {
                name: '江苏',
                value: 1
            }, {
                name: '浙江',
                value: 0
            }, {
                name: '江西',
                value: 1
            }, {
                name: '湖北',
                value: 1
            }, {
                name: '广西',
                value: 0
            }, {
                name: '甘肃',
                value: 0
            }, {
                name: '山西',
                value: 0
            }, {
                name: '内蒙古',
                value: 1
            }, {
                name: '陕西',
                value: 1
            }, {
                name: '吉林',
                value: 1
            }, {
                name: '福建',
                value: 0
            }, {
                name: '贵州',
                value: 0
            }, {
                name: '广东',
                value: 0
            }, {
                name: '青海',
                value: 0
            }, {
                name: '西藏',
                value: 0
            }, {
                name: '四川',
                value: 0
            }, {
                name: '宁夏',
                value: 0
            }, {
                name: '海南',
                value: 0
            }, {
                name: '台湾',
                value: 1
            }, {
                name: '香港',
                value: 0
            }, {
                name: '澳门',
                value: 0
            }]
        }]
    };
    myChart3.setOption(option3);

    var myChart4 = echarts.init(document.getElementById('main4'));
    var option4 = {
        title: { //标题样式
            text: '朱鹮分布',
            x: "center",
            textStyle: {
                fontSize: 18,
                color: "black"
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                console.log(params)
                if (params.name) {
                    return params.name + ' : ' + (isNaN(params.value) ? 0 : parseInt(params.value));
                }
            }
        },
        visualMap: { //视觉映射组件
            top: 'bottom',
            left: 'left',
            min: 0,
            max: 1,
            //text: ['High', 'Low'],
            realtime: false, //拖拽时，是否实时更新
            calculable: true, //是否显示拖拽用的手柄
            inRange: {
                color: ['Beige', 'green']
            }
        },
        series: [{
            name: '模拟数据',
            type: 'map',
            mapType: 'china',
            roam: false, //是否开启鼠标缩放和平移漫游
            itemStyle: { //地图区域的多边形 图形样式
                normal: { //是图形在默认状态下的样式
                    label: {
                        show: true, //是否显示标签
                        textStyle: {
                            color: "black"
                        }
                    }
                },
                zoom: 1.5, //地图缩放比例,默认为1
                emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label: {
                        show: true
                    }
                }
            },
            top: "3%", //组件距离容器的距离
            data: [{
                name: '北京',
                value: 0
            }, {
                name: '天津',
                value: 0
            }, {
                name: '上海',
                value: 0
            }, {
                name: '重庆',
                value: 0
            }, {
                name: '河北',
                value: 0
            }, {
                name: '河南',
                value: 0
            }, {
                name: '云南',
                value: 0
            }, {
                name: '辽宁',
                value: 0
            }, {
                name: '黑龙江',
                value: 0
            }, {
                name: '湖南',
                value: 0
            }, {
                name: '安徽',
                value: 0
            }, {
                name: '山东',
                value: 0
            }, {
                name: '新疆',
                value: 0
            }, {
                name: '江苏',
                value: 0
            }, {
                name: '浙江',
                value: 0
            }, {
                name: '江西',
                value: 0
            }, {
                name: '湖北',
                value: 0
            }, {
                name: '广西',
                value: 0
            }, {
                name: '甘肃',
                value: 0
            }, {
                name: '山西',
                value: 0
            }, {
                name: '内蒙古',
                value: 0
            }, {
                name: '陕西',
                value: 1
            }, {
                name: '吉林',
                value: 0
            }, {
                name: '福建',
                value: 0
            }, {
                name: '贵州',
                value: 0
            }, {
                name: '广东',
                value: 0
            }, {
                name: '青海',
                value: 0
            }, {
                name: '西藏',
                value: 0
            }, {
                name: '四川',
                value: 0
            }, {
                name: '宁夏',
                value: 0
            }, {
                name: '海南',
                value: 0
            }, {
                name: '台湾',
                value: 0
            }, {
                name: '香港',
                value: 0
            }, {
                name: '澳门',
                value: 0
            }]
        }]
    };
    myChart4.setOption(option4);

    var myChart5 = echarts.init(document.getElementById('main5'));
    var option5 = {
        title: { //标题样式
            text: '褐马鸡分布',
            x: "center",
            textStyle: {
                fontSize: 18,
                color: "black"
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                console.log(params)
                if (params.name) {
                    return params.name + ' : ' + (isNaN(params.value) ? 0 : parseInt(params.value));
                }
            }
        },
        visualMap: { //视觉映射组件
            top: 'bottom',
            left: 'left',
            min: 0,
            max: 1,
            //text: ['High', 'Low'],
            realtime: false, //拖拽时，是否实时更新
            calculable: true, //是否显示拖拽用的手柄
            inRange: {
                color: ['Beige', 'green']
            }
        },
        series: [{
            name: '模拟数据',
            type: 'map',
            mapType: 'china',
            roam: false, //是否开启鼠标缩放和平移漫游
            itemStyle: { //地图区域的多边形 图形样式
                normal: { //是图形在默认状态下的样式
                    label: {
                        show: true, //是否显示标签
                        textStyle: {
                            color: "black"
                        }
                    }
                },
                zoom: 1.5, //地图缩放比例,默认为1
                emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label: {
                        show: true
                    }
                }
            },
            top: "3%", //组件距离容器的距离
            data: [{
                name: '北京',
                value: 0
            }, {
                name: '天津',
                value: 0
            }, {
                name: '上海',
                value: 0
            }, {
                name: '重庆',
                value: 0
            }, {
                name: '河北',
                value: 1
            }, {
                name: '河南',
                value: 0
            }, {
                name: '云南',
                value: 0
            }, {
                name: '辽宁',
                value: 0
            }, {
                name: '黑龙江',
                value: 0
            }, {
                name: '湖南',
                value: 0
            }, {
                name: '安徽',
                value: 0
            }, {
                name: '山东',
                value: 0
            }, {
                name: '新疆',
                value: 0
            }, {
                name: '江苏',
                value: 0
            }, {
                name: '浙江',
                value: 0
            }, {
                name: '江西',
                value: 0
            }, {
                name: '湖北',
                value: 0
            }, {
                name: '广西',
                value: 0
            }, {
                name: '甘肃',
                value: 0
            }, {
                name: '山西',
                value: 1
            }, {
                name: '内蒙古',
                value: 0
            }, {
                name: '陕西',
                value: 1
            }, {
                name: '吉林',
                value: 0
            }, {
                name: '福建',
                value: 0
            }, {
                name: '贵州',
                value: 0
            }, {
                name: '广东',
                value: 0
            }, {
                name: '青海',
                value: 0
            }, {
                name: '西藏',
                value: 0
            }, {
                name: '四川',
                value: 0
            }, {
                name: '宁夏',
                value: 0
            }, {
                name: '海南',
                value: 0
            }, {
                name: '台湾',
                value: 0
            }, {
                name: '香港',
                value: 0
            }, {
                name: '澳门',
                value: 0
            }]
        }]
    };
    myChart5.setOption(option5);

    var myChart6 = echarts.init(document.getElementById('main6'));
    var option6 = {
        title: { //标题样式
            text: '白鳍豚分布',
            x: "center",
            textStyle: {
                fontSize: 18,
                color: "black"
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                console.log(params)
                if (params.name) {
                    return params.name + ' : ' + (isNaN(params.value) ? 0 : parseInt(params.value));
                }
            }
        },
        visualMap: { //视觉映射组件
            top: 'bottom',
            left: 'left',
            min: 0,
            max: 1,
            //text: ['High', 'Low'],
            realtime: false, //拖拽时，是否实时更新
            calculable: true, //是否显示拖拽用的手柄
            inRange: {
                color: ['Beige', 'green']
            }
        },
        series: [{
            name: '模拟数据',
            type: 'map',
            mapType: 'china',
            roam: false, //是否开启鼠标缩放和平移漫游
            itemStyle: { //地图区域的多边形 图形样式
                normal: { //是图形在默认状态下的样式
                    label: {
                        show: true, //是否显示标签
                        textStyle: {
                            color: "black"
                        }
                    }
                },
                zoom: 1.5, //地图缩放比例,默认为1
                emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label: {
                        show: true
                    }
                }
            },
            top: "3%", //组件距离容器的距离
            data: [{
                name: '北京',
                value: 0
            }, {
                name: '天津',
                value: 0
            }, {
                name: '上海',
                value: 0
            }, {
                name: '重庆',
                value: 0
            }, {
                name: '河北',
                value: 0
            }, {
                name: '河南',
                value: 0
            }, {
                name: '云南',
                value: 0
            }, {
                name: '辽宁',
                value: 0
            }, {
                name: '黑龙江',
                value: 0
            }, {
                name: '湖南',
                value: 0
            }, {
                name: '安徽',
                value: 0
            }, {
                name: '山东',
                value: 0
            }, {
                name: '新疆',
                value: 0
            }, {
                name: '江苏',
                value: 0
            }, {
                name: '浙江',
                value: 0
            }, {
                name: '江西',
                value: 0
            }, {
                name: '湖北',
                value: 0
            }, {
                name: '广西',
                value: 0
            }, {
                name: '甘肃',
                value: 0
            }, {
                name: '山西',
                value: 0
            }, {
                name: '内蒙古',
                value: 0
            }, {
                name: '陕西',
                value: 0
            }, {
                name: '吉林',
                value: 0
            }, {
                name: '福建',
                value: 0
            }, {
                name: '贵州',
                value: 0
            }, {
                name: '广东',
                value: 0
            }, {
                name: '青海',
                value: 0
            }, {
                name: '西藏',
                value: 0
            }, {
                name: '四川',
                value: 0
            }, {
                name: '宁夏',
                value: 0
            }, {
                name: '海南',
                value: 0
            }, {
                name: '台湾',
                value: 0
            }, {
                name: '香港',
                value: 0
            }, {
                name: '澳门',
                value: 0
            }]
        }]
    };
    myChart6.setOption(option6);

    var myChart7 = echarts.init(document.getElementById('main7'));
    var option7 = {
        title: { //标题样式
            text: '扬子鳄分布',
            x: "center",
            textStyle: {
                fontSize: 18,
                color: "black"
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                console.log(params)
                if (params.name) {
                    return params.name + ' : ' + (isNaN(params.value) ? 0 : parseInt(params.value));
                }
            }
        },
        visualMap: { //视觉映射组件
            top: 'bottom',
            left: 'left',
            min: 0,
            max: 1,
            //text: ['High', 'Low'],
            realtime: false, //拖拽时，是否实时更新
            calculable: true, //是否显示拖拽用的手柄
            inRange: {
                color: ['Beige', 'green']
            }
        },
        series: [{
            name: '模拟数据',
            type: 'map',
            mapType: 'china',
            roam: false, //是否开启鼠标缩放和平移漫游
            itemStyle: { //地图区域的多边形 图形样式
                normal: { //是图形在默认状态下的样式
                    label: {
                        show: true, //是否显示标签
                        textStyle: {
                            color: "black"
                        }
                    }
                },
                zoom: 1.5, //地图缩放比例,默认为1
                emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label: {
                        show: true
                    }
                }
            },
            top: "3%", //组件距离容器的距离
            data: [{
                name: '北京',
                value: 0
            }, {
                name: '天津',
                value: 0
            }, {
                name: '上海',
                value: 0
            }, {
                name: '重庆',
                value: 0
            }, {
                name: '河北',
                value: 0
            }, {
                name: '河南',
                value: 0
            }, {
                name: '云南',
                value: 0
            }, {
                name: '辽宁',
                value: 0
            }, {
                name: '黑龙江',
                value: 0
            }, {
                name: '湖南',
                value: 0
            }, {
                name: '安徽',
                value: 1
            }, {
                name: '山东',
                value: 0
            }, {
                name: '新疆',
                value: 0
            }, {
                name: '江苏',
                value: 1
            }, {
                name: '浙江',
                value: 1
            }, {
                name: '江西',
                value: 0
            }, {
                name: '湖北',
                value: 0
            }, {
                name: '广西',
                value: 0
            }, {
                name: '甘肃',
                value: 0
            }, {
                name: '山西',
                value: 0
            }, {
                name: '内蒙古',
                value: 0
            }, {
                name: '陕西',
                value: 0
            }, {
                name: '吉林',
                value: 0
            }, {
                name: '福建',
                value: 0
            }, {
                name: '贵州',
                value: 0
            }, {
                name: '广东',
                value: 0
            }, {
                name: '青海',
                value: 0
            }, {
                name: '西藏',
                value: 0
            }, {
                name: '四川',
                value: 0
            }, {
                name: '宁夏',
                value: 0
            }, {
                name: '海南',
                value: 0
            }, {
                name: '台湾',
                value: 0
            }, {
                name: '香港',
                value: 0
            }, {
                name: '澳门',
                value: 0
            }]
        }]
    };
    myChart7.setOption(option7);

    var myChart8 = echarts.init(document.getElementById('main8'));
    var option8 = {
        title: { //标题样式
            text: '黑颈鹤分布',
            x: "center",
            textStyle: {
                fontSize: 18,
                color: "black"
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                console.log(params)
                if (params.name) {
                    return params.name + ' : ' + (isNaN(params.value) ? 0 : parseInt(params.value));
                }
            }
        },
        visualMap: { //视觉映射组件
            top: 'bottom',
            left: 'left',
            min: 0,
            max: 1,
            //text: ['High', 'Low'],
            realtime: false, //拖拽时，是否实时更新
            calculable: true, //是否显示拖拽用的手柄
            inRange: {
                color: ['Beige', 'green']
            }
        },
        series: [{
            name: '模拟数据',
            type: 'map',
            mapType: 'china',
            roam: false, //是否开启鼠标缩放和平移漫游
            itemStyle: { //地图区域的多边形 图形样式
                normal: { //是图形在默认状态下的样式
                    label: {
                        show: true, //是否显示标签
                        textStyle: {
                            color: "black"
                        }
                    }
                },
                zoom: 1.5, //地图缩放比例,默认为1
                emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label: {
                        show: true
                    }
                }
            },
            top: "3%", //组件距离容器的距离
            data: [{
                name: '北京',
                value: 0
            }, {
                name: '天津',
                value: 0
            }, {
                name: '上海',
                value: 0
            }, {
                name: '重庆',
                value: 0
            }, {
                name: '河北',
                value: 0
            }, {
                name: '河南',
                value: 0
            }, {
                name: '云南',
                value: 1
            }, {
                name: '辽宁',
                value: 0
            }, {
                name: '黑龙江',
                value: 0
            }, {
                name: '湖南',
                value: 0
            }, {
                name: '安徽',
                value: 0
            }, {
                name: '山东',
                value: 0
            }, {
                name: '新疆',
                value: 1
            }, {
                name: '江苏',
                value: 0
            }, {
                name: '浙江',
                value: 0
            }, {
                name: '江西',
                value: 0
            }, {
                name: '湖北',
                value: 0
            }, {
                name: '广西',
                value: 0
            }, {
                name: '甘肃',
                value: 1
            }, {
                name: '山西',
                value: 0
            }, {
                name: '内蒙古',
                value: 0
            }, {
                name: '陕西',
                value: 0
            }, {
                name: '吉林',
                value: 0
            }, {
                name: '福建',
                value: 0
            }, {
                name: '贵州',
                value: 1
            }, {
                name: '广东',
                value: 0
            }, {
                name: '青海',
                value: 1
            }, {
                name: '西藏',
                value: 1
            }, {
                name: '四川',
                value: 1
            }, {
                name: '宁夏',
                value: 0
            }, {
                name: '海南',
                value: 0
            }, {
                name: '台湾',
                value: 0
            }, {
                name: '香港',
                value: 0
            }, {
                name: '澳门',
                value: 0
            }]
        }]
    };
    myChart8.setOption(option8);

    var myChart9 = echarts.init(document.getElementById('main9'));
    var option9 = {
        title: { //标题样式
            text: '麋鹿分布',
            x: "center",
            textStyle: {
                fontSize: 18,
                color: "black"
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                console.log(params)
                if (params.name) {
                    return params.name + ' : ' + (isNaN(params.value) ? 0 : parseInt(params.value));
                }
            }
        },
        visualMap: { //视觉映射组件
            top: 'bottom',
            left: 'left',
            min: 0,
            max: 1,
            //text: ['High', 'Low'],
            realtime: false, //拖拽时，是否实时更新
            calculable: true, //是否显示拖拽用的手柄
            inRange: {
                color: ['Beige', 'green']
            }
        },
        series: [{
            name: '模拟数据',
            type: 'map',
            mapType: 'china',
            roam: false, //是否开启鼠标缩放和平移漫游
            itemStyle: { //地图区域的多边形 图形样式
                normal: { //是图形在默认状态下的样式
                    label: {
                        show: true, //是否显示标签
                        textStyle: {
                            color: "black"
                        }
                    }
                },
                zoom: 1.5, //地图缩放比例,默认为1
                emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label: {
                        show: true
                    }
                }
            },
            top: "3%", //组件距离容器的距离
            data: [{
                name: '北京',
                value: 1
            }, {
                name: '天津',
                value: 0
            }, {
                name: '上海',
                value: 0
            }, {
                name: '重庆',
                value: 0
            }, {
                name: '河北',
                value: 0
            }, {
                name: '河南',
                value: 0
            }, {
                name: '云南',
                value: 0
            }, {
                name: '辽宁',
                value: 0
            }, {
                name: '黑龙江',
                value: 0
            }, {
                name: '湖南',
                value: 0
            }, {
                name: '安徽',
                value: 0
            }, {
                name: '山东',
                value: 0
            }, {
                name: '新疆',
                value: 0
            }, {
                name: '江苏',
                value: 1
            }, {
                name: '浙江',
                value: 0
            }, {
                name: '江西',
                value: 0
            }, {
                name: '湖北',
                value: 0
            }, {
                name: '广西',
                value: 0
            }, {
                name: '甘肃',
                value: 0
            }, {
                name: '山西',
                value: 0
            }, {
                name: '内蒙古',
                value: 0
            }, {
                name: '陕西',
                value: 0
            }, {
                name: '吉林',
                value: 0
            }, {
                name: '福建',
                value: 0
            }, {
                name: '贵州',
                value: 0
            }, {
                name: '广东',
                value: 0
            }, {
                name: '青海',
                value: 0
            }, {
                name: '西藏',
                value: 0
            }, {
                name: '四川',
                value: 0
            }, {
                name: '宁夏',
                value: 0
            }, {
                name: '海南',
                value: 0
            }, {
                name: '台湾',
                value: 0
            }, {
                name: '香港',
                value: 0
            }, {
                name: '澳门',
                value: 0
            }]
        }]
    };
    myChart9.setOption(option9);

    var myChart10 = echarts.init(document.getElementById('main10'));
    var option10 = {
        title: { //标题样式
            text: '华南虎分布',
            x: "center",
            textStyle: {
                fontSize: 18,
                color: "black"
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                console.log(params)
                if (params.name) {
                    return params.name + ' : ' + (isNaN(params.value) ? 0 : parseInt(params.value));
                }
            }
        },
        visualMap: { //视觉映射组件
            top: 'bottom',
            left: 'left',
            min: 0,
            max: 1,
            //text: ['High', 'Low'],
            realtime: false, //拖拽时，是否实时更新
            calculable: true, //是否显示拖拽用的手柄
            inRange: {
                color: ['Beige', 'green']
            }
        },
        series: [{
            name: '模拟数据',
            type: 'map',
            mapType: 'china',
            roam: false, //是否开启鼠标缩放和平移漫游
            itemStyle: { //地图区域的多边形 图形样式
                normal: { //是图形在默认状态下的样式
                    label: {
                        show: true, //是否显示标签
                        textStyle: {
                            color: "black"
                        }
                    }
                },
                zoom: 1.5, //地图缩放比例,默认为1
                emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                    label: {
                        show: true
                    }
                }
            },
            top: "3%", //组件距离容器的距离
            data: [{
                name: '北京',
                value: 0
            }, {
                name: '天津',
                value: 0
            }, {
                name: '上海',
                value: 0
            }, {
                name: '重庆',
                value: 0
            }, {
                name: '河北',
                value: 0
            }, {
                name: '河南',
                value: 1
            }, {
                name: '云南',
                value: 0
            }, {
                name: '辽宁',
                value: 0
            }, {
                name: '黑龙江',
                value: 0
            }, {
                name: '湖南',
                value: 0
            }, {
                name: '安徽',
                value: 0
            }, {
                name: '山东',
                value: 0
            }, {
                name: '新疆',
                value: 0
            }, {
                name: '江苏',
                value: 0
            }, {
                name: '浙江',
                value: 0
            }, {
                name: '江西',
                value: 0
            }, {
                name: '湖北',
                value: 0
            }, {
                name: '广西',
                value: 0
            }, {
                name: '甘肃',
                value: 0
            }, {
                name: '山西',
                value: 0
            }, {
                name: '内蒙古',
                value: 0
            }, {
                name: '陕西',
                value: 0
            }, {
                name: '吉林',
                value: 0
            }, {
                name: '福建',
                value: 1
            }, {
                name: '贵州',
                value: 0
            }, {
                name: '广东',
                value: 0
            }, {
                name: '青海',
                value: 0
            }, {
                name: '西藏',
                value: 0
            }, {
                name: '四川',
                value: 0
            }, {
                name: '宁夏',
                value: 0
            }, {
                name: '海南',
                value: 0
            }, {
                name: '台湾',
                value: 0
            }, {
                name: '香港',
                value: 0
            }, {
                name: '澳门',
                value: 0
            }]
        }]
    };
    myChart10.setOption(option10);
})()