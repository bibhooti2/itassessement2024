// Define the data
const data = [
    ["1", "Name 1", "1.jpg"],
    ["2", "Name 2", "2.jpg"],
    ["3", "Name 3", "3.jpg"],
    ["4", "Name 4", "4.jpg"],
  ];
  
  // Get the table body element
  const tableBody = document.getElementById('tableBody');
  
  // Loop through the data and create table rows
  data.forEach((row, index) => {
    const tr = document.createElement('tr');
    row.forEach(cellData => {
      const td = document.createElement('td');
      td.textContent = cellData;
      tr.appendChild(td);
    });
  
    // Apply alternating background color
    tr.classList.add(index % 2 === 0 ? 'even' : 'odd');
  
    // Append the row to the table body
    tableBody.appendChild(tr);
  });