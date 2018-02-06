// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];



planets.forEach(function (planet, value){
    var node = document.createElement('OPTION');
    var textnode = document.createTextNode(planet[0]);
    var attr = document.createAttribute('value');
    var attr2 = document.createAttribute('data-weight');
    attr.value = planet[0];
    attr2.value = planet[1];
    node.setAttributeNode(attr);
    node.setAttributeNode(attr2);
    node.appendChild(textnode);
    document.getElementById("planets").appendChild(node);
})

function handleClickEvent (e) {
    var planetName = $('select#planets option:checked').text();
    var weight = $('select#planets option:checked').data('weight');
    var userWeight = $('#user-weight').val();
    var result = userWeight * weight;
            
    $('#output').html('If you were on ' + planetName + ', you would weigh ' + result + 'lbs!');
}

$('#calculate-button').click(handleClickEvent);