var friends = ['Sandy', 'Cory', 'Chris', 'Ariana', 'Terry'];
var locations = ['classroom', 'bathroom', 'kitchen', 'library', 'bedroom', 'closet', 'dining room', 'atrium', 'hallway', 'elevator'];
var weapons = ['taco', 'spork', 'firework', 'pencil', 'bottle', 'broken heart', 'book', 'gun', 'knife', 'candlestick', 
    'jolly rancher', 'gum', 'hose', 'car', 'table', 'chair', 'sofa', 'binder', 'hotdog', 'ramen'];
for (var i=1; i <= 100; i++) {
    createAccusation(i);
}
    function createAccusation(num) {

        var accusation = document.createTextNode('Accusation # ' + (num));    // What the h3 displays
        var alertAccu = 'Accusation # ' + (num);  //Inside var text, states the accusation #

        var weaponSelector = num % weapons.length;    // Remainder can only be  <= 19
        var locationSelector = num % locations.length;    // Remainder can only be <= 9
        var friendSelector = num % friends.length;    // Remainder can only be <= 4

        var h3 = document.createElement('h3');
        var text = alertAccu + ': I accuse ' + friends[friendSelector] + ', with the ' + weapons[weaponSelector] + ' in the ' + locations[locationSelector] + '!';  // What will be in the alert message

        h3.appendChild(accusation); // Inserted var accusation into all the h3 created from the loop
        document.body.appendChild(h3);  //Inserted the h3s into the body of the document
        h3.addEventListener('click', alerts); // When i click any h3, the alerts function will be displayed as a window.alert
        function alerts () {
            alert(text);
        }
    }
     
