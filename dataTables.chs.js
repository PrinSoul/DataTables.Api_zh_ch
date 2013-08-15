/*
* Description: jquery.dataTables Chinese Api
* Author: Dooou
* E-Mail: qxfun@outlook.com
* Web: http://www.qxfun.com
* Date: 2013.06
*/
$(document).ready(function () {
    $('selector').dataTable({
        /*
         *  默认为true
         *  是否自动计算列宽，计算列宽会花费一些时间，如果列宽通过aoColumns传递，可以关闭该属性作为优化
         */
        "bAutoWidth": true,
        /*
         *  默认为false
         *  是否延迟渲染，当用Ajax或者js方式加载数据时开启延迟渲染会带来很大的速度提升
         *  当该属性设置为true时，表格每一行新增的元素只有在需要被画出来时才会被DataTable创建出来
         */
        "bDeferRender": false,
        /*
         * 默认为true
         * 是否对数据进行过滤，数据过滤是十分灵活的，允许终端用户输入多个用空格分隔开的关键字
         * 匹配包含这些关键字的行，即使关键字的顺序不是用户输入的顺序，过滤操作会跨列进行匹配，关键字可以分布在一行中不同的列
         * 要注意的是如果你想在DataTable中使用过滤，该选项必须设置为true，如果想移除默认过滤输入框但是保留过滤功能，请设置为false(API没写，推测是false)
         */
        "bFilter": true,
        /*
         * 默认为true
         * 是否显示表格信息，是指当前页面上显示的数据的信息，如果有过滤操作执行，也会显示过滤操作的信息
         */
        "bInfo": true,
        /*
         * 默认为fasle
         * 是否开启jQuery UI ThemeRoller支持，需要一些ThemeRoller使用的标记，这些标记有些与DataTable传统使用的有轻微的差异，有些是额外附加的
         */
        "bJQueryUI": false,
        /*
         * 默认为true
         * 是否允许终端用户从一个选择列表中选择分页的页数，页数为10，25，50和100，需要分页组件bPaginate的支持
         */
        "bLengthChange": false,
        /*
         * 默认为true
         * 是否开启分页功能,即使设置为false,仍然会有一个默认的<前进,后退>分页组件
         */
        "bPaginage": true,
        /*
         * 默认为false
         * 当表格在处理的时候（比如排序操作）是否显示“处理中...”
         * 当表格的数据中的数据过多以至于对其中的记录进行排序时会消耗足以被察觉的时间的时候，该选项会有些用处
         */
        "bProcessing": false,
        /*
         * 默认为false
         * 是否开启不限制长度的滚动条（和sScrollY属性结合使用），不限制长度的滚动条意味着当用户拖动滚动条的时候DataTable会不断加载数据
         * 当数据集十分大的时候会有些用处，该选项无法和分页选项同时使用，分页选项会被自动禁止，注意，额外推荐的滚动条会优先与该选项
         */
        "bScrollInfinite": false,
        /*
         * 默认为false
         * 配置DataTable使用服务器端处理，注意，sAjaxSource参数必须指定，以便给DataTable一个为每一行获取数据的数据源
         */
        "bServerSide": false,
        /*
         * 默认为true
         * 是否开启列排序，对单独列的设置在每一列的bSortable选项中指定
         */
        "bSort": true,
        /*
         * 默认为true
         * 是否在当前被排序的列上额外添加sorting_1,sorting_2,sorting_3三个class，当该列被排序的时候，可以切换其背景颜色
         * 该选项作为一个来回切换的属性会增加执行时间（当class被移除和添加的时候）
         * 当对大数据集进行排序的时候你或许希望关闭该选项
         */
        "bSortClasses": true,
        /*
         * 默认为false
         * 是否开启状态保存，当选项开启的时候会使用一个cookie保存表格展示的信息的状态，例如分页信息，展示长度，过滤和排序等
         * 这样当终端用户重新加载这个页面的时候可以使用以前的设置
         */
        "bStateSave": false,
        /*
         * 默认为空字符串，即：无效
         * 是否开启水平滚动，当一个表格过于宽以至于无法放入一个布局的时候，或者表格有太多列的时候，你可以开启该选项
         * 从而在一个可横向滚动的视图里面展示表格，该属性可以是css设置，或者一个数字（作为像素量度来使用）
         */
        "sScrollX": "100%",
        /*
         * 默认为空字符串，即：无效
         * 是否开启垂直滚动，垂直滚动会驱使DataTable设置为给定的长度，任何溢出到当前视图之外的数据可以通过垂直滚动进行察看
         * 当在小范围区域中显示大量数据的时候，可以在分页和垂直滚动中选择一种方式，该属性可以是css设置，或者一个数字（作为像素量度来使用）
         */
        "sScrollY": "100%",
        /*
         * 自定义语言设置
         */
        "oLanguage": {
            "oAria": {
                /*
                 * 默认值为activate to sort column ascending
                 * 当一列被按照升序排序的时候添加到表头的ARIA标签，注意列头是这个字符串的前缀（？）
                 */
                "sSortAscending": " - click/return to sort ascending",
                /*
                 * 默认值为activate to sort column ascending
                 * 当一列被按照升序降序的时候添加到表头的ARIA标签，注意列头是这个字符串的前缀（？）
                 */
                "sSortDescending": " - click/return to sort descending"
            },
            "oPaginate": {
                /*
                 * 默认值为First
                 * 当使用全数字类型的分页组件的时候，到第一页按钮上的文字
                 */
                "sFirst": "First page",
                /*
                 * 默认值为Last
                 * 当使用全数字类型的分页组件的时候，到最后一页按钮上的文字
                 */
                "sLast": "Last page",
                /*
                 * 默认值为Next
                 * 当使用全数字类型的分页组件的时候，到下一页按钮上的文字
                 */
                "sNext": "Next page",
                /*
                 * 默认值为Previous
                 * 当使用全数字类型的分页组件的时候，到前一页按钮上的文字
                 */
                "sPrevious": "Previous page"
            },
            /*
             * 默认值activate to sort column ascending为
             * 当表格中没有数据（无视因为过滤导致的没有数据）时，该字符串年优先与sZeroRecords显示
             * 注意这是个可选参数，如果没有指定，sZeroRecrods会被使用（既不是默认值也不是给定的值）
             */
            "sEmptyTable": "No data available in table",
            /*
             * 默认值为Showing _START_ to _END_ of _TOTAL_ entries 
             * 该属性给终端用户提供当前页面的展示信息，字符串中的变量会随着表格的更新被动态替换，而且可以被任意移动和删除
             */
            "sInfo": "Got a total of _TOTAL_ entries to show (_START_ to _END_)",
            /*
             * 默认值为Showing 0 to 0 of 0 entries 
             * 当表格中没有数据时展示的表格信息，通常情况下格式会符合sInfo的格式
             */
            "sInfoEmpty": "No entries to show",
            /*
             * 默认值为(filtered from _MAX_ total entries) 
             * 当用户过滤表格中的信息的时候，该字符串会被附加到信息字符串的后面，从而给出过滤器强度的直观概念
             */
            "sInfoFiltered": " - filtering from _MAX_ records",
            /*
             * 默认值为空字符串
             * 使用该属性可以很方便的向表格信息字符串中添加额外的信息，被添加的信息在任何时候都会被附加到表格信息组件的后面
             * sInfoEmpty和sInfoFiltered可以以任何被使用的方式进行结合
             */
            "sInfoPostFix": "All records shown are derived from real information.",
            /*
             * 默认值为','
             * DataTable有内建的格式化数字的工具，可以用来格式化表格信息中较大的数字
             * 默认情况下会自动调用，可以使用该选项来自定义分割的字符 
             */
            "sInfoThousands": "'",
            /*
             * 默认值为Show _MENU_ entries 
             * 描述当分页组件的下拉菜单的选项被改变的时候发生的动作，'_MENU_'变量会被替换为默认的10，25，50，100
             * 如果需要的话可以被自定义的下拉组件替换
             */
            "sLengthMenu": "Display _MENU_ records",
            /*
             * 默认值为Loading...
             * 当使用Ajax数据源和表格在第一次被加载搜集数据的时候显示的字符串，该信息在一个空行显示
             * 向终端用户指明数据正在被加载，注意该参数在从服务器加载的时候无效，只有Ajax和客户端处理的时候有效
             */
            "sLoadingRecords": "Please wait - loading...",
            /*
             * 默认值为Processing...
             * 当表格处理用户动作（例如排序或者类似行为）的时候显示的字符串
             */
            "sProcessing": "DataTables is currently busy",
            /*
             * 默认为Search:
             * 描述用户在输入框输入过滤条件时的动作，变量'_INPUT_',如果用在字符串中
             * DataTable会使用用户输入的过滤条件替换_INPUT_为HTML文本组件，从而可以支配它（即用户输入的过滤条件）出现在信息字符串中的位置 
             * 如果变量没有指定，用户输入会自动添加到字符串后面
             */
            "sSearch": "Apply filter _INPUT_ to table",
            /*
             * 默认值为空字符串，即：无效
             * 所有语言信息可以被存储在服务器端的文件中，DataTable可以根据该参数指定的URL去寻找
             * 必须保存语言文件的URL信息，必须是JSON格式，对象和初始化中使用的oLanguage对象具有相同的属性
             * 请参考示例文件来了解该参数是如何工作的
             */
            "sUrl": "http://www.qxfun.com/dataTables/lang.txt",
            /*
             * 默认值为No matching records found
             * 当对数据进行过滤操作后，如果没有要显示的数据，会在表格记录中显示该字符串
             * sEmptyTable只在表格中没有数据的时候显示，忽略过滤操作
             */
            "sZeroRecords": "No records to display"
        }
    });
});

