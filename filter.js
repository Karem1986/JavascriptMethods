function getPositiveTemperatures(temperatures) {
    let tempWEER = temperatures.filter(function(temp) {
          return temp >= 0
    })
    return tempWEER
    }
    console.log(getPositiveTemperatures([-5, 12, 3])); 
    //OR

    function getPositiveTemperatures(temperatures) {
        return temperatures.filter(function(temperature) {
            return temperature > 0;
        });
    }