// Set Interval
function showData() {
    const value = prompt('Please provide a value');
    alert(`I got ${value}`);
    const textValue = document.getElementById('inputField').value;
    const h1 = document.createElement('h1');
    h1.innerHTML = `
        <h1>${textValue}</h1>
    `;
    const appendContainer = document.querySelector('body');
    setTimeout(() => appendContainer.appendChild(h1), 3500);
}

// prompt   