/*------------------------------------------------Options------------------------------------------------*/
/*
 * bDestroy
 * 默认为false
 * 使用传递的新的初始化对象中的属性构造一个新的表格，并替换一个匹配指定的选择器的表格
 * 如果没有匹配到表格，新的表格会被作为一个普通表格被构建
 */
$('selector').dataTable({
    "bFilter": false,
    "bDestroy": true
});

/*
 * bRetrieve
 * 默认为false
 * 使用指定的选择器检索表格，注意，如果表格已经被初始化，该参数会直接返回已经被创建的对象
 * 并不会顾及你传递进来的初始化参数对象的变化，将该参数设置为true说明你确认已经明白这一点
 * 如果你需要的话，bDestroy可以用来重新初始化表格
 */
$(document).ready(function () {
    initTable();
    tableActions();
});

function initTable() {
    return $('#example').dataTable({
        "sScrollY": "200px",
        "bPaginate": false,
        "bRetrieve": true
    });
}

function tableActions() {
    var oTable = initTable();
    // perform API operations with oTable 
}

/*
 * bScrollAutoCss
 * 默认为true
 * 指明DataTable中滚动的标题元素是否被允许设置内边距和外边距等
 */
$(document).ready(function () {
    $('#example').dataTable({
        "bScrollAutoCss": false,
        "sScrollY": "200px"
    });
});

