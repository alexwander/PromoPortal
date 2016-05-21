/**
 * Created by alexandr on 29.02.2016.
 */


function createBarChart(context, data, startX, barWidth, chartHeight, markDataIncrementsIn) {

    context.lineWidth = "1.2";
    var startY = 780;

    createAxis(context, startX, startY, startX, 30);//vertical axis
    createAxis(context, startX, startY, 650, startY);//horizontal axis

    context.lineWidth = "0.0";
    var maxValue = 0;
    for (var i = 0; i < data.length; i++) {

        var item = data[i].split(",");
        var itemName = item[0];
        var itemValue = parseInt(item[1]);
        if (parseInt(itemValue) > parseInt(maxValue)) maxValue = itemValue;

        context.fillStyle = "blue";
        createBar(context, 20 + startX + (i * barWidth) + i + (i * 30), (chartHeight - itemValue), barWidth, itemValue, true);

        context.textAlign = "left";
        context.fillStyle = "black";
        context.fillText(itemName, 20 + startX + (i * barWidth) + i + (i * 30), chartHeight + 15, 200);
    }
}





