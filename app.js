document.getElementById('button1').addEventListener('click', loadCustomers);

function loadCustomers(e) {
   const xhr = new XMLHttpRequest();

   xhr.open('GET', 'customers.json', true);

   xhr.onload = function() {
      if (this.status === 200) {
         // JSON.parse() converts a JSON object into an object literal
         const customers = JSON.parse(this.responseText);

         let output = '';

         customers.forEach(function(customer) {
            output += `
            <ul>
               <li>ID: ${customer.id}</li>
               <li>Name: ${customer.name}</li>
               <li>Favorite Game: ${customer.favoritegame}</li>
            </ul>
            `
         })

         document.getElementById('customers').innerHTML = output;
      }
   }

   xhr.send();

}