/*
 * bScrollCollapse
 * 默认为false
 * 当垂直滚动被允许的时候，DataTable会强制表格视图在任何时候都是给定的高度（对布局有利）
 * 不过，当把数据集过滤到十分小的时候看起来会很古怪，而且页脚会留在最下面
 * 当结果集的高度比给定的高度小时该参数会使表格高度自适应
 */
$(document).ready(function () {
    $('#example').dataTable({
        "sScrollY": "200",
        "bScrollCollapse": true
    });
});

/*
 * bSortCellsTop
 * 默认为false
 * 是否允许DataTable使用顶部（默认为true）的单元格，或者底部（默认为false）的单元格，当使用复合表头的时候会有些用处
 */
$(document).ready(function () {
    $('#example').dataTable({
        "bSortCellsTop": true
    });
});

/*
 * iCookieDuration
 * 默认为7200秒（2个小时）
 * 设置用来存储会话信息的cookie的持续时间，单位是秒
 */
$(document).ready(function () {
    $('#example').dataTable({
        "iCookieDuration": 60 * 60 * 24 // 1 day
    });
})

/*
 * iDeferLoading
 * 默认为null
 * 当选项被开启的时候，DataTable在非加载第一次的时候不会向服务器请求数据，而是会使用页面上的已有数据（不会应用排序等）
 * 因此在加载的时候保留一个XmlHttpRequest，iDeferLoading被用来指明需要延迟加载，而且也用来通知DataTable一个满的表格有多少条数据
 * 信息元素和分页会被正确保留
 */
$(document).ready(function () {
    $('#example').dataTable({
        "bServerSide": true,
        "sAjaxSource": "scripts/server_processing.php",
        "iDeferLoading": 57
    });
});

/*
 * iDisplayLength
 * 默认为10
 * 单页显示的数据的条数，如果bLengthChange属性被开启，终端用户可以通过一个弹出菜单重写该数值
 */
$(document).ready(function () {
    $('#example').dataTable({
        "bServerSide": true,
        "sAjaxSource": "scripts/server_processing.php",
        "iDeferLoading": 57
    });
});

/*
 * iDisplayStart
 * 默认为0
 * 当开启分页的时候，定义展示的记录的起始序号，不是页数，因此如果你每个分页有10条记录而且想从第三页开始
 * 需要把该参数指定为20
 */
$(document).ready(function () {
    $('#example').dataTable({
        "iDisplayStart": 20
    });
})

/*
 * iScrollLoadGap
 * 默认为100
 * 滚动余界是指DataTable在当前页面还有多少条数据可供滚动时自动加载新的数据，你可能希望指定一个足够大的余界
 * 以便滚动加载数据的操作对用户来说是平滑的，同时也不会大到加载比需要的多的多的数据
 */
$(document).ready(function () {
    $('#example').dataTable({
        "bScrollInfinite": true,
        "bScrollCollapse": true,
        "sScrollY": "200px",
        "iScrollLoadGap": 50
    });
});

/*
 * iTabIndex
 * 默认为0
 * 默认情况下DataTable允许通过为需要键盘导航的元素添加tabindex属性来进行导航（排序、分页、过滤）
 * 允许你通过tab键切换控制组件，使用回车键去激活他们，默认为0表示按照文档流来切换
 * 如果需要的话，你可以使用该参数重写切换顺序，使用-1来禁止内建的键盘导航
 */
$(document).ready(function () {
    $('#example').dataTable({
        "iTabIndex": 1
    });
});

/*
 * oSearch
 * 无默认值
 * 该参数允许你在初始化的时候使用已经定义的全局过滤状态，sSearch对象必须被定义，但是所有的其它选项都是可选的
 * 当bRegex为true的时候，搜索字符串会被当作正则表达式，当为false（默认）的时候，会被直接当作一个字符串
 * 当bSmart为true的时候，DataTable会使用使用灵活过滤策略（匹配任何可能的数据），为false的时候不会这样做
 */
$(document).ready(function () {
    $('#example').dataTable({
        "oSearch": { "sSearch": "Initial search" }
    });
})

/*
 * sAjaxDataProp
 * 默认为aaData
 * 当使用Ajax数据源或者服务器端处理的时候，DataTable会默认搜索aaData属性作为数据源
 * 该选项允许变更数据源的名称，你可以使用JavaScript的点号对象表示法去访问多级网状数据源
 */
// Get data from { "data": [...] }
$(document).ready(function () {
    var oTable = $('#example').dataTable({
        "sAjaxSource": "sources/data.txt",
        "sAjaxDataProp": "data"
    });
});

// Get data from { "data": { "inner": [...] } }
$(document).ready(function () {
    var oTable = $('#example').dataTable({
        "sAjaxSource": "sources/data.txt",
        "sAjaxDataProp": "data.inner"
    });
});

/*
 * sAjaxSource
 * 默认为null
 * 该参数用来向DataTable指定加载的外部数据源（如果想使用现有的数据，请使用aData）
 * 可以简单的提供一个可以用来获得数据url或者JSON对象，该对象必须包含aaData，作为表格的数据源
 */
$(document).ready(function () {
    $('#example').dataTable({
        "sAjaxSource": "http://www.qxfun.com/dataTables/json.php"
    });
})

/*
 * sCookiePrefix
 * 默认为SpryMedia_DataTables_
 * 该参数可以用来重写DataTable默认指定的用来存储状态信息的cookie的前缀
*/
$(document).ready(function () {
    $('#example').dataTable({
        "sCookiePrefix": "my_datatable_"
    });
});

