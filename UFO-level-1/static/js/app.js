// from data.js
var tableData = data;
var tbody = d3.select('tbody');
var input = d3.select('input');
var btn = d3.select('button');

renderData(tableData);
btn.on('click',handleClick);

// ==================================
function renderData(data) {
    tbody.html('');
    data.forEach(dataObj => {
        var row = tbody.append('tr');
        Object.values(dataObj).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        });
    });
};

function handleClick() {
    var filteredData = tableData;
    var date = input.property('value');
    
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date)
    };

    renderData(filteredData);
    input.property('value','');
};
