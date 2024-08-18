// Reference to the table
const table = document.querySelector('#channels tbody');

// Populate the table with data
channelData.forEach(item => {
    const row = `<tr><td>${item.network}</td><td>${item.channel}</td></tr>`;
    table.insertAdjacentHTML('beforeend', row);
});

// Initialize the datatable with a "Show All" option
new simpleDatatables.DataTable("#channels", {
    paging: true,
    perPageSelect: [10, 25, ["All", -1]],
    perPage: -1
});