/*
 * sDom
 * 默认值为lfrtip (when bJQueryUI is false) or <"H"lfr>t<"F"ip> (when bJQueryUI is true)
 * 该初始化属性用来指定你想把各种控制组件注入到dom节点的位置（比如你想把分页组件放到表格的顶部）
 * DIV元素（带或者不带自定的class）可以添加目标样式，下列语法被使用
 *  可供使用的选项
 *      'l' - 长度改变
 *      'f' - 过滤输入
 *      't' - 表格
 *      'i' - 信息
 *      'p' - 分页
 *      'r' - 处理
 *  可供使用的常量
 *      'H' - jQueryUI theme "header" classes('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')
 *      'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')
 *  需要的语法
 *      '<' 和 '>' - div元素
 *      '<"class" and '>' - 带有class属性的div元素
 *      '<"#id" and '>' - 带有id属性的div元素
 *  例子
 *      '<"wrapper"flipt>'
 *      '<lf<t>ip>'
 */
$(document).ready(function () {
    $('#example').dataTable({
        "sDom": '<"top"i>rt<"bottom"flp><"clear"&lgt;'
    });
});

/*
 * sPaginationType
 * 默认为two_button
 * DataTable内建了两种交互式分页策略，两个按钮和全页数，展现给终端用户不同的控制方式
 * 可以通过API增加策略
 */
$(document).ready(function () {
    $('#example').dataTable({
        "sPaginationType": "full_numbers"
    });
})

/*
 * sScrollXInner
 * 默认为空字符串，即：无效
 * 当横向滚动可用的时候，该属性可以用来强制DataTable的宽度比需要的更长
 * 比如你需要表格彼此相隔适宜，该变量可以用来使表格变大，而且强制滚动
 * 该该属性可以是css设置，或者一个数字（作为像素量度来使用）
 */
$(document).ready(function () {
    $('#example').dataTable({
        "sScrollX": "100%",
        "sScrollXInner": "110%"
    });
});

/*
 * sServerMethod
 * 默认值为GET
 * 设置使用Ajax方式调用的服务器端的处理方法或者Ajax数据源的HTTP请求方式
 */
$(document).ready(function () {
    $('#example').dataTable({
        "bServerSide": true,
        "sAjaxSource": "scripts/post.php",
        "sServerMethod": "POST"
    });
});
/*------------------------------------------------Callback------------------------------------------------*/
/*
 * fnCookieCallback
 * 无默认值
 * 当DataTable的状态保留可用时，自定义被保存的cookie和参数。只要cookie被修改就会调用此方法
 * 该方法需要返回一个格式良好的cookie字符串，注意数据对象是以Javascript对象的形式传递进来的，必须转换成字符串，例如JSON格式
 */
$(document).ready(function () {
    $('#example').dataTable({
        "fnCookieCallback": function (sName, oData, sExpires, sPath) {
            // Customise oData or sName or whatever else here
            return sName + "=" + JSON.stringify(oData) + "; expires=" + sExpires + "; path=" + sPath;
        }
    });
});

/*
 * fnCreatedRow
 * 无默认值
 * 当一个新的TR元素（并且所有TD子元素被插入）被创建或者被作为一个DOM资源被注册时调用该函数
 * 允许操作该TR元素
 */
$(document).ready(function () {
    $('#example').dataTable({
        "fnCreatedRow": function (nRow, aData, iDataIndex) {
            // Bold the grade for all 'A' grade browsers
            if (aData[4] == "A") {
                $('td:eq(4)', nRow).html('<b>A</b>');
            }
        }
    });
});

/*
 * fnDrawCallback
 * 无默认值
 * 每当draw事件发生时调用该函数，允许你动态编辑新建的dom对象的任何属性
 */
$(document).ready(function () {
    $('#example').dataTable({
        "fnDrawCallback": function () {
            alert('DataTables has redrawn the table');
        }
    });
});

/*
 * fnFooterCallback
 * 无默认值
 * 与fnHeaderCallback()完全相同，只是该函数允许你在每一个draw时间发生时修改页脚
 */
$(document).ready(function () {
    $('#example').dataTable({
        "fnDrawCallback": function () {
            alert('DataTables has redrawn the table');
        }
    });
});

/*
 * fnFormatNumber
 * 无默认值
 * 当渲染表格信息（例如：显示57条记录中的1-10条）中大的数字时
 * 为了方便用户，DataTable会使用逗号分割每千单位（例如1000000会被渲染为1,000,000）
 * 该函数会重写DataTable默认使用的策略
 */
$(document).ready(function () {
    $('#example').dataTable({
        "fnFormatNumber": function (iIn) {
            if (iIn < 1000) {
                return iIn;
            } else {
                var
                  s = (iIn + ""),
                  a = s.split(""), out = "",
                  iLen = s.length;

                for (var i = 0 ; i < iLen ; i++) {
                    if (i % 3 === 0 && i !== 0) {
                        out = "'" + out;
                    }
                    out = a[iLen - i - 1] + out;
                }
            }
            return out;
        }
    });
});

/*
 * fnHeaderCallback
 * 无默认值
 * 每当draw事件发生时调用该函数，允许你动态编辑表头行，可以用来计算和展示关于表格的有用的信息
 */
