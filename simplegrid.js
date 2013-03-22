/**
 * テーブルを作成するスクリプト
 */
$(function() {
    /**
     * ヘッダーの文字列
     */
    var header = "";

    $('#dbList').append("<div>ページャ</div>");

    $("#dbList").append("<table id='main_table' border='1px solid black'><thead></thead><tfoot></tfoot><tbody></tbody></table>");

    var table = $('#main_table');
    var header = table.find('thead');
    var body = table.find('tbody');
    var footer = table.find('tfoot');

    headerMaker(category);
    bodyMaker(bodyArray);

    /**
     * ヘッダーを生成する
     */
    function headerMaker(category) {
        var tdArray = null;
        var newRow = '<tr>';

        var childNum;

        for ( var i = 0; i < category.length; i++) {
            childNum = category[i].child.length;
            var colName = category[i].name;
            var column = '<td colspan="' + childNum + '">' + colName + '</td>';
            newRow = newRow + column;

            if (tdArray instanceof Array) {
                tdArray = tdArray.concat(category[i].child);
            } else {
                tdArray = category[i].child;
            }
        }
        newRow = newRow + "</tr>";

        header.append(newRow);

        if (tdArray instanceof Array) {
            headerMaker(tdArray)
        }

        /**
         * childの総数をとってくる関数 TODO いったん手打ち
         */
        function allChildGetter(obj) {
            var childNum = 0;

            return function(obj) {
                if (obj)
                    childNum += obj.child.length;
            }
        }
    }

    /**
     * ボディ部を生成する
     */
    function bodyMaker(rowArray) {
        var rowNum = rowArray.length;

        for ( var i = 0; i < rowNum; i++) {
            var row = rowArray[i];
            var rowSt = '<tr>';
            for ( var st in row) {
                rowSt = rowSt + '<td>' + row[st] + '</td>';
            }
            rowSt = rowSt + '</tr>';
            body.append(rowSt);
        }
    }
});
