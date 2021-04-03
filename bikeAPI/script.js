const createNode = (element) => {
    return document.createElement(element);
};

const append = (parent, el) => {
    return parent.appendChild(el);
}

const table = document.getElementById('bikes');
const url = 'https://gbfs.bird.co/dc';

fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        let bikes = data.data.bikes;
        return bikes.slice(0, 20).map(bike => {
            let td = createNode('td');
            let td2 = createNode('td');
            let td3 = createNode('td');
            let tr = createNode('tr');
            td.innerHTML = bike.bike_id;
            td2.innerHTML = bike.battery_level;
            td3.innerHTML = bike.vehicle_type;
            append(tr,td);
            append(tr,td2);
            append(tr,td3);
            append(table, tr);
        })
    })
    .catch(function(error) {
        console.log(error);
      });