$(document).ready(function () {
    $('#example').dataTable({
        "fnFormatNumber": function (iIn) {
            if (iIn < 1000) {
                return iIn;
            } else {
                var
        s = (iIn + ""),
        a = s.split(""), out = "",
        iLen = s.length;

                for (var i = 0 ; i < iLen ; i++) {
                    if (i % 3 === 0 && i !== 0) {
                        out = "'" + out;
                    }
                    out = a[iLen - i - 1] + out;
                }
            }
            return out;
        }
    });
});

/*
 * fnInfoCallback
 * 无默认值
 * 信息元素可以用来传输表格当前状态的信息，尽管DataTable提供的国际化的选项在处理大多数自定义情况时已经相当方便了
 * 或许你有时仍然希望自定义深层的字符串,该函数会满足你的需要
 */
$('#example').dataTable({
    "fnInfoCallback": function (oSettings, iStart, iEnd, iMax, iTotal, sPre) {
        return iStart + " to " + iEnd;
    }
});

/*
 * fnInitComplete
 * 无默认值
 * 当表格被初始化后调用该函数，通常DataTable会被持续初始化，并不需要该函数
 * 可是，当使用异步的XmlHttpRequest从外部获得语言信息时，初始化并不是持续的
 */
$(document).ready(function () {
    $('#example').dataTable({
        "fnInitComplete": function (oSettings, json) {
            alert('DataTables has finished its initialisation.');
        }
    });
})

/*
 * fnPreDrawCallback
 * 无默认值
 * 在每一个表格draw事件发生前调用该函数，通过返回false来取消draw事件
 * 其它任何的返回值，包括undefined都会导致draw事件的发生
 */
$(document).ready(function () {
    $('#example').dataTable({
        "fnPreDrawCallback": function (oSettings) {
            if ($('#test').val() == 1) {
                return false;
            }
        }
    });
});

/*
 * fnRowCallback
 * 无默认值
 * 你可以通过该函数在每一个表格绘制事件发生之后，渲染到屏幕上之前，向表格里的每一行传递'处理过程'
 * 该函数可以用来设置行的class名字等
 */
$(document).ready(function () {
    $('#example').dataTable({
        "fnRowCallback": function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
            // Bold the grade for all 'A' grade browsers
            if (aData[4] == "A") {
                $('td:eq(4)', nRow).html('<b>A</b>');
            }
        }
    });
});

/*
 * fnServerData
 * 无默认值
 * 你可以使用该参数重写从服务器获取数据的方法（$.getJSON）,从而使其更适合你的应用
 * 例如你可以使用POST方式提交，或者从Google Gears或者AIR数据库获取数据
 */
// POST data to server
$(document).ready(function () {
    $('#example').dataTable({
        "bProcessing": true,
        "bServerSide": true,
        "sAjaxSource": "xhr.php",
        "fnServerData": function (sSource, aoData, fnCallback) {
            $.ajax({
                "dataType": 'json',
                "type": "POST",
                "url": sSource,
                "data": aoData,
                "success": fnCallback
            });
        }
    });
});

/*
 * fnServerParams
 * 无默认值
 * 用来在向服务器发送Ajax请求时发送额外的数据，例如自定义的过滤信息，该函数使向服务器发送额外参数变得简单
 * 传递进来的参数是DataTable建立的数据集合，你可以根据需要添加或者修改该集合
 */
$(document).ready(function () {
    $('#example').dataTable({
        "bProcessing": true,
        "bServerSide": true,
        "sAjaxSource": "scripts/server_processing.php",
        "fnServerParams": function (aoData) {
            aoData.push({ "name": "more_data", "value": "my_value" });
        }
    });
});

/*
 * fnStateLoad
 * 无默认值
 * 加载表格状态，使用该函数你可以定义状态信息加载的位置和方式，默认情况下DataTable会从cookie中加载
 * 不过你或许希望使用本地存储（HTML5支持），或者服务端数据库
 */
$(document).ready(function () {
    $('#example').dataTable({
        "bStateSave": true,
        "fnStateSave": function (oSettings, oData) {
            var o;

            // Send an Ajax request to the server to get the data. Note that
            // this is a synchronous request.
            $.ajax({
                "url": "/state_load",
                "async": false,
                "dataType": "json",
                "success": function (json) {
                    o = json;
                }
            });
            return o;
        }
    });
});

/*
 * fnStateLoadParams
 * 无默认值
 * 该回调可以用来在加载状态信息之前编辑状态信息
 * 函数在表格从存储的数据加载状态信息时调用，在表格<当前使用的设置对象>被<从保存信息中加载的设置对象>修改以前调用
 * 注意作为插件开发者，你应该使用'stateLoadParams'事件去加载plug-in的参数
 */
// Remove a saved filter, so filtering is never loaded
$(document).ready(function () {
    $('#example').dataTable({
        "bStateSave": true,
        "fnStateLoadParams": function (oSettings, oData) {
            oData.oFilter.sSearch = "";
        }
    });
});


// Disallow state loading by returning false
$(document).ready(function () {
    $('#example').dataTable({
        "bStateSave": true,
        "fnStateLoadParams": function (oSettings, oData) {
            return false;
        }
    });
});

/*
 * fnStateLoaded
 * 无默认值
 * 在表格状态被状态存储方法读取和DataTable设置对象被修改时调用，作为被状态信息被加载的结果
 */
// Show an alert with the filtering value that was saved
$(document).ready(function () {
    $('#example').dataTable({
        "bStateSave": true,
        "fnStateLoaded": function (oSettings, oData) {
            alert('Saved filter was: ' + oData.oFilter.sSearch);
        }
    });
});

/*
 * fnStateSave
 * 无默认值
 * 保存表格状态，使用该函数你可以定义状态信息保存的位置和方式，默认情况下DataTable会保存在cookie中
 * 不过你或许希望使用本地存储（HTML5支持），或者服务端数据库
 */
$(document).ready(function () {
    $('#example').dataTable({
        "bStateSave": true,
        "fnStateSave": function (oSettings, oData) {
            // Send an Ajax request to the server with the state object
            $.ajax({
                "url": "/state_save",
                "data": oData,
                "dataType": "json",
                "type": "POST",
                "success": function () { }
            });
        }
    });
});

/*
 * fnStateSaveParams
 * 无默认值
 * 该回调允许你编辑被保存的状态信息，在表格改变了状态信息需要保存的时候调用
 * 可以使用该回调在保存状态信息的对象被保存以前对其进行修改，包括添加或者其它状态属性或者修改
 */
// Remove a saved filter, so filtering is never saved
$(document).ready(function () {
    $('#example').dataTable({
        "bStateSave": true,
        "fnStateLoadParams": function (oSettings, oData) {
            oData.oFilter.sSearch = "";
        }
    });
});
/*------------------------------------------------Columns------------------------------------------------*/
/*
 * aDataSort
 * 默认为null,自动使用列序号作为默认
 * 在排序一列的时候同时将其它几列也排序，例如名和姓作为多列排序
 */
// Using aoColumnDefs
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumnDefs": [
    { "aDataSort": [0, 1], "aTargets": [0] },
        { "aDataSort": [1, 0], "aTargets": [1] },
        { "aDataSort": [2, 3, 4], "aTargets": [2] }
        ]
    });
});


// Using aoColumns
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumns": [
    { "aDataSort": [0, 1] },
        { "aDataSort": [1, 0] },
        { "aDataSort": [2, 3, 4] },
        null,
        null
        ]
    });
});

/*
 * asSorting
 * 默认为[ 'asc', 'desc' ] 
 * 你可以通过该参数控制默认排序的方向，甚至改变排序处理器的行为（例如：只允许升序排序）
 */
// Using aoColumnDefs
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumnDefs": [
    { "asSorting": ["asc"], "aTargets": [1] },
        { "asSorting": ["desc", "asc", "asc"], "aTargets": [2] },
        { "asSorting": ["desc"], "aTargets": [3] }
        ]
    });
});


// Using aoColumns
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumns": [
        null,
        { "asSorting": ["asc"] },
        { "asSorting": ["desc", "asc", "asc"] },
        { "asSorting": ["desc"] },
        null
        ]
    });
});

/*
 * bSearchable
 * 默认为true
 * 是否在列上应用过滤
 */
// Using aoColumnDefs
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumnDefs": [
    { "bSearchable": false, "aTargets": [0] }
        ]
    });
});


// Using aoColumns
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumns": [
    { "bSearchable": false },
        null,
        null,
        null,
        null
        ]
    });
});

/*
 * bSortable
 * 默认为true
 * 是否在某一列上开启排序
 */
// Using aoColumnDefs
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumnDefs": [
    { "bSortable": false, "aTargets": [0] }
        ]
    });
});


// Using aoColumns
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumns": [
    { "bSortable": false },
        null,
        null,
        null,
        null
        ]
    });
});

/*
 * bUseRendered
 * 默认为true
 * 当对一列使用使用fnRender时，你或许希望使用原始的数据（渲染以前）去排序或者过滤（默认是使用用户看到的渲染过的数据）
 * 或许对日期类型有些用处，注意，现在建议使用mDataProp作为函数并且使用该函数提供的type参数，来允许不同的数据被用来排序，过滤，展现和类型检测
 */
// Using aoColumnDefs
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumnDefs": [
    {
        "fnRender": function (oObj) {
            return oObj.aData[0] + ' ' + oObj.aData[3];
        },
        "bUseRendered": false,
        "aTargets": [0]
    }
        ]
    });
});

// Using aoColumns
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumns": [
    {
        "fnRender": function (oObj) {
            return oObj.aData[0] + ' ' + oObj.aData[3];
        },
        "bUseRendered": false
    },
        null,
        null,
        null,
        null
        ]
    });
});

/*
 * bVisible
 * 默认值为true
 * 是否展示某一列
 */
// Using aoColumnDefs
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumnDefs": [
    { "bVisible": false, "aTargets": [0] }
        ]
    });
});


// Using aoColumns
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumns": [
    { "bVisible": false },
        null,
        null,
        null,
        null
        ]
    });
});

/*
 * fnCreatedCell
 * 无默认值
 * 每当新的单元格被建立（Ajax源等）或者处理输入（DOM源）时，开发者可定义的函数会被调用
 * 该属性用作fnRender的补充来允许你修改在fnRender函数调用之后新建的DOM元素（例如增加背景颜色）
 */
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumnDefs": [{
            "aTargets": [3],
            "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                if (sData == "1.7") {
                    $(nTd).css('color', 'blue')
                }
            }
        }]
    });
});

/*
 * fnRender
 * 无默认值
 * 自定义列中每个单元格被展示的时候调用的展示函数
 */
// Using aoColumnDefs
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumnDefs": [
    {
        "fnRender": function (o, val) {
            return o.aData[0] + ' ' + o.aData[3];
        },
        "aTargets": [0]
    }
        ]
    });
});


// Using aoColumns
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumns": [
    {
        "fnRender": function (o, val) {
            return o.aData[0] + ' ' + o.aData[3];
        }
    },
        null,
        null,
        null,
        null
        ]
    });
});

/*
 * iDataSort
 * 默认值为-1，使用自动计算的列标
 * 当选择该列进行排序的时候，你希望调用排序操作的列的列号，该参数可以用来按隐藏列排序
 */
// Using aoColumnDefs
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumnDefs": [
    { "iDataSort": 1, "aTargets": [0] }
        ]
    });
});

// Using aoColumns
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumns": [
    { "iDataSort": 1 },
        null,
        null,
        null,
        null
        ]
    });
});

/*
 * mDataProp
 * 默认为null,使用自动计算的列标
 * 该属性可以从任何JSON格式数据源读取属性，包括深层网状的对象和属性，
 * 有几种不同的传递方式可以影响mDataProp的行为
 * 整型：被当作数据源的数组下表，是DataTable使用的默认行为（每列递增）
 * 字符串类型：被当作从数据源获取的对象的属性名，注意你可以使用Javascript点号访问符去访问深层次的属性或数组
 * null：sDafaultContent选项会被使用到单元格上，（默认是空字符串，当生成可编辑列、可删除列的时候可以使用该属性）
 * 函数：当表格获取或者设置单元格时被调用的函数，函数有三个参数
 *      {array|object}:该行的数据源
 *      {string}:调用数据请求的类型，设置数据时是'set'，收集数据时是'filter','display','type','sort'
 *      {*}:当第二个参数是set的时候，要被设置的数据
 *      当类型是'set'的时候，该函数不需要返回一个值，除此之外，返回值是可以用来请求数据的
 */
// Read table data from objects
$(document).ready(function () {
    var oTable = $('#example').dataTable({
        "sAjaxSource": "sources/deep.txt",
        "aoColumns": [
    { "mDataProp": "engine" },
        { "mDataProp": "browser" },
        { "mDataProp": "platform.inner" },
        { "mDataProp": "platform.details.0" },
        { "mDataProp": "platform.details.1" }
        ]
    });
});


// Using mDataProp as a function to provide different information for
// sorting, filtering and display. In this case, currency (price)
$(document).ready(function () {
    var oTable = $('#example').dataTable({
        "aoColumnDefs": [
        {
            "aTargets": [0],
            "mDataProp": function (source, type, val) {
                if (type === 'set') {
                    source.price = val;
                    // Store the computed dislay and filter values for efficiency
                    source.price_display = val == "" ? "" : "$" + numberFormat(val);
                    source.price_filter = val == "" ? "" : "$" + numberFormat(val) + " " + val;
                    return;
                }
                else if (type === 'display') {
                    return source.price_display;
                }
                else if (type === 'filter') {
                    return source.price_filter;
                }
                // 'sort' and 'type' both just use the integer
                return source.price;
            }
        }
        ]
    });
});

/*
 * sClass
 * 默认值为空字符串
 * 该列的每一个单元格被赋予的class
 */
// Using aoColumnDefs
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumnDefs": [
    { "sClass": "my_class", "aTargets": [0] }
        ]
    });
});

// Using aoColumns
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumns": [
    { "sClass": "my_class" },
        null,
        null,
        null,
        null
        ]
    });
});

/*
 * sContentPadding
 * 默认值为空字符串
 * 当DataTable计算分配给每一列的列宽的时候，会寻找每一列中最长的字符串，然后构建一个临时表
 * 从临时表中读取宽度，这样带来的问题是'mmm'会比'iiii'的长度长很多，但是后者的长度要大
 * 这样计算值会出现偏差（正确的处理然后放入DOM对象再测量长度会相当的慢），我们提供了这个选项作为一个解决方法
 * 它会把他的值添加到该列最长的值的后面来计算列宽，通常你不需要该属性，该属性也没有被写到DataTables.net的文档中
 */
// Using aoColumns
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumns": [
          null,
          null,
          null,
          {
              "sContentPadding": "mmm"
          }
        ]
    });
});

/*
 * sDefaultContent
 * 默认为空字符串
 * 允许给列值一个默认值，只要发现null值就会显示默认值
 * 可以由mDataProp设置为null或者数据源是null引起
 */
// Using aoColumnDefs
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumnDefs": [
    {
        "mDataProp": null,
        "sDefaultContent": "Edit",
        "aTargets": [-1]
    }
        ]
    });
});


// Using aoColumns
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumns": [
        null,
        null,
        null,
        {
            "mDataProp": null,
            "sDefaultContent": "Edit"
        }
        ]
    });
});

/*
 * sName
 * 默认值为空字符串
 * 该参数只有使用在服务器端处理的时候调用，在了解客户端展示了哪些列的时候十分有用
 * 然后与数据库字段建立映射，当被定义时，如果服务器端返回的信息的顺序不是期望的顺序，也可以使用名字去区分
 * 使用这种方式的好处是：用户在客户端交换了列，你的服务器端代码不用更新
 */
// Using aoColumnDefs
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumnDefs": [
    { "sName": "engine", "aTargets": [0] },
        { "sName": "browser", "aTargets": [1] },
        { "sName": "platform", "aTargets": [2] },
        { "sName": "version", "aTargets": [3] },
        { "sName": "grade", "aTargets": [4] }
        ]
    });
});


// Using aoColumns
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumns": [
    { "sName": "engine" },
        { "sName": "browser" },
        { "sName": "platform" },
        { "sName": "version" },
        { "sName": "grade" }
        ]
    });
});

/*
 * sSortDataType
 * 默认值为std
 * 为排序操作定义可以用来在排序前读取实时表格信息（更新内部缓存版本）的数据源的类型
 * 允许排序事件发生在用户可编辑的元素上，例如输入框
 */
// Using aoColumnDefs
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumnDefs": [
    { "sSortDataType": "dom-text", "aTargets": [2, 3] },
        { "sType": "numeric", "aTargets": [3] },
        { "sSortDataType": "dom-select", "aTargets": [4] },
        { "sSortDataType": "dom-checkbox", "aTargets": [5] }
        ]
    });
});


// Using aoColumns
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumns": [
        null,
        null,
        { "sSortDataType": "dom-text" },
        { "sSortDataType": "dom-text", "sType": "numeric" },
        { "sSortDataType": "dom-select" },
        { "sSortDataType": "dom-checkbox" }
        ]
    });
});

/*
 * sTitle
 * 默认值为null,从TH标签读取
 * 列名
 */
// Using aoColumnDefs
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumnDefs": [
    { "sTitle": "My column title", "aTargets": [0] }
        ]
    });
});


// Using aoColumns
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumns": [
    { "sTitle": "My column title" },
        null,
        null,
        null,
        null
        ]
    });
});

/*
 * sType
 * 默认值为null,从弱引用数据中自动判断
 * 允许你指定该列数据按什么类型来排序，目前有四种类型（字符串，数字，日期和html（在排序前会自动除去HTML标记））可选
 * 注意只有能够被Javascript的Date对象接受的格式化日期字符串才会被当作日期类型接受，例如"Mar 26, 2008 5:03 PM"
 * 默认是使用html类型，更多类型可以通过插件添加
 */
// Using aoColumnDefs
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumnDefs": [
    { "sType": "html", "aTargets": [0] }
        ]
    });
});


// Using aoColumns
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumns": [
    { "sType": "html" },
        null,
        null,
        null,
        null
        ]
    });
});

/*
 * sWidth
 * 默认值为null,自动的
 * 定义列的宽度，该参数可以接受CSS定义（3em,20px等），DataTable对没有通过该接口指定宽度的列使用灵活宽度
 * 从而保证表格是可被读的
 */
// Using aoColumnDefs
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumnDefs": [
    { "sWidth": "20%", "aTargets": [0] }
        ]
    });
});


// Using aoColumns
$(document).ready(function () {
    $('#example').dataTable({
        "aoColumns": [
    { "sWidth": "20%" },
        null,
        null,
        null,
        null
        ]
    });
});
/*------------------------------------------------ServerSide------------------------------------------------*/
/*
 * bServerSide
 * 默认值false
 * 配置使用服务器端处理的DataTable，注意sAjaxSource参数必须指定，以便给DataTable一个获取每行数据的数据源
 */
$(document).ready(function () {
    $('#example').dataTable({
        "bServerSide": true,
        "sAjaxSource": "xhr.php"
    });
});
/*
 * fnServerData
 * 无默认值
 * 你可以使用该参数重写从服务器获取数据的方法（$.getJSON）,从而使其更适合你的应用
 * 例如你可以使用POST方式提交，或者从Google Gears或者AIR数据库获取数据
 */
// POST data to server
$(document).ready(function () {
    $('#example').dataTable({
        "bProcessing": true,
        "bServerSide": true,
        "sAjaxSource": "xhr.php",
        "fnServerData": function (sSource, aoData, fnCallback) {
            $.ajax({
                "dataType": 'json',
                "type": "POST",
                "url": sSource,
                "data": aoData,
                "success": fnCallback
            });
        }
    });
});
/*
 * fnServerParams
 * 无默认值
 * 用来在向服务器发送Ajax请求时发送额外的数据，例如自定义的过滤信息，该函数使向服务器发送额外参数变得简单
 * 传递进来的参数是DataTable建立的数据集合，你可以根据需要添加或者修改该集合
 */
$(document).ready(function () {
    $('#example').dataTable({
        "bProcessing": true,
        "bServerSide": true,
        "sAjaxSource": "scripts/server_processing.php",
        "fnServerParams": function (aoData) {
            aoData.push({ "name": "more_data", "value": "my_value" });
        }
    });
});
/*
 * sAjaxDataProp
 * 默认为aaData
 * 当使用Ajax数据源或者服务器端处理的时候，DataTable会默认搜索aaData属性作为数据源
 * 该选项允许变更数据源的名称，你可以使用JavaScript的点号对象表示法去访问多级网状数据源
 */
// Get data from { "data": [...] }
$(document).ready(function () {
    var oTable = $('#example').dataTable({
        "sAjaxSource": "sources/data.txt",
        "sAjaxDataProp": "data"
    });
});


// Get data from { "data": { "inner": [...] } }
$(document).ready(function () {
    var oTable = $('#example').dataTable({
        "sAjaxSource": "sources/data.txt",
        "sAjaxDataProp": "data.inner"
    });
});
/*
 * sAjaxSource
 * 默认为null
 * 该参数用来向DataTable指定加载的外部数据源（如果想使用现有的数据，请使用aData）
 * 可以简单的提供一个可以用来获得数据url或者JSON对象，该对象必须包含aaData，作为表格的数据源
 */
$(document).ready(function () {
    $('#example').dataTable({
        "sAjaxSource": "http://www.qxfun.com/dataTables/json.php"
    });
})
/*
 * sServerMethod
 * 默认值为GET
 * 设置使用Ajax方式调用的服务器端的处理方法或者Ajax数据源的HTTP请求方式
 */
$(document).ready(function () {
    $('#example').dataTable({
        "bServerSide": true,
        "sAjaxSource": "scripts/post.php",
        "sServerMethod": "POST"
    });